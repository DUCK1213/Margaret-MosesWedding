import { Heart } from "lucide-react";
import { FloatingParticles, GeometricShape, Hover3DEffect } from "./3DElements";

const Footer = () => {
  return (
    <footer className="relative bg-emerald-dark py-12 border-t-2 border-gold/20 overflow-hidden">
      {/* Background floating particles */}
      <FloatingParticles count={12} className="absolute inset-0 opacity-30" />

      {/* Decorative 3D elements in corners */}
      <div className="absolute top-4 left-4 opacity-60">
        <GeometricShape
          animation="float"
          color="gold"
          size="small"
          className="animate-pulse"
        />
      </div>
      <div className="absolute top-8 right-6 opacity-40">
        <GeometricShape
          animation="spiral"
          color="cream"
          size="small"
        />
      </div>
      <div className="absolute bottom-6 left-8 opacity-50">
        <GeometricShape
          animation="rotate"
          color="emerald"
          size="small"
        />
      </div>
      <div className="absolute bottom-4 right-4 opacity-60">
        <GeometricShape
          animation="pulse"
          color="gold"
          size="small"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <Hover3DEffect intensity="medium">
            <Heart className="w-8 h-8 text-gold mx-auto mb-4 drop-shadow-lg" />
          </Hover3DEffect>

          <Hover3DEffect intensity="low">
            <p className="font-script text-3xl text-gold mb-2 hover:scale-105 transition-transform duration-300">
              Margaret & Moses
            </p>
          </Hover3DEffect>

          <p className="font-serif text-cream mb-4">
            December 12, 2025
          </p>

          {/* Enhanced decorative divider */}
          <div className="relative mb-4">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mb-2" />
            <div className="flex justify-center space-x-2">
              <GeometricShape animation="pulse" color="gold" size="small" />
              <GeometricShape animation="pulse" color="emerald" size="small" />
              <GeometricShape animation="pulse" color="gold" size="small" />
            </div>
          </div>
         
          <p className="font-sans text-sm text-cream/60">
            © 2025 Duck Design. All rights reserved
          </p>
          <p className="font-serif text-sm text-gold mt-1">0723004726</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
