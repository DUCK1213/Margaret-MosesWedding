import { Heart } from "lucide-react";

const OurStory = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="w-10 h-10 text-emerald mx-auto mb-6 animate-float" />
          
          <h2 className="font-script text-5xl md:text-6xl text-emerald mb-6">
            Our Story
          </h2>
          
          <div className="h-px w-24 bg-gold mx-auto mb-12" />

          <div className="space-y-8">
            <div className="bg-background p-8 rounded-lg shadow-lg border border-emerald/10 animate-fade-in">
              <h3 className="font-serif text-2xl text-emerald mb-4">How We Met</h3>
              <p className="font-sans text-foreground/80 leading-relaxed">
                Our paths crossed in a beautiful moment orchestrated by divine timing. 
                What started as a friendship blossomed into a love story written in the stars.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg shadow-lg border border-emerald/10 animate-fade-in">
              <h3 className="font-serif text-2xl text-emerald mb-4">The Journey</h3>
              <p className="font-sans text-foreground/80 leading-relaxed">
                Through laughter and tears, joy and challenges, we've grown together. 
                Our love has been a testament to faith, patience, and the beauty of companionship.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg shadow-lg border border-emerald/10 animate-fade-in">
              <h3 className="font-serif text-2xl text-emerald mb-4">Forever Begins</h3>
              <p className="font-sans text-foreground/80 leading-relaxed">
                Now, we're ready to say "I do" and begin our forever journey as one. 
                We're thrilled to celebrate this milestone with our loved ones.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-emerald/20">
            <p className="font-script text-3xl text-gold mb-4">
              Margaret & Moses
            </p>
            <p className="font-serif text-lg text-emerald italic">
              Two hearts, one beautiful journey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
