import { CarFront } from "lucide-react";
import { Link } from "react-router-dom";
import EventPasses from "@/components/EventPasses";

const ParkingPassPage = () => {
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
        <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
          {/* Header Section */}
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-3 bg-gold/20 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-gold">
              <CarFront className="w-6 h-6 text-gold" />
              <p className="font-serif text-sm uppercase tracking-[0.3em] text-gold">
                Event Pass Management
              </p>
            </div>
            
            <div className="space-y-4">
              <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-cream">
                Passes & Tags
              </h1>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <div className="hidden sm:block h-px w-16 bg-gold" />
                <p className="font-serif text-lg sm:text-xl md:text-2xl text-cream italic max-w-2xl">
                  Manage parking passes and volunteer tags for the wedding day
                </p>
                <div className="hidden sm:block h-px w-16 bg-gold" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/#parking" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold/20 backdrop-blur-sm text-gold hover:bg-gold/30 border-2 border-gold rounded-lg transition-all hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="m12 19-7-7 7-7"/>
                  <path d="M19 12H5"/>
                </svg>
                Back to parking info
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
                  Create & Manage Event Passes
                </h2>
                <div className="h-px w-24 bg-gold mx-auto mb-4" />
                <p className="font-serif text-emerald-700 max-w-2xl mx-auto">
                  Generate parking passes for guests and volunteer tags for event staff. All passes can be downloaded as PDF files for easy printing and distribution.
                </p>
              </div>
              
              <EventPasses />
              
              <div className="mt-8 pt-8 border-t border-gold/20 text-center">
                <p className="font-serif text-emerald-700/80">
                  Create and manage all event passes in one place. Download or print as needed for the special day.
                </p>
              </div>
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

export default ParkingPassPage;
