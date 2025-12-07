import { useRef } from "react";
import { Car, MapPin, Calendar, Clock, Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

const ParkingPass = () => {
  const passRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Trigger print dialog which allows saving as PDF
    window.print();
  };

  return (
    <div className="mt-12 max-w-md mx-auto">
      <h3 className="font-serif text-2xl text-emerald text-center mb-6">
        Your Digital Parking Pass
      </h3>
      
      {/* Parking Pass Card */}
      <div 
        ref={passRef}
        id="parking-pass"
        className="bg-gradient-to-br from-emerald to-emerald-light p-1 rounded-2xl shadow-2xl print:shadow-none"
      >
        <div className="bg-cream rounded-xl p-6 relative overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-gold rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-gold rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-gold rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-gold rounded-br-xl" />
          
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mx-auto mb-3">
              <Car className="w-8 h-8 text-emerald" />
            </div>
            <h4 className="font-script text-3xl text-emerald">Parking Pass</h4>
            <p className="font-serif text-gold text-sm tracking-widest uppercase mt-1">
              Wedding Guest
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-6" />

          {/* Event Details */}
          <div className="space-y-4 mb-6">
            <div className="text-center">
              <p className="font-script text-2xl text-emerald">Margaret & Moses</p>
              <p className="font-serif text-emerald-light text-sm">Wedding Celebration</p>
            </div>

            <div className="flex items-center justify-center gap-2 text-emerald-light">
              <Calendar className="w-4 h-4 text-gold" />
              <span className="font-serif">Friday, December 12, 2025</span>
            </div>
          </div>

          {/* Venues */}
          <div className="space-y-4 bg-white/50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-gold" />
              </div>
              <div>
                <p className="font-serif font-semibold text-emerald text-sm">Ceremony</p>
                <p className="font-serif text-emerald-light text-xs">St. Michael & All Angels, Ruiru Town</p>
                <div className="flex items-center gap-1 mt-1">
                  <Clock className="w-3 h-3 text-gold" />
                  <span className="font-serif text-emerald-light text-xs">Parking from 8:00 AM</span>
                </div>
              </div>
            </div>

            <div className="h-px bg-gold/20" />

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-gold" />
              </div>
              <div>
                <p className="font-serif font-semibold text-emerald text-sm">Reception</p>
                <p className="font-serif text-emerald-light text-xs">Homeland Ruiru Resort</p>
                <div className="flex items-center gap-1 mt-1">
                  <Clock className="w-3 h-3 text-gold" />
                  <span className="font-serif text-emerald-light text-xs">Parking from 1:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="font-serif text-emerald-light text-xs italic">
              Present this pass to parking attendants upon arrival
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center mt-6 print:hidden">
        <Button
          onClick={handleDownload}
          className="bg-emerald hover:bg-emerald-light text-cream font-serif flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Save as PDF
        </Button>
        <Button
          onClick={handlePrint}
          variant="outline"
          className="border-emerald text-emerald hover:bg-emerald/10 font-serif flex items-center gap-2"
        >
          <Printer className="w-4 h-4" />
          Print Pass
        </Button>
      </div>
    </div>
  );
};

export default ParkingPass;
