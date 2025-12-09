import { Heart, Mail, Phone, Users, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

const RSVPPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attending: "",
    guests: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/.netlify/functions/rsvp-submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Your RSVP has been submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          attending: "",
          guests: "",
          message: ""
        });
      } else {
        throw new Error("Failed to submit RSVP");
      }
    } catch (error) {
      toast.error("Failed to submit RSVP. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald to-emerald-900 floral-pattern">
      {/* Decorative floral pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-gold rounded-tl-full" />
        <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-gold rounded-tr-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border-l-2 border-b-2 border-gold rounded-bl-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-gold rounded-br-full" />
      </div>

      <div className="container mx-auto px-4 z-10 pt-28 pb-16">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          {/* Header Section */}
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-3 bg-gold/20 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-gold">
              <Heart className="w-6 h-6 text-gold" />
              <p className="font-serif text-sm uppercase tracking-[0.3em] text-gold">
                RSVP
              </p>
            </div>
            
            <div className="space-y-4">
              <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-cream">
                RSVP
              </h1>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <div className="hidden sm:block h-px w-16 bg-gold" />
                <p className="font-serif text-lg sm:text-xl md:text-2xl text-cream italic max-w-2xl">
                  Please let us know if you can join our celebration
                </p>
                <div className="hidden sm:block h-px w-16 bg-gold" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/#rsvp" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold/20 backdrop-blur-sm text-gold hover:bg-gold/30 border-2 border-gold rounded-lg transition-all hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="m12 19-7-7 7-7"/>
                  <path d="M19 12H5"/>
                </svg>
                Back to RSVP section
              </Link>
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-cream/20 backdrop-blur-sm text-cream hover:bg-cream/30 border-2 border-cream rounded-lg transition-all hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
                Back to Home
              </Link>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-cream/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-gold/20">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="font-script text-3xl sm:text-4xl text-emerald-800 mb-4">
                  RSVP Form
                </h2>
                <div className="h-px w-24 bg-gold mx-auto mb-4" />
                <p className="font-serif text-emerald-700 max-w-2xl mx-auto">
                  We can't wait to celebrate with you! Please fill out the form below to let us know if you'll be attending.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-serif text-emerald-800 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-emerald/30 rounded-lg focus:border-gold focus:outline-none font-serif text-emerald-800 bg-white/80"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-serif text-emerald-800 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-emerald/30 rounded-lg focus:border-gold focus:outline-none font-serif text-emerald-800 bg-white/80"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-serif text-emerald-800 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-emerald/30 rounded-lg focus:border-gold focus:outline-none font-serif text-emerald-800 bg-white/80"
                      placeholder="+254 XXX XXX XXX"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-serif text-emerald-800 flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Will you attend? *
                    </label>
                    <select
                      name="attending"
                      value={formData.attending}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-emerald/30 rounded-lg focus:border-gold focus:outline-none font-serif text-emerald-800 bg-white/80"
                    >
                      <option value="">Please select...</option>
                      <option value="yes">Yes, I'll be there!</option>
                      <option value="no">Sorry, I can't make it</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-serif text-emerald-800 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      min="0"
                      max="5"
                      className="w-full px-4 py-3 border-2 border-emerald/30 rounded-lg focus:border-gold focus:outline-none font-serif text-emerald-800 bg-white/80"
                      placeholder="Number of additional guests"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-serif text-emerald-800 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-emerald/30 rounded-lg focus:border-gold focus:outline-none font-serif text-emerald-800 bg-white/80"
                    placeholder="Any special dietary requirements or messages for the couple?"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-emerald-800 font-serif font-bold rounded-lg hover:bg-gold/90 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-emerald-800 border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Heart className="w-5 h-5" />
                        Submit RSVP
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="text-center space-y-4">
            <div className="h-px w-32 bg-gold/50 mx-auto" />
            <p className="font-serif text-cream/70 text-sm">
              Margaret & Moses Wedding • December 12, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVPPage;
