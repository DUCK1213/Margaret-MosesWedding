import { useState } from "react";
import { Clock, Music, Utensils, Camera, Heart, Sparkles, PartyPopper, Church, Car, Gift, Cake, Wine, Moon, Sun, Users, Mic2, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

type EventItem = {
  time: string;
  event: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

type ProgrammePart = {
  id: string;
  title: string;
  subtitle: string;
  timeRange: string;
  events: EventItem[];
  color: string;
};

const EventProgramme = () => {
  const [expandedParts, setExpandedParts] = useState<Set<string>>(new Set(["part1", "part2"]));
  const [activeEvent, setActiveEvent] = useState<string | null>(null);

  const programmeParts: ProgrammePart[] = [
    {
      id: "part1",
      title: "Morning Preparations",
      subtitle: "The Procession",
      timeRange: "6:00 AM – 8:45 AM",
      color: "from-amber-500/20 to-gold/10",
      events: [
        { time: "6:00 AM", event: "Wake Up & Devotion", description: "Bride and Groom teams begin with prayers at separate locations. Breakfast for the bridal teams.", icon: Sun },
        { time: "7:00 AM", event: "Glam & Dressing", description: "Hair and makeup for Margaret. Grooming for Moses. Photographer arrives for 'Getting Ready' shots.", icon: Sparkles },
        { time: "7:45 AM", event: "Groom's Convoy Departs", description: "Moses and team leave to pick up the bride", icon: Car },
        { time: "8:15 AM", event: "The Pick-Up (Kutoa Bibi)", description: "Brief negotiation/singing, first look, parents' blessings at the Bride's residence", icon: Heart },
        { time: "8:45 AM", event: "Bridal Convoy Departure", description: "Convoy heads to St. Michael & All Angels, Ruiru Town", icon: Car },
      ],
    },
    {
      id: "part2",
      title: "Church Ceremony",
      subtitle: "St. Michael & All Angels, Ruiru Town",
      timeRange: "9:00 AM – 11:30 AM",
      color: "from-emerald/20 to-emerald-light/10",
      events: [
        { time: "9:00 AM", event: "Arrival & Seating", description: "Guests are seated. Groom takes place at the altar.", icon: Church },
        { time: "9:15 AM", event: "The Processional", description: "Bridal party entrance. Grand entrance: Margaret walks down the aisle.", icon: Heart },
        { time: "9:30 AM", event: "The Service", description: "Opening Prayers & Hymns, Sermon with Song of Solomon 5:1, Vows, Rings, Certificate Signing, Pronouncement", icon: Church },
        { time: "11:00 AM", event: "Recessional & Church Photos", description: "Couple exits the church. Photo session on church steps with family and clergy.", icon: Camera },
      ],
    },
    {
      id: "part3",
      title: "Photo Session",
      subtitle: "Guest Transition",
      timeRange: "11:30 AM – 1:30 PM",
      color: "from-purple-500/20 to-pink-500/10",
      events: [
        { time: "11:30 AM", event: "Official Photo Shoot", description: "Bridal party heads to photo site (gardens at Homeland Resort or nearby scenic spot)", icon: Camera },
        { time: "11:30 AM", event: "Guests Arrive at Venue", description: "Guests proceed to Homeland Ruiru Resort. Refreshments and background music served.", icon: Users },
      ],
    },
    {
      id: "part4",
      title: "The Reception",
      subtitle: "Homeland Ruiru Resort",
      timeRange: "1:30 PM – 6:00 PM",
      color: "from-gold/20 to-amber-500/10",
      events: [
        { time: "1:30 PM", event: "Lunch is Served", description: "Guests enjoy the buffet while the bridal party finishes photos", icon: Utensils },
        { time: "2:30 PM", event: "Grand Entrance", description: "MC hypes the crowd. Bridal party enters with dancing. Margaret & Moses make their Grand Entrance.", icon: PartyPopper },
        { time: "3:00 PM", event: "Entertainment & Speeches", description: "Entertainment (DJ/Dancers). Strictly timed speeches: Friends, Parents of Groom, Parents of Bride.", icon: Mic2 },
        { time: "4:00 PM", event: "Gift Presentation", description: "Guests present gifts (Envelopes/Mpesa). Family gifts.", icon: Gift },
        { time: "4:30 PM", event: "Cake Cutting & Toast", description: "Cutting the cake, sharing with parents and guests, champagne toasts to the newlyweds", icon: Cake },
        { time: "5:30 PM", event: "Vote of Thanks & Closing", description: "Groom's family representative gives vote of thanks. Closing Prayer. Bouquet Toss.", icon: Heart },
      ],
    },
    {
      id: "part5",
      title: "Evening Party",
      subtitle: "After-Party",
      timeRange: "6:00 PM – Midnight",
      color: "from-indigo-500/20 to-purple-500/10",
      events: [
        { time: "6:00 PM", event: "Transition / Freshen Up", description: "Older guests depart. Couple changes into evening wear.", icon: Sparkles },
        { time: "7:00 PM", event: "Evening Dinner", description: "Intimate dinner for the bridal team and close friends", icon: Utensils },
        { time: "8:30 PM", event: "The Party", description: "First dance (evening edition). Open dance floor with DJ mixing Afro-pop, Mugithi, and current hits. Drinks and snacks circulation.", icon: Music },
        { time: "12:00 AM", event: "End of Programme", description: "Departure", icon: Moon },
      ],
    },
  ];

  const togglePart = (partId: string) => {
    setExpandedParts((prev) => {
      const next = new Set(prev);
      if (next.has(partId)) {
        next.delete(partId);
      } else {
        next.add(partId);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedParts(new Set(programmeParts.map((p) => p.id)));
  };

  const collapseAll = () => {
    setExpandedParts(new Set());
  };

  return (
    <section id="programme" className="relative py-20 bg-emerald-dark overflow-hidden floral-pattern">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
              <Clock className="w-8 h-8 text-gold" />
            </div>
          </div>
          <h2 className="font-script text-4xl md:text-5xl text-gold mb-4">
            Event Programme
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4" />
          <p className="font-serif text-lg text-cream/80 max-w-2xl mx-auto">
            Friday, December 12, 2025
          </p>
          <p className="font-serif text-cream/60 mt-2">
            Theme: Elegant Green & Gold • 6:00 AM – Midnight
          </p>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={expandAll}
              className="px-4 py-2 text-sm font-serif text-gold border border-gold/30 rounded-full hover:bg-gold/10 transition-colors duration-300"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-4 py-2 text-sm font-serif text-cream/60 border border-cream/20 rounded-full hover:bg-cream/5 transition-colors duration-300"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Programme Parts */}
        <div className="max-w-4xl mx-auto space-y-4">
          {programmeParts.map((part, partIndex) => {
            const isExpanded = expandedParts.has(part.id);
            
            return (
              <div
                key={part.id}
                className={cn(
                  "rounded-2xl border border-gold/20 overflow-hidden transition-all duration-500",
                  isExpanded ? "bg-gradient-to-br " + part.color : "bg-white/5"
                )}
                style={{ animationDelay: `${partIndex * 0.1}s` }}
              >
                {/* Part Header - Clickable */}
                <button
                  onClick={() => togglePart(part.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald border-2 border-gold flex items-center justify-center shadow-lg">
                      <span className="font-serif text-gold font-bold">{partIndex + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-gold">
                        {part.title}
                      </h3>
                      <p className="font-serif text-cream/60 text-sm">
                        {part.subtitle} • {part.timeRange}
                      </p>
                    </div>
                  </div>
                  <div className={cn(
                    "w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center transition-transform duration-300",
                    isExpanded && "rotate-180"
                  )}>
                    <ChevronDown className="w-5 h-5 text-gold" />
                  </div>
                </button>

                {/* Events - Collapsible */}
                <div
                  className={cn(
                    "grid transition-all duration-500 ease-in-out",
                    isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 space-y-3">
                      <div className="h-px bg-gold/20 mb-4" />
                      {part.events.map((item, eventIndex) => {
                        const eventId = `${part.id}-${eventIndex}`;
                        const isActive = activeEvent === eventId;
                        
                        return (
                          <div
                            key={eventIndex}
                            onClick={() => setActiveEvent(isActive ? null : eventId)}
                            className={cn(
                              "flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300",
                              isActive
                                ? "bg-gold/20 border border-gold/40 shadow-lg scale-[1.02]"
                                : "bg-white/5 border border-transparent hover:bg-white/10 hover:border-gold/20"
                            )}
                            style={{ animationDelay: `${eventIndex * 0.05}s` }}
                          >
                            {/* Timeline dot */}
                            <div className={cn(
                              "relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300",
                              isActive
                                ? "bg-gold text-emerald-dark scale-110"
                                : "bg-emerald border-2 border-gold"
                            )}>
                              <item.icon className={cn("w-4 h-4", isActive ? "text-emerald-dark" : "text-gold")} />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-1">
                                <span className={cn(
                                  "px-2 py-0.5 rounded-full text-xs font-serif font-semibold",
                                  isActive ? "bg-gold text-emerald-dark" : "bg-gold/20 text-gold"
                                )}>
                                  {item.time}
                                </span>
                                <h4 className="font-serif text-cream font-semibold">
                                  {item.event}
                                </h4>
                              </div>
                              <p className={cn(
                                "font-serif text-sm transition-all duration-300",
                                isActive ? "text-cream/90" : "text-cream/60"
                              )}>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Navigation Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {programmeParts.map((part, index) => (
            <button
              key={part.id}
              onClick={() => {
                if (!expandedParts.has(part.id)) {
                  togglePart(part.id);
                }
                document.getElementById("programme")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-serif transition-all duration-300",
                expandedParts.has(part.id)
                  ? "bg-gold text-emerald-dark"
                  : "bg-white/10 text-cream/60 hover:bg-gold/20 hover:text-gold"
              )}
            >
              Part {index + 1}
            </button>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-12 animate-scale-in">
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-lg px-8 py-4 border border-gold/20">
            <p className="font-serif text-cream/80 italic">
              "Two hearts, one love, forever begins"
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
};

export default EventProgramme;
