import { Clock, Music, Utensils, Camera, Heart, Sparkles, PartyPopper, Church, Car, Gift, Cake, Wine, Moon, Sun, Users, Mic2 } from "lucide-react";

const EventProgramme = () => {
  const morningEvents = [
    { time: "6:00 AM", event: "Wake Up & Devotion", description: "Bride and Groom teams begin with prayers at separate locations", icon: Sun },
    { time: "7:00 AM", event: "Glam & Dressing", description: "Hair, makeup, grooming. Photographer arrives for 'Getting Ready' shots", icon: Sparkles },
    { time: "7:45 AM", event: "Groom's Convoy Departs", description: "Moses and team leave to pick up the bride", icon: Car },
    { time: "8:15 AM", event: "The Pick-Up (Kutoa Bibi)", description: "Negotiation, first look, parents' blessings", icon: Heart },
    { time: "8:45 AM", event: "Bridal Convoy Departure", description: "Convoy heads to St. Michael & All Angels, Ruiru Town", icon: Car },
  ];

  const churchEvents = [
    { time: "9:00 AM", event: "Arrival & Seating", description: "Guests seated, Groom takes place at altar", icon: Church },
    { time: "9:15 AM", event: "The Processional", description: "Bridal party entrance, Margaret walks down the aisle", icon: Heart },
    { time: "9:30 AM", event: "The Service", description: "Prayers, Sermon, Vows, Rings, Certificate Signing", icon: Church },
    { time: "11:00 AM", event: "Recessional & Photos", description: "Couple exits, photos on church steps", icon: Camera },
  ];

  const photoEvents = [
    { time: "11:30 AM", event: "Official Photo Shoot", description: "Bridal party heads to photo site", icon: Camera },
    { time: "11:30 AM", event: "Guests Arrive at Venue", description: "Refreshments and music at Homeland Resort", icon: Users },
  ];

  const receptionEvents = [
    { time: "1:30 PM", event: "Lunch is Served", description: "Guests enjoy buffet while bridal party finishes photos", icon: Utensils },
    { time: "2:30 PM", event: "Grand Entrance", description: "MC hypes crowd, bridal party enters dancing", icon: PartyPopper },
    { time: "3:00 PM", event: "Entertainment & Speeches", description: "DJ, dancers, speeches from friends and parents", icon: Mic2 },
    { time: "4:00 PM", event: "Gift Presentation", description: "Guests and family present gifts", icon: Gift },
    { time: "4:30 PM", event: "Cake Cutting & Toast", description: "Cutting cake, sharing with parents, champagne toasts", icon: Cake },
    { time: "5:30 PM", event: "Vote of Thanks & Closing", description: "Thanks, closing prayer, bouquet toss", icon: Heart },
  ];

  const eveningEvents = [
    { time: "6:00 PM", event: "Transition / Freshen Up", description: "Older guests depart, couple changes to evening wear", icon: Sparkles },
    { time: "7:00 PM", event: "Evening Dinner", description: "Intimate dinner for bridal team and close friends", icon: Utensils },
    { time: "8:30 PM", event: "The Party", description: "First dance, open floor, DJ mixing Afro-pop & Mugithi", icon: Music },
    { time: "12:00 AM", event: "End of Programme", description: "Departure", icon: Moon },
  ];

  const TimelineSection = ({ title, subtitle, events, animationClass }: { title: string; subtitle: string; events: typeof morningEvents; animationClass: string }) => (
    <div className={animationClass}>
      <div className="text-center mb-6">
        <h3 className="font-serif text-xl md:text-2xl text-gold border-b-2 border-gold/30 pb-2 inline-block">
          {title}
        </h3>
        <p className="font-serif text-cream/60 text-sm mt-2">{subtitle}</p>
      </div>
      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/60 via-gold/40 to-gold/20" />
        <div className="space-y-4">
          {events.map((item, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative z-10 w-10 h-10 rounded-full bg-emerald border-2 border-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                <item.icon className="w-4 h-4 text-gold" />
              </div>
              <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-gold/20 group-hover:border-gold/40 transition-colors duration-300">
                <p className="font-serif text-gold font-semibold text-sm">{item.time}</p>
                <p className="font-serif text-cream text-sm">{item.event}</p>
                <p className="font-serif text-cream/60 text-xs mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative py-20 bg-emerald-dark overflow-hidden floral-pattern">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container mx-auto px-4">
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
        </div>

        {/* Part 1 & 2: Morning and Church */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <TimelineSection 
            title="Part 1: Morning Preparations" 
            subtitle="The Procession" 
            events={morningEvents} 
            animationClass="animate-fade-in-left" 
          />
          <TimelineSection 
            title="Part 2: Church Ceremony" 
            subtitle="St. Michael & All Angels, Ruiru" 
            events={churchEvents} 
            animationClass="animate-fade-in-right" 
          />
        </div>

        {/* Part 3: Photo Session */}
        <div className="max-w-2xl mx-auto mb-12">
          <TimelineSection 
            title="Part 3: Photo Session" 
            subtitle="11:30 AM – 1:30 PM" 
            events={photoEvents} 
            animationClass="animate-fade-in" 
          />
        </div>

        {/* Part 4 & 5: Reception and Evening */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <TimelineSection 
            title="Part 4: The Reception" 
            subtitle="Homeland Ruiru Resort" 
            events={receptionEvents} 
            animationClass="animate-fade-in-left" 
          />
          <TimelineSection 
            title="Part 5: Evening Party" 
            subtitle="After-Party at Homeland Resort" 
            events={eveningEvents} 
            animationClass="animate-fade-in-right" 
          />
        </div>

        {/* Bottom Note */}
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
