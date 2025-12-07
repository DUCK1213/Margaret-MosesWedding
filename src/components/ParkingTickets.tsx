import { Car, MapPin, Clock, Ticket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ParkingPass from "./ParkingPass";

const ParkingTickets = () => {
  return (
    <section className="relative py-20 bg-cream overflow-hidden leaf-pattern">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center">
              <Car className="w-8 h-8 text-emerald" />
            </div>
          </div>
          <h2 className="font-script text-4xl md:text-5xl text-emerald mb-4">
            Parking Information
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4" />
          <p className="font-serif text-lg text-emerald-light max-w-2xl mx-auto">
            We have arranged convenient parking for all our guests
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Ceremony Parking */}
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-gold/20 shadow-xl animate-fade-in-left hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <Ticket className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-2xl text-emerald mb-4">Ceremony Parking</h3>
              <div className="space-y-3 text-emerald-light">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span className="font-serif">St. Michael & All Angels, Ruiru</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-gold" />
                  <span className="font-serif">Available from 8:00 AM</span>
                </div>
                <p className="text-sm pt-2 border-t border-gold/20 mt-4">
                  Ample parking available within the church compound
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Reception Parking */}
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-gold/20 shadow-xl animate-fade-in-right hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <Ticket className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-2xl text-emerald mb-4">Reception Parking</h3>
              <div className="space-y-3 text-emerald-light">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span className="font-serif">Homeland Ruiru Resort</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-gold" />
                  <span className="font-serif">Available from 1:00 PM</span>
                </div>
                <p className="text-sm pt-2 border-t border-gold/20 mt-4">
                  Dedicated parking area with security on site
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Digital Parking Pass */}
        <ParkingPass />

        {/* Additional Note */}
        <div className="text-center mt-8 animate-scale-in print:hidden">
          <p className="font-serif text-emerald-light italic">
            Parking attendants will be available to guide you
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParkingTickets;
