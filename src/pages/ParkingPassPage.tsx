import { CarFront } from "lucide-react";
import { Link } from "react-router-dom";
import EventPasses from "@/components/EventPasses";

const ParkingPassPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pt-12 pb-20 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 bg-white/80 border border-emerald-200 rounded-full px-6 py-2 shadow-sm">
            <CarFront className="w-5 h-5 text-emerald-600" />
            <p className="font-serif text-sm uppercase tracking-[0.3em] text-emerald-700">
              Event Pass Management
            </p>
          </div>
          <h1 className="font-script text-5xl text-emerald-800">Passes & Tags</h1>
          <p className="font-serif text-emerald-700 max-w-2xl mx-auto">
            Manage parking passes and volunteer tags for the wedding day. Create, edit, and download passes as needed.
          </p>
          <Link 
            to="/#parking" 
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 text-sm font-medium text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50 rounded-md transition-colors border border-emerald-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            Back to parking info
          </Link>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8">
          <EventPasses />
          
          <div className="mt-8 pt-6 border-t border-emerald-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-emerald-700/80 text-center sm:text-left">
              Create and manage all event passes in one place. Download or print as needed.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50 rounded-md transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="m12 19-7-7 7-7"/>
                <path d="M19 12H5"/>
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingPassPage;
