import Hero from "@/components/Hero";
import WeddingDetails from "@/components/WeddingDetails";
import OurStory from "@/components/OurStory";
import EventProgramme from "@/components/EventProgramme";
import ParkingTickets from "@/components/ParkingTickets";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <OurStory />
      <WeddingDetails />
      <EventProgramme />
      <ParkingTickets />
      <RSVP />
      <Footer />
    </div>
  );
};

export default Index;
