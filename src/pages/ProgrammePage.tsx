import { Calendar, Clock, MapPin, Music } from "lucide-react";
import { Link } from "react-router-dom";

const ProgrammePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 floral-pattern">
      {/* Decorative floral pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-purple-400 rounded-tl-full" />
        <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-purple-400 rounded-tr-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border-l-2 border-b-2 border-purple-400 rounded-bl-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-purple-400 rounded-br-full" />
      </div>

      <div className="container mx-auto px-4 z-10 pt-28 pb-16">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          {/* Header Section */}
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-3 bg-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-purple-400">
              <Calendar className="w-6 h-6 text-purple-300" />
              <p className="font-serif text-sm uppercase tracking-[0.3em] text-purple-300">
                Wedding Programme
              </p>
            </div>
            
            <div className="space-y-4">
              <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-white">
                Schedule of Events
              </h1>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <div className="hidden sm:block h-px w-16 bg-purple-400" />
                <p className="font-serif text-lg sm:text-xl md:text-2xl text-purple-200 italic max-w-2xl">
                  Join us as we celebrate our special day
                </p>
                <div className="hidden sm:block h-px w-16 bg-purple-400" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/#programme" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/20 backdrop-blur-sm text-purple-300 hover:bg-purple-500/30 border-2 border-purple-400 rounded-lg transition-all hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="m12 19-7-7 7-7"/>
                  <path d="M19 12H5"/>
                </svg>
                Back to programme section
              </Link>
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-2 border-white rounded-lg transition-all hover:scale-105"
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
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-purple-400/20">
            <div className="space-y-8">
              {/* Ceremony */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 bg-emerald p-3 rounded-full">
                  <MapPin className="w-5 h-5 text-gold" />
                  <h3 className="font-serif text-xl text-gold">Ceremony</h3>
                </div>
                <div className="h-px w-24 bg-gold mx-auto" />
                <p className="font-serif text-emerald-700">A.C.K Diocese of Thika - Ruiru Parish</p>
                <p className="font-serif text-2xl text-emerald-800 font-bold">9:00 AM - 11:00 AM</p>
                <p className="font-serif text-emerald-600">Join us for the sacred ceremony as we exchange vows and begin our journey together.</p>
              </div>

              {/* Reception */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 bg-emerald p-3 rounded-full">
                  <Music className="w-5 h-5 text-gold" />
                  <h3 className="font-serif text-xl text-gold">Reception</h3>
                </div>
                <div className="h-px w-24 bg-gold mx-auto" />
                <p className="font-serif text-emerald-700">Reception Venue</p>
                <p className="font-serif text-2xl text-emerald-800 font-bold">12:00 PM - 6:00 PM</p>
                <p className="font-serif text-emerald-600">Celebrate with us as we share food, music, and create lasting memories.</p>
              </div>

              {/* Detailed Timeline */}
              <div className="space-y-6 pt-8 border-t border-gold/20">
                <h3 className="font-serif text-2xl text-emerald-800 text-center">Detailed Schedule</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-emerald/50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-serif text-gold font-bold">8:30 AM</p>
                      <p className="font-serif text-cream">Guests Arrival & Seating</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-emerald/50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-serif text-gold font-bold">9:00 AM</p>
                      <p className="font-serif text-cream">Ceremony Begins</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-emerald/50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-serif text-gold font-bold">10:30 AM</p>
                      <p className="font-serif text-cream">Photo Session</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-emerald/50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-serif text-gold font-bold">12:00 PM</p>
                      <p className="font-serif text-cream">Reception & Lunch</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-emerald/50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-serif text-gold font-bold">2:00 PM</p>
                      <p className="font-serif text-cream">Entertainment & Dancing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-emerald/50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-serif text-gold font-bold">6:00 PM</p>
                      <p className="font-serif text-cream">Event Concludes</p>
                    </div>
                  </div>
                </div>
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

export default ProgrammePage;
