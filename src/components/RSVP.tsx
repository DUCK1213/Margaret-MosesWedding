import { Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

const RSVP = () => {
  return (
    <section className="py-20 bg-emerald relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-gold rounded-full" />
        <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-gold rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-script text-5xl md:text-6xl text-gold mb-6">
            RSVP
          </h2>
          
          <div className="h-px w-24 bg-gold mx-auto mb-8" />
          
          <p className="font-serif text-xl text-cream mb-12">
            We would be honored by your presence. Please let us know if you can join us.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-emerald-dark p-6 rounded-lg border-2 border-gold/30">
              <p className="font-serif text-lg text-gold mb-2">Margaret</p>
              <a 
                href="tel:0726217550" 
                className="flex items-center justify-center gap-2 text-cream hover:text-gold transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-sans">0726 217 550</span>
              </a>
            </div>

            <div className="bg-emerald-dark p-6 rounded-lg border-2 border-gold/30">
              <p className="font-serif text-lg text-gold mb-2">Moses</p>
              <a 
                href="tel:+61450827354" 
                className="flex items-center justify-center gap-2 text-cream hover:text-gold transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-sans">+61 450 827 354</span>
              </a>
            </div>
          </div>

          <p className="font-serif text-cream/80 mb-6">
            Please RSVP by November 30, 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
