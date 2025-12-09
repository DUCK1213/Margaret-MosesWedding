import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Users, Calendar, Car, Download, TrendingUp, Heart, Mail, Phone, CheckCircle, XCircle } from "lucide-react";

interface RSVPStats {
  total: number;
  attending: number;
  notAttending: number;
  totalGuests: number;
}

interface ParkingStats {
  totalPasses: number;
  totalTags: number;
}

const DashboardPage = () => {
  const [rsvpStats, setRsvpStats] = useState<RSVPStats>({
    total: 0,
    attending: 0,
    notAttending: 0,
    totalGuests: 0
  });
  const [parkingStats, setParkingStats] = useState<ParkingStats>({
    totalPasses: 0,
    totalTags: 0
  });
  const [loading, setLoading] = useState(true);
  const [recentRSVPs, setRecentRSVPs] = useState<any[]>([]);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Fetch RSVP stats
      const rsvpResponse = await fetch("/.netlify/functions/rsvp-stats");
      if (rsvpResponse.ok) {
        const data = await rsvpResponse.json();
        setRsvpStats(data);
      }

      // Fetch parking stats
      const parkingResponse = await fetch("/.netlify/functions/parking-stats");
      if (parkingResponse.ok) {
        const data = await parkingResponse.json();
        setParkingStats(data);
      }

      // Fetch recent RSVPs
      const recentResponse = await fetch("/.netlify/functions/rsvp-recent");
      if (recentResponse.ok) {
        const data = await recentResponse.json();
        setRecentRSVPs(data);
      }
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald to-emerald-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="font-serif text-cream text-xl">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900 floral-pattern">
      {/* Decorative floral pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-blue-400 rounded-tl-full" />
        <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-blue-400 rounded-tr-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border-l-2 border-b-2 border-blue-400 rounded-bl-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-blue-400 rounded-br-full" />
      </div>

      <div className="container mx-auto px-4 z-10 pt-28 pb-16">
        <div className="max-w-7xl mx-auto space-y-12 animate-fade-in">
          {/* Header Section */}
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-3 bg-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-blue-400">
              <TrendingUp className="w-6 h-6 text-blue-300" />
              <p className="font-serif text-sm uppercase tracking-[0.3em] text-blue-300">
                Dashboard
              </p>
            </div>
            
            <div className="space-y-4">
              <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-white">
                Wedding Analytics
              </h1>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <div className="hidden sm:block h-px w-16 bg-blue-400" />
                <p className="font-serif text-lg sm:text-xl md:text-2xl text-blue-200 italic max-w-2xl">
                  Real-time insights into your wedding planning
                </p>
                <div className="hidden sm:block h-px w-16 bg-blue-400" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total RSVPs */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-blue-400/20">
              <div className="flex items-center justify-between mb-4">
                <Users className="w-8 h-8 text-gold" />
                <span className="text-sm font-serif text-emerald-600">Total</span>
              </div>
              <p className="font-script text-3xl text-emerald-800 mb-2">{rsvpStats.total}</p>
              <p className="font-serif text-emerald-600">Total RSVPs</p>
            </div>

            {/* Attending */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-blue-400/20">
              <div className="flex items-center justify-between mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <span className="text-sm font-serif text-emerald-600">Confirmed</span>
              </div>
              <p className="font-script text-3xl text-emerald-800 mb-2">{rsvpStats.attending}</p>
              <p className="font-serif text-emerald-600">Will Attend</p>
              <div className="mt-2 text-sm font-serif text-green-600">
                {rsvpStats.total > 0 ? Math.round((rsvpStats.attending / rsvpStats.total) * 100) : 0}% response rate
              </div>
            </div>

            {/* Not Attending */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-blue-400/20">
              <div className="flex items-center justify-between mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <span className="text-sm font-serif text-emerald-600">Declined</span>
              </div>
              <p className="font-script text-3xl text-emerald-800 mb-2">{rsvpStats.notAttending}</p>
              <p className="font-serif text-emerald-600">Cannot Attend</p>
            </div>

            {/* Total Guests */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-blue-400/20">
              <div className="flex items-center justify-between mb-4">
                <Heart className="w-8 h-8 text-gold" />
                <span className="text-sm font-serif text-emerald-600">Guests</span>
              </div>
              <p className="font-script text-3xl text-emerald-800 mb-2">{rsvpStats.totalGuests}</p>
              <p className="font-serif text-emerald-600">Total Guests</p>
            </div>
          </div>

          {/* Event Pass Stats */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-blue-400/20">
              <div className="flex items-center justify-between mb-4">
                <Car className="w-8 h-8 text-gold" />
                <span className="text-sm font-serif text-emerald-600">Parking</span>
              </div>
              <p className="font-script text-3xl text-emerald-800 mb-2">{parkingStats.totalPasses}</p>
              <p className="font-serif text-emerald-600">Parking Passes Generated</p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-blue-400/20">
              <div className="flex items-center justify-between mb-4">
                <Users className="w-8 h-8 text-gold" />
                <span className="text-sm font-serif text-emerald-600">Volunteers</span>
              </div>
              <p className="font-script text-3xl text-emerald-800 mb-2">{parkingStats.totalTags}</p>
              <p className="font-serif text-emerald-600">Volunteer Tags Generated</p>
            </div>
          </div>

          {/* Recent RSVPs */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-2 border-blue-400/20">
            <h3 className="font-script text-3xl text-emerald-800 mb-6">Recent RSVPs</h3>
            
            {recentRSVPs.length > 0 ? (
              <div className="space-y-4">
                {recentRSVPs.map((rsvp, index) => (
                  <div key={index} className="bg-emerald/50 p-4 rounded-lg border border-emerald/30">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-gold" />
                          <p className="font-serif text-emerald-800 font-semibold">{rsvp.name}</p>
                          {rsvp.attending === "yes" ? (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          ) : (
                            <XCircle className="w-4 h-4 text-red-600" />
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm font-serif text-emerald-600">
                          <div className="flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            {rsvp.email}
                          </div>
                          <div className="flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            {rsvp.phone}
                          </div>
                        </div>
                        {rsvp.guests && (
                          <p className="text-sm font-serif text-emerald-600">
                            Guests: {rsvp.guests}
                          </p>
                        )}
                        {rsvp.message && (
                          <p className="text-sm font-serif text-emerald-600 italic">
                            "{rsvp.message}"
                          </p>
                        )}
                      </div>
                      <div className="text-xs font-serif text-emerald-500">
                        {new Date(rsvp.receivedAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="font-serif text-emerald-600 text-center py-8">
                No RSVPs received yet
              </p>
            )}
          </div>

          {/* Quick Actions */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-2 border-blue-400/20">
            <h3 className="font-script text-3xl text-emerald-800 mb-6">Quick Actions</h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                to="/parking-pass"
                className="flex items-center gap-3 p-4 bg-emerald/50 rounded-lg hover:bg-emerald/60 transition-colors border border-emerald/30"
              >
                <Car className="w-6 h-6 text-gold" />
                <div>
                  <p className="font-serif text-emerald-800 font-semibold">Generate Event Passes</p>
                  <p className="text-sm font-serif text-emerald-600">Create parking passes and volunteer tags</p>
                </div>
              </Link>

              <button
                onClick={() => window.open("/.netlify/functions/rsvp-export", "_blank")}
                className="flex items-center gap-3 p-4 bg-emerald/50 rounded-lg hover:bg-emerald/60 transition-colors border border-emerald/30"
              >
                <Download className="w-6 h-6 text-gold" />
                <div className="text-left">
                  <p className="font-serif text-emerald-800 font-semibold">Export RSVP Data</p>
                  <p className="text-sm font-serif text-emerald-600">Download all RSVP submissions</p>
                </div>
              </button>

              <button
                onClick={() => window.open("/.netlify/functions/parking-log-export", "_blank")}
                className="flex items-center gap-3 p-4 bg-emerald/50 rounded-lg hover:bg-emerald/60 transition-colors border border-emerald/30"
              >
                <Download className="w-6 h-6 text-gold" />
                <div className="text-left">
                  <p className="font-serif text-emerald-800 font-semibold">Export Parking Data</p>
                  <p className="text-sm font-serif text-emerald-600">Download parking pass logs</p>
                </div>
              </button>
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

export default DashboardPage;
