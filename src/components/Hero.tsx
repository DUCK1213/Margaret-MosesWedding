import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-emerald overflow-hidden floral-pattern scroll-mt-28 pt-28 pb-16 sm:pt-32"
    >
      {/* Decorative floral pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-gold rounded-tl-full" />
        <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-gold rounded-tr-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border-l-2 border-b-2 border-gold rounded-bl-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-gold rounded-br-full" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-fade-in space-y-10">
          <Heart className="w-12 h-12 text-gold mx-auto mb-6 animate-float" />
          
          <h1 className="font-script text-5xl sm:text-6xl md:text-8xl text-cream mb-4">
            Save the Date
          </h1>
          
          <div className="my-6 sm:my-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <div className="hidden sm:block h-px w-16 bg-gold" />
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-cream italic max-w-xl">
              We kindly request the honor of your presence at our wedding
            </p>
            <div className="hidden sm:block h-px w-16 bg-gold" />
          </div>

          <div className="my-12">
            <h2 className="font-script text-4xl sm:text-5xl md:text-7xl text-gold mb-2">Margaret</h2>
            <p className="font-serif text-base sm:text-lg text-gold-dark uppercase tracking-[0.4em]">Njoki</p>
            
            <div className="flex items-center justify-center gap-4 my-6">
              <div className="w-8 h-8 border-2 border-gold rounded-full" />
              <div className="w-8 h-8 border-2 border-gold rounded-full -ml-4" />
            </div>
            
            <h2 className="font-script text-4xl sm:text-5xl md:text-7xl text-gold mb-2">Moses</h2>
            <p className="font-serif text-base sm:text-lg text-gold-dark uppercase tracking-[0.4em]">Mureithi</p>
          </div>

          <div className="my-12 space-y-4">
            <div className="inline-block bg-gold/20 backdrop-blur-sm px-6 sm:px-8 py-6 rounded-lg border-2 border-gold">
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-gold uppercase tracking-wider mb-2">December</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="hidden sm:block h-px w-12 bg-gold" />
                <p className="font-serif text-base sm:text-lg text-cream uppercase tracking-widest">Friday</p>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cream rounded-full flex items-center justify-center">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-emerald">12</span>
                </div>
                <p className="font-serif text-base sm:text-lg text-cream uppercase tracking-widest">9 AM</p>
                <div className="hidden sm:block h-px w-12 bg-gold" />
              </div>
              <p className="font-serif text-xl sm:text-2xl text-gold mt-2">2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
