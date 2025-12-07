import ParkingPass from "@/components/ParkingPass";
import { CarFront, ArrowLeftRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ParkingPassPage = () => {
  return (
    <div className="min-h-screen bg-cream leaf-pattern pt-12 pb-20 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 bg-white/80 border border-gold/30 rounded-full px-6 py-2 shadow-sm">
            <CarFront className="w-5 h-5 text-emerald" />
            <p className="font-serif text-sm uppercase tracking-[0.3em] text-emerald">
              Parking Confirmation
            </p>
          </div>
          <h1 className="font-script text-5xl text-emerald">Digital Parking Pass</h1>
          <p className="font-serif text-emerald-light max-w-2xl mx-auto">
            Enter your details below and use the print button to show or save a one-page A6 parking pass
            for attendants on the wedding day.
          </p>
          <Button asChild variant="outline" className="text-emerald border-emerald hover:bg-emerald/10 mt-4">
            <Link to="/#parking" className="inline-flex items-center gap-2">
              <ArrowLeftRight className="w-4 h-4" />
              Back to parking info
            </Link>
          </Button>
        </div>

        <div className="bg-white/90 rounded-3xl shadow-2xl border border-gold/20 p-6 sm:p-10">
          <ParkingPass />
        </div>
      </div>
    </div>
  );
};

export default ParkingPassPage;
