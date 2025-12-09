import { useRef } from "react";
import {
  Clock,
  Music,
  Utensils,
  Camera,
  Heart,
  Sparkles,
  PartyPopper,
  Church,
  Car,
  Gift,
  Cake,
  Moon,
  Sun,
  Users,
  Mic2,
  Download,
  Printer,
} from "lucide-react";

const EventProgramme = () => {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Implement download functionality if needed
    handlePrint();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Wedding Day Programme</h1>
        <div className="flex space-x-2">
          <button
            onClick={handleDownload}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <Printer className="mr-2 h-4 w-4" />
            Print
          </button>
        </div>
      </div>

      <div ref={printRef} className="space-y-8">
        {/* Ceremony Section */}
        <div className="border-l-4 border-blue-500 pl-4">
          <div className="flex items-center">
            <Church className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800">Ceremony</h2>
          </div>
          <div className="mt-4 space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">14:00 - 15:00</h3>
                <p className="text-gray-600">Guest Arrival & Seating</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <Heart className="h-5 w-5 text-pink-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">15:00 - 16:00</h3>
                <p className="text-gray-600">Wedding Ceremony</p>
                <p className="text-sm text-gray-500 mt-1">Sacred Heart Cathedral, Nairobi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cocktail Hour */}
        <div className="border-l-4 border-green-500 pl-4">
          <div className="flex items-center">
            <Utensils className="h-6 w-6 text-green-500 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800">Cocktail Hour</h2>
          </div>
          <div className="mt-4 space-y-4">
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <Clock className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">16:00 - 17:00</h3>
                <p className="text-gray-600">Cocktails & Canapés</p>
                <p className="text-sm text-gray-500 mt-1">Garden Terrace</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reception */}
        <div className="border-l-4 border-purple-500 pl-4">
          <div className="flex items-center">
            <PartyPopper className="h-6 w-6 text-purple-500 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800">Reception</h2>
          </div>
          <div className="mt-4 space-y-4">
            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-4">
                <Clock className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">17:00 - 18:00</h3>
                <p className="text-gray-600">Grand Entrance & First Dance</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-4">
                <Utensils className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">18:00 - 19:30</h3>
                <p className="text-gray-600">Dinner is Served</p>
                <p className="text-sm text-gray-500 mt-1">Four-course plated dinner with wine pairing</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-4">
                <Mic2 className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">19:30 - 20:00</h3>
                <p className="text-gray-600">Speeches & Toasts</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-4">
                <Cake className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">20:00 - 20:30</h3>
                <p className="text-gray-600">Cake Cutting</p>
              </div>
            </div>
          </div>
        </div>

        {/* Evening Celebration */}
        <div className="border-l-4 border-yellow-500 pl-4">
          <div className="flex items-center">
            <Music className="h-6 w-6 text-yellow-500 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800">Evening Celebration</h2>
          </div>
          <div className="mt-4 space-y-4">
            <div className="flex items-start">
              <div className="bg-yellow-100 p-2 rounded-full mr-4">
                <Moon className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">20:30 - 22:00</h3>
                <p className="text-gray-600">Dancing & Party</p>
                <p className="text-sm text-gray-500 mt-1">Live band and DJ performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        <p>We look forward to celebrating with you!</p>
        <p className="mt-2">For any questions, please contact our wedding planner at <a href="mailto:planner@example.com" className="text-blue-600 hover:underline">planner@example.com</a></p>
      </div>
    </div>
  );
};

export default EventProgramme;
