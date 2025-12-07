import { FormEvent, useRef, useState } from "react";
import {
  Car,
  MapPin,
  Calendar,
  Clock,
  Download,
  Printer,
  IdCard,
  User,
  CarFront,
  ArrowDownCircle,
  ArrowUpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ParkingPass = () => {
  const passRef = useRef<HTMLDivElement>(null);
  const [guestName, setGuestName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [botField, setBotField] = useState("");
  const [selectedVenue, setSelectedVenue] = useState<"ceremony" | "reception">("ceremony");
  const [activityLog, setActivityLog] = useState<
    { id: string; action: "in" | "out"; time: string; venue: string; plate: string }[]
  >([]);

  const venueOptions = {
    ceremony: {
      label: "Ceremony Entrance",
      location: "A.C.K Diocese of Thika - Ruiru Parish",
    },
    reception: {
      label: "Reception Entrance",
      location: "Homeland Ruiru Resort",
    },
  };

  const submitParkingForm = async () => {
    if (botField) return;

    const formData = new URLSearchParams({
      "form-name": "parking-pass",
      "guest-name": guestName || "",
      "id-number": idNumber || "",
      "plate-number": plateNumber || "",
    });

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });
    } catch (error) {
      console.error("Failed to submit parking form to Netlify", error);
    }
  };

  const handlePrint = async () => {
    await submitParkingForm();
    window.print();
  };

  const handleDownload = async () => {
    await submitParkingForm();
    // Trigger print dialog which allows saving as PDF
    window.print();
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submitParkingForm();
  };

  const handleCheckEvent = async (action: "in" | "out") => {
    if (!plateNumber.trim()) {
      alert("Please enter the vehicle plate number before logging check-ins.");
      return;
    }

    await submitParkingForm();

    const venue = venueOptions[selectedVenue];
    const timestamp = new Date().toLocaleString("en-GB", {
      dateStyle: "medium",
      timeStyle: "short",
    });
    const actionText = action === "in" ? "arrived at" : "departed from";
    const message = `
*Parking Update*
🚗 Plate: ${plateNumber.toUpperCase()}
👤 Guest: ${guestName || "Unknown"}
📍 Venue: ${venue.label}
🕒 Time: ${timestamp}
➡️ Vehicle has ${actionText} ${venue.location}
    `.trim();

    const whatsappUrl = `https://wa.me/254723004726?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    setActivityLog((prev) => [
      {
        id: crypto.randomUUID(),
        action,
        time: timestamp,
        venue: venue.label,
        plate: plateNumber.toUpperCase(),
      },
      ...prev,
    ].slice(0, 6));
  };

  return (
    <div className="mt-12 mx-auto max-w-md px-4 print:px-0 print:mt-0">
      <h3 className="font-serif text-2xl text-emerald text-center mb-6">
        Your Digital Parking Pass
      </h3>
      
      {/* Parking Pass Card */}
      <div 
        ref={passRef}
        id="parking-pass"
        className="bg-gradient-to-br from-emerald to-emerald-light p-[3px] rounded-2xl shadow-2xl print:shadow-none mx-auto"
        style={{ width: "min(100%, 102mm)", minHeight: "144mm" }}
      >
        <div className="bg-cream rounded-xl p-6 relative overflow-hidden h-full flex flex-col">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold rounded-br-xl" />
          
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

          {/* Guest Details */}
          <form
            name="parking-pass"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleFormSubmit}
            className="mt-6 bg-white/60 rounded-lg p-4 space-y-4"
          >
            <input type="hidden" name="form-name" value="parking-pass" />

            <div className="hidden">
              <Label htmlFor="parking-bot" className="text-emerald text-xs font-serif">
                Do not fill this out
              </Label>
              <input
                id="parking-bot"
                name="bot-field"
                value={botField}
                onChange={(event) => setBotField(event.target.value)}
                className="sr-only"
                tabIndex={-1}
                aria-hidden="true"
              />
            </div>

            <div>
              <Label htmlFor="guest-name" className="flex items-center gap-2 text-emerald text-xs font-serif uppercase tracking-[0.2em]">
                <User className="w-3 h-3 text-gold" />
                Guest Name
              </Label>
              <Input
                id="guest-name"
                name="guest-name"
                value={guestName}
                onChange={(event) => setGuestName(event.target.value)}
                placeholder="Full legal name"
                className="mt-1 bg-white border-gold/40 text-emerald text-sm font-serif placeholder:text-emerald-light/60 focus-visible:ring-gold"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="guest-id" className="flex items-center gap-2 text-emerald text-xs font-serif uppercase tracking-[0.2em]">
                  <IdCard className="w-3 h-3 text-gold" />
                  ID / Passport No.
                </Label>
                <Input
                  id="guest-id"
                  name="id-number"
                  value={idNumber}
                  onChange={(event) => setIdNumber(event.target.value)}
                  placeholder="ID number"
                  className="mt-1 bg-white border-gold/40 text-emerald text-sm font-serif placeholder:text-emerald-light/60 focus-visible:ring-gold"
                />
              </div>

              <div>
                <Label htmlFor="plate-number" className="flex items-center gap-2 text-emerald text-xs font-serif uppercase tracking-[0.2em]">
                  <CarFront className="w-3 h-3 text-gold" />
                  Plate Number
                </Label>
                <Input
                  id="plate-number"
                  name="plate-number"
                  value={plateNumber}
                  onChange={(event) => setPlateNumber(event.target.value)}
                  placeholder="KAA 123A"
                  className="mt-1 bg-white border-gold/40 text-emerald text-sm font-serif placeholder:text-emerald-light/60 focus-visible:ring-gold"
                />
              </div>
            </div>

            <button type="submit" className="sr-only">
              Save Parking Pass
            </button>
          </form>

          {/* Venue Check-in */}
          <div className="mt-6 bg-white/60 rounded-lg p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-serif text-emerald text-xs uppercase tracking-[0.3em]">Check-In System</p>
                <p className="text-emerald-light text-xs">Send arrival/departure notices via WhatsApp</p>
              </div>
              <div className="text-right text-xs text-emerald-light">
                <p>WhatsApp: 0723 004 726</p>
              </div>
            </div>

            <div>
              <Label className="text-emerald text-xs font-serif uppercase tracking-[0.2em] mb-2 block">
                Select Venue
              </Label>
              <RadioGroup
                value={selectedVenue}
                onValueChange={(value) => setSelectedVenue(value as "ceremony" | "reception")}
                className="grid sm:grid-cols-2 gap-3"
              >
                {Object.entries(venueOptions).map(([key, venue]) => (
                  <label
                    key={key}
                    className="flex items-start gap-3 rounded-lg border border-gold/30 bg-white/70 p-3 cursor-pointer hover:border-gold transition-colors"
                  >
                    <RadioGroupItem value={key} id={`venue-${key}`} className="mt-1 border-gold text-gold" />
                    <div>
                      <p className="font-serif text-emerald">{venue.label}</p>
                      <p className="text-xs text-emerald-light">{venue.location}</p>
                    </div>
                  </label>
                ))}
              </RadioGroup>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <Button
                onClick={() => handleCheckEvent("in")}
                className="bg-emerald text-cream flex items-center gap-2 font-serif"
              >
                <ArrowDownCircle className="w-4 h-4" />
                Check In Vehicle
              </Button>
              <Button
                onClick={() => handleCheckEvent("out")}
                variant="outline"
                className="border-emerald text-emerald hover:bg-emerald/10 flex items-center gap-2 font-serif"
              >
                <ArrowUpCircle className="w-4 h-4" />
                Check Out Vehicle
              </Button>
            </div>

            {activityLog.length > 0 && (
              <div className="bg-white/80 border border-gold/20 rounded-lg p-3 space-y-2">
                <p className="font-serif text-emerald text-sm">Recent Activity</p>
                <div className="space-y-2 max-h-48 overflow-auto">
                  {activityLog.map((log) => (
                    <div key={log.id} className="flex items-start gap-2 text-xs text-emerald">
                      <span className="font-serif text-gold">{log.action === "in" ? "IN" : "OUT"}</span>
                      <div>
                        <p className="font-serif">
                          {log.plate} • {log.venue}
                        </p>
                        <p className="text-emerald-light">{log.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
