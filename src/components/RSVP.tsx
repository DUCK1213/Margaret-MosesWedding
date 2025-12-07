import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const rsvpSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20),
  attending: z.enum(["yes", "no"], {
    required_error: "Please let us know if you can attend",
  }),
  guests: z.string().trim().min(1, "Please specify number of guests"),
  message: z.string().trim().max(500).optional(),
  botField: z.string().optional(),
});

type RSVPFormData = z.infer<typeof rsvpSchema>;

const RSVP = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
  });

  const attending = watch("attending");

  const onSubmit = async (data: RSVPFormData) => {
    if (data.botField) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const formData = new URLSearchParams({
        "form-name": "rsvp",
        name: data.name,
        email: data.email,
        phone: data.phone,
        attending: data.attending,
        guests: data.guests,
        message: data.message ?? "",
      });

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      // Format message for WhatsApp
      const message = `
*RSVP for Margaret & Moses Wedding*
📝 Name: ${data.name}
📧 Email: ${data.email}
📞 Phone: ${data.phone}
✅ Attending: ${data.attending === "yes" ? "Yes" : "No"}
👥 Number of Guests: ${data.guests}
${data.message ? `💬 Message: ${data.message}` : ""}
      `.trim();

      // Send to WhatsApp number: 0724002047
      const whatsappUrl = `https://wa.me/254724002047?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Thank you!",
        description: "Opening WhatsApp to send your RSVP...",
      });

      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try calling us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-emerald relative overflow-hidden leaf-pattern">
      {/* Animated decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-gold rounded-full animate-pulse-soft" />
        <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-gold rounded-full animate-pulse-soft" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-gold rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/4 w-28 h-28 border-2 border-gold rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-script text-5xl md:text-6xl text-gold mb-6">
              RSVP
            </h2>
            
            <div className="h-px w-24 bg-gold mx-auto mb-8" />
            
            <p className="font-serif text-xl text-cream mb-4">
              We would be honored by your presence. Please let us know if you can join us.
            </p>
            <p className="font-serif text-cream/80 text-sm">
              Please RSVP by November 30, 2025
            </p>
          </div>

          {/* RSVP Form */}
          <div className="bg-emerald-dark/50 backdrop-blur-sm p-8 rounded-lg border-2 border-gold/30 shadow-2xl animate-scale-in">
            <form
              name="rsvp"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="rsvp" />

              <div className="hidden">
                <Label className="text-cream font-serif" htmlFor="bot-field">
                  Do not fill this out
                </Label>
                <input
                  id="bot-field"
                  tabIndex={-1}
                  aria-hidden="true"
                  {...register("botField")}
                  className="sr-only"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-cream font-serif">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  {...register("name")}
                  className="bg-cream/10 border-gold/30 text-cream placeholder:text-cream/50 focus:border-gold"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-sm text-red-300">{errors.name.message}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-cream font-serif">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="bg-cream/10 border-gold/30 text-cream placeholder:text-cream/50 focus:border-gold"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-300">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-cream font-serif">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    {...register("phone")}
                    className="bg-cream/10 border-gold/30 text-cream placeholder:text-cream/50 focus:border-gold"
                    placeholder="0712 345 678"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-300">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-cream font-serif">
                  Will you be attending? *
                </Label>
                <RadioGroup
                  onValueChange={(value) => setValue("attending", value as "yes" | "no")}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2 bg-cream/10 px-4 py-3 rounded-lg border border-gold/30 hover:border-gold transition-colors">
                    <RadioGroupItem value="yes" id="yes" className="border-gold text-gold" />
                    <Label htmlFor="yes" className="text-cream cursor-pointer font-serif">
                      Joyfully Accept
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-cream/10 px-4 py-3 rounded-lg border border-gold/30 hover:border-gold transition-colors">
                    <RadioGroupItem value="no" id="no" className="border-gold text-gold" />
                    <Label htmlFor="no" className="text-cream cursor-pointer font-serif">
                      Regretfully Decline
                    </Label>
                  </div>
                </RadioGroup>
                {errors.attending && (
                  <p className="text-sm text-red-300">{errors.attending.message}</p>
                )}
              </div>

              {attending === "yes" && (
                <div className="space-y-2 animate-fade-in">
                  <Label htmlFor="guests" className="text-cream font-serif">
                    Number of Guests *
                  </Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max="10"
                    {...register("guests")}
                    className="bg-cream/10 border-gold/30 text-cream placeholder:text-cream/50 focus:border-gold"
                    placeholder="Including yourself"
                  />
                  {errors.guests && (
                    <p className="text-sm text-red-300">{errors.guests.message}</p>
                  )}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="message" className="text-cream font-serif">
                  Message or Dietary Requirements (Optional)
                </Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  className="bg-cream/10 border-gold/30 text-cream placeholder:text-cream/50 focus:border-gold min-h-24"
                  placeholder="Any special requirements or a message for the couple..."
                />
                {errors.message && (
                  <p className="text-sm text-red-300">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold hover:bg-gold-dark text-emerald-dark font-serif text-lg py-6 transition-all transform hover:scale-105"
              >
                {isSubmitting ? "Sending..." : "Send RSVP"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-6 mt-8 animate-fade-in">
            <div className="bg-emerald-dark/50 backdrop-blur-sm p-6 rounded-lg border-2 border-gold/30 text-center hover:border-gold transition-all transform hover:scale-105">
              <p className="font-serif text-lg text-gold mb-2">Margaret</p>
              <a 
                href="tel:0726217550" 
                className="flex items-center justify-center gap-2 text-cream hover:text-gold transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-sans">0726 217 550</span>
              </a>
            </div>

            <div className="bg-emerald-dark/50 backdrop-blur-sm p-6 rounded-lg border-2 border-gold/30 text-center hover:border-gold transition-all transform hover:scale-105">
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
        </div>
      </div>
    </section>
  );
};
<p className="font-serif text-cream/80 mt-4 italic hover:text-gold transition-colors duration-300">
"To life, To love!"
</p>
export default RSVP;
