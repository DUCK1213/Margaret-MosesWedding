import { MapPin, Clock, PartyPopper, MessageCircle } from "lucide-react";
import couplePhoto from "@/assets/couple-photo.jpg";
import LocationMap from "./LocationMap";

const WeddingDetails = () => {
  return (
    <section className="py-20 bg-background leaf-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Couple Photo */}
          <div className="flex justify-center mb-12 animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-gold rounded-full" />
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cream shadow-2xl">
                <img
                  src={couplePhoto}
                  alt="Margaret and Moses"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald px-6 py-2 rounded-full border-2 border-gold flex items-center gap-2">
                <img
                  src="/wedding-icon.png"
                  alt=""
                  className="w-4 h-4 opacity-80"
                />
                <p className="font-serif text-cream uppercase tracking-wider text-sm">You're Invited</p>
              </div>
            </div>
          </div>

          {/* Bible Verse */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg shadow-lg border border-gold/20">
              <p className="font-serif text-lg md:text-xl text-foreground italic leading-relaxed">
                "I have come into my garden, my bride; I have gathered my myrrh with my spice.
                I have eaten my honeycomb and my honey; I drank my wine with my milk...
                celebrate with me friends, raise your glasses, To life!, To love!"
              </p>
            </div>
          </div>

          {/* Ceremony Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-emerald p-8 rounded-lg shadow-xl text-center animate-fade-in-left hover:scale-105 transition-transform">
              <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-semibold text-gold mb-2">Ceremony</h3>
              <div className="h-px w-16 bg-gold mx-auto mb-4" />
              <p className="font-serif text-xl text-cream mb-2">A.C.K Diocese of Thika - Ruiru Parish</p>
              <p className="font-sans text-cream/80">Ruiru Town, Kiambu</p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-gold" />
                <p className="font-sans text-cream">Friday, 9:00 AM</p>
              </div>
            </div>

            <div className="bg-emerald p-8 rounded-lg shadow-xl text-center animate-fade-in-right hover:scale-105 transition-transform">
              <PartyPopper className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-semibold text-gold mb-2">Reception</h3>
              <div className="h-px w-16 bg-gold mx-auto mb-4" />
              <p className="font-serif text-xl text-cream mb-2">Homeland Ruiru Resort</p>
              <p className="font-sans text-cream/80">Following the ceremony</p>
            </div>
          </div>

          {/* Location Map */}
          <LocationMap />

          {/* WhatsApp Contact */}
          <div className="text-center bg-card p-8 rounded-lg shadow-lg border border-gold/20 animate-fade-in">
            <MessageCircle className="w-12 h-12 text-gold mx-auto mb-4" />
            <p className="font-serif text-lg text-foreground italic leading-relaxed">
              For any questions or clarifications, please reach us on WhatsApp: +254 724 002 047
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;
