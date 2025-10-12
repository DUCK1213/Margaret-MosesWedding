import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-emerald-dark py-12 border-t-2 border-gold/20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <Heart className="w-8 h-8 text-gold mx-auto mb-4" />
          
          <p className="font-script text-3xl text-gold mb-2">
            Margaret & Moses
          </p>
          
          <p className="font-serif text-cream mb-4">
            December 12, 2025
          </p>
          
          <div className="h-px w-32 bg-gold/50 mx-auto mb-4" />
          
          <p className="font-sans text-sm text-cream/60">
            © 2025 Margaret & Moses Wedding. All rights reserved.
          </p>
          
          <p className="font-serif text-cream/80 mt-4 italic">
            "To life, To love!"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
