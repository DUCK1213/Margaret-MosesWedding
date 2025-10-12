import Hero from "@/components/Hero";
import WeddingDetails from "@/components/WeddingDetails";
import OurStory from "@/components/OurStory";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <OurStory />
      <WeddingDetails />
      <RSVP />
      <Footer />
    </div>
  );
};

export default Index;
