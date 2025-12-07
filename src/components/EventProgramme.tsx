import { Clock, Music, Utensils, Camera, Heart, Sparkles, PartyPopper } from "lucide-react";

const EventProgramme = () => {
  const ceremonyEvents = [
    { time: "9:00 AM", event: "Guest Arrival", icon: Sparkles },
    { time: "10:00 AM", event: "Ceremony Begins", icon: Heart },
    { time: "11:00 AM", event: "Exchange of Vows", icon: Heart },
    { time: "11:30 AM", event: "Photo Session", icon: Camera },
  ];

  const receptionEvents = [
    { time: "2:00 PM", event: "Guest Arrival & Cocktails", icon: Sparkles },
    { time: "3:00 PM", event: "Grand Entrance", icon: PartyPopper },
    { time: "3:30 PM", event: "Lunch Service", icon: Utensils },
    { time: "5:00 PM", event: "Speeches & Toasts", icon: Music },
    { time: "6:00 PM", event: "First Dance", icon: Music },
    { time: "7:00 PM", event: "Cake Cutting", icon: PartyPopper },
    { time: "8:00 PM", event: "Party & Dancing", icon: PartyPopper },
  ];

  return (
    <section className="relative py-20 bg-emerald-dark overflow-hidden floral-pattern">
      {/* Decorative top border */}
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
            A day filled with love, joy, and celebration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Ceremony Programme */}
          <div className="animate-fade-in-left">
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl text-gold border-b-2 border-gold/30 pb-2 inline-block">
                Ceremony
              </h3>
              <p className="font-serif text-cream/60 mt-2">PCEA Church, Karen</p>
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/60 via-gold/40 to-gold/20" />
              
              <div className="space-y-6">
                {ceremonyEvents.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative z-10 w-12 h-12 rounded-full bg-emerald border-2 border-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-gold/20 group-hover:border-gold/40 transition-colors duration-300">
                      <p className="font-serif text-gold font-semibold">{item.time}</p>
                      <p className="font-serif text-cream">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reception Programme */}
          <div className="animate-fade-in-right">
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl text-gold border-b-2 border-gold/30 pb-2 inline-block">
                Reception
              </h3>
              <p className="font-serif text-cream/60 mt-2">The Woods, Karen</p>
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/60 via-gold/40 to-gold/20" />
              
              <div className="space-y-6">
                {receptionEvents.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative z-10 w-12 h-12 rounded-full bg-emerald border-2 border-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-gold/20 group-hover:border-gold/40 transition-colors duration-300">
                      <p className="font-serif text-gold font-semibold">{item.time}</p>
                      <p className="font-serif text-cream">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
};

export default EventProgramme;
