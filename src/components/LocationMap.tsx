import { MapPin } from "lucide-react";

const LocationMap = () => {
  // Coordinates for A.C.K Diocese of Thika - Ruiru Parish
  const latitude = -1.1440896;
  const longitude = 36.9569547;
  const locationName = "A.C.K Diocese of Thika - Ruiru Parish";

  return (
    <div className="bg-card p-8 rounded-lg shadow-xl animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <MapPin className="w-8 h-8 text-gold" />
        <h3 className="font-serif text-2xl font-semibold text-gold">Location</h3>
      </div>

      <div className="w-full h-96 rounded-lg overflow-hidden border-2 border-gold/20 shadow-lg">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0999999999995!2d36.9569547!3d-1.1440896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDgnMzguNyJTIDM2wrA1NycyNC45IkU!5e0!3m2!1sen!2ske!4v1635000000000!5m2!1sen!2ske`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title={`Map showing ${locationName}`}
        />
      </div>

      <div className="mt-4 text-center">
        <p className="font-serif text-lg text-foreground mb-2">
          {locationName}
        </p>
        <p className="font-sans text-foreground/80 text-sm">
          Ruiru, Kiambu County, Kenya
        </p>
      </div>
    </div>
  );
};

export default LocationMap;
