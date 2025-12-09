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
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const EventProgramme = () => {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const printWindow = window.open('', '', 'width=900,height=650');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Wedding Programme - Margaret & Moses</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;400;500;600&display=swap');
            body { 
              font-family: 'Montserrat', sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 40px;
              background: #f9f5f0;
              background-image: url('https://www.transparenttextures.com/patterns/cream-paper.png');
            }
            .header {
              text-align: center;
              margin-bottom: 40px;
              padding-bottom: 20px;
              border-bottom: 2px solid #d4af37;
              background: linear-gradient(to right, #f9f5f0, #e8f5e9, #f9f5f0);
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            }
            .title {
              font-family: 'Playfair Display', serif;
              font-size: 36px;
              font-weight: 700;
              color: #2e7d32;
              margin-bottom: 10px;
              text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
            }
            .subtitle {
              font-size: 20px;
              color: #d4af37;
              margin-bottom: 5px;
              font-weight: 500;
            }
            .date {
              font-size: 16px;
              color: #2e7d32;
              margin-bottom: 10px;
              font-weight: 500;
            }
            .theme {
              font-size: 14px;
              color: #5d4037;
              font-style: italic;
            }
            .schedule-section {
              margin-bottom: 40px;
              page-break-inside: avoid;
              background: white;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.05);
              border-left: 4px solid #d4af37;
            }
            .section-title {
              font-family: 'Playfair Display', serif;
              font-size: 24px;
              font-weight: 700;
              color: #2e7d32;
              margin: 0 0 20px 0;
              padding-bottom: 10px;
              border-bottom: 2px solid #e8f5e9;
              display: flex;
              align-items: center;
            }
            .event {
              display: flex;
              margin-bottom: 25px;
              page-break-inside: avoid;
              padding: 10px;
              border-radius: 6px;
              transition: all 0.3s ease;
            }
            .event:hover {
              background-color: #f5f5f5;
            }
            .time {
              width: 120px;
              font-weight: 600;
              color: #d4af37;
              font-size: 15px;
            }
            .event-details {
              flex: 1;
              border-left: 2px solid #e8f5e9;
              padding-left: 15px;
            }
            .event-title {
              font-weight: 600;
              color: #2e7d32;
              margin-bottom: 5px;
              font-size: 16px;
            }
            .event-description {
              color: #5d4037;
              font-size: 14px;
              line-height: 1.5;
            }
            .event-location {
              font-size: 13px;
              color: #d4af37;
              margin: 3px 0;
              font-weight: 500;
            }
            .footer {
              text-align: center;
              margin-top: 50px;
              padding-top: 20px;
              border-top: 2px solid #e8f5e9;
              color: #5d4037;
              font-size: 14px;
              font-style: italic;
            }
            .section-divider {
              height: 2px;
              background: linear-gradient(to right, transparent, #d4af37, transparent);
              margin: 30px 0;
              border: none;
            }
            @media print {
              body {
                padding: 20px;
                background: white;
              }
              .no-print {
                display: none;
              }
              .schedule-section {
                box-shadow: none;
                border: 1px solid #eee;
                page-break-inside: avoid;
              }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 class="title">Wedding Day Programme</h1>
            <h2 class="subtitle">Margaret & Moses</h2>
            <p class="date">Friday, December 12, 2025</p>
            <p class="theme">Theme: Elegant Green & Gold • 6:00 AM – Midnight</p>
          </div>

          <!-- Part 1: Morning Preparations -->
          <div class="schedule-section">
            <h3 class="section-title">
              <span>Part 1: Morning Preparations</span>
            </h3>
            <p style="color: #5d4037; font-style: italic; margin-bottom: 15px;">The Procession</p>
            
            <div class="event">
              <div class="time">6:00 AM</div>
              <div class="event-details">
                <div class="event-title">Wake Up & Devotion</div>
                <div class="event-description">Bride and Groom teams begin with prayers at separate locations</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">7:00 AM</div>
              <div class="event-details">
                <div class="event-title">Glam & Dressing</div>
                <div class="event-description">Hair, makeup, grooming. Photographer arrives for 'Getting Ready' shots</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">7:45 AM</div>
              <div class="event-details">
                <div class="event-title">Groom's Convoy Departs</div>
                <div class="event-description">Moses and team leave to pick up the bride</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">8:15 AM</div>
              <div class="event-details">
                <div class="event-title">The Pick-Up (Kutoa Bibi)</div>
                <div class="event-description">Negotiation, first look, parents' blessings</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">8:45 AM</div>
              <div class="event-details">
                <div class="event-title">Bridal Convoy Departure</div>
                <div class="event-description">Convoy heads to St. Michael & All Angels, Ruiru Town</div>
              </div>
            </div>
          </div>

          <!-- Part 2: Church Ceremony -->
          <div class="schedule-section">
            <h3 class="section-title">Part 2: Church Ceremony</h3>
            <p class="event-location">St. Michael & All Angels, Ruiru</p>
            
            <div class="event">
              <div class="time">9:00 AM</div>
              <div class="event-details">
                <div class="event-title">Arrival & Seating</div>
                <div class="event-description">Guests seated, Groom takes place at altar</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">9:15 AM</div>
              <div class="event-details">
                <div class="event-title">The Processional</div>
                <div class="event-description">Bridal party entrance, Margaret walks down the aisle</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">9:30 AM</div>
              <div class="event-details">
                <div class="event-title">The Service</div>
                <div class="event-description">Prayers, Sermon, Vows, Rings, Certificate Signing</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">11:00 AM</div>
              <div class="event-details">
                <div class="event-title">Recessional & Photos</div>
                <div class="event-description">Couple exits, photos on church steps</div>
              </div>
            </div>
          </div>

          <!-- Part 3: Photo Session -->
          <div class="schedule-section">
            <h3 class="section-title">Part 3: Photo Session</h3>
            <p class="event-location">11:30 AM – 1:30 PM</p>
            
            <div class="event">
              <div class="time">11:30 AM</div>
              <div class="event-details">
                <div class="event-title">Official Photo Shoot</div>
                <div class="event-description">Bridal party heads to photo site</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">11:30 AM</div>
              <div class="event-details">
                <div class="event-title">Guests Arrive at Venue</div>
                <div class="event-description">Refreshments and music at Homeland Resort</div>
              </div>
            </div>
          </div>

          <!-- Part 4: The Reception -->
          <div class="schedule-section">
            <h3 class="section-title">Part 4: The Reception</h3>
            <p class="event-location">Homeland Ruiru Resort</p>
            
            <div class="event">
              <div class="time">1:30 PM</div>
              <div class="event-details">
                <div class="event-title">Lunch is Served</div>
                <div class="event-description">Guests enjoy buffet while bridal party finishes photos</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">2:30 PM</div>
              <div class="event-details">
                <div class="event-title">Grand Entrance</div>
                <div class="event-description">MC hypes crowd, bridal party enters dancing</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">3:00 PM</div>
              <div class="event-details">
                <div class="event-title">Entertainment & Speeches</div>
                <div class="event-description">DJ, dancers, speeches from friends and parents</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">4:00 PM</div>
              <div class="event-details">
                <div class="event-title">Gift Presentation</div>
                <div class="event-description">Guests and family present gifts</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">4:30 PM</div>
              <div class="event-details">
                <div class="event-title">Cake Cutting & Toast</div>
                <div class="event-description">Cutting cake, sharing with parents, champagne toasts</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">5:30 PM</div>
              <div class="event-details">
                <div class="event-title">Vote of Thanks & Closing</div>
                <div class="event-description">Thanks, closing prayer, bouquet toss</div>
              </div>
            </div>
          </div>

          <!-- Part 5: Evening Party -->
          <div class="schedule-section">
            <h3 class="section-title">Part 5: Evening Party</h3>
            <p class="event-location">After-Party at Homeland Resort</p>
            
            <div class="event">
              <div class="time">6:00 PM</div>
              <div class="event-details">
                <div class="event-title">Transition / Freshen Up</div>
                <div class="event-description">Older guests depart, couple changes to evening wear</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">7:00 PM</div>
              <div class="event-details">
                <div class="event-title">Evening Dinner</div>
                <div class="event-description">Intimate dinner for bridal team and close friends</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">8:30 PM</div>
              <div class="event-details">
                <div class="event-title">The Party</div>
                <div class="event-description">First dance, open floor, DJ mixing Afro-pop & Mugithi</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">12:00 AM</div>
              <div class="event-details">
                <div class="event-title">End of Programme</div>
                <div class="event-description">Departure</div>
              </div>
            </div>
          </div>

          <div class="footer">
            <p>Thank you for being part of our special day!</p>
            <p>For any questions, please contact our wedding planner at planner@example.com</p>
          </div>
        </body>
        </html>
      `);
      printWindow.document.close();
      setTimeout(() => {
        printWindow.print();
      }, 1000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 font-serif">Wedding Day Programme</h1>
          <p className="text-emerald-800 mt-1">Friday, December 12, 2025</p>
          <p className="text-amber-700 text-sm">Theme: Elegant Green & Gold • 6:00 AM – Midnight</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button 
            onClick={handleDownload} 
            className="gap-2 bg-emerald-700 hover:bg-emerald-800 text-white"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
          <Button 
            onClick={handlePrint} 
            variant="outline" 
            className="gap-2 border-amber-600 text-amber-700 hover:bg-amber-50"
          >
            <Printer className="h-4 w-4" />
            Print
          </Button>
        </div>
      </div>

      <div ref={printRef} className="bg-white rounded-lg shadow-lg p-6 print:shadow-none print:p-0 border border-amber-100">
        <div className="text-center mb-8 print:mb-6">
          <h2 className="text-3xl font-bold text-emerald-800 font-serif">Margaret & Moses</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto my-3"></div>
          <p className="text-amber-700">December 12, 2025</p>
        </div>

        {/* Part 1: Morning Preparations */}
        <div className="mb-10 print:mb-8 bg-gradient-to-r from-emerald-50 to-white p-6 rounded-lg border-l-4 border-amber-500">
          <div className="flex items-center mb-4">
            <Sun className="h-6 w-6 text-amber-600 mr-2" />
            <h3 className="text-xl font-semibold text-emerald-800">Part 1: Morning Preparations</h3>
          </div>
          <p className="text-amber-700 italic mb-4">The Procession</p>
          
          <div className="space-y-6 pl-2 border-l-2 border-amber-100 ml-3">
            {[
              { time: '6:00 AM', title: 'Wake Up & Devotion', description: 'Bride and Groom teams begin with prayers at separate locations', icon: Sun },
              { time: '7:00 AM', title: 'Glam & Dressing', description: 'Hair, makeup, grooming. Photographer arrives for \'Getting Ready\' shots', icon: Sparkles },
              { time: '7:45 AM', title: 'Groom\'s Convoy Departs', description: 'Moses and team leave to pick up the bride', icon: Car },
              { time: '8:15 AM', title: 'The Pick-Up (Kutoa Bibi)', description: 'Negotiation, first look, parents\' blessings', icon: Heart },
              { time: '8:45 AM', title: 'Bridal Convoy Departure', description: 'Convoy heads to St. Michael & All Angels, Ruiru Town', icon: Car },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start group">
                <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-amber-200 transition-colors">
                  <item.icon className="h-4 w-4 text-amber-700" />
                </div>
                <div>
                  <div className="font-medium text-amber-700">{item.time}</div>
                  <h4 className="font-semibold text-emerald-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Church Ceremony */}
        <div className="mb-10 print:mb-8 bg-gradient-to-r from-emerald-50 to-white p-6 rounded-lg border-l-4 border-emerald-500">
          <div className="flex items-center mb-4">
            <Church className="h-6 w-6 text-emerald-600 mr-2" />
            <h3 className="text-xl font-semibold text-emerald-800">Part 2: Church Ceremony</h3>
          </div>
          <p className="text-emerald-700 mb-4">St. Michael & All Angels, Ruiru</p>
          
          <div className="space-y-6 pl-2 border-l-2 border-emerald-100 ml-3">
            {[
              { time: '9:00 AM', title: 'Arrival & Seating', description: 'Guests seated, Groom takes place at altar', icon: Users },
              { time: '9:15 AM', title: 'The Processional', description: 'Bridal party entrance, Margaret walks down the aisle', icon: Heart },
              { time: '9:30 AM', title: 'The Service', description: 'Prayers, Sermon, Vows, Rings, Certificate Signing', icon: Church },
              { time: '11:00 AM', title: 'Recessional & Photos', description: 'Couple exits, photos on church steps', icon: Camera },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start group">
                <div className="bg-emerald-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-emerald-200 transition-colors">
                  <item.icon className="h-4 w-4 text-emerald-700" />
                </div>
                <div>
                  <div className="font-medium text-emerald-700">{item.time}</div>
                  <h4 className="font-semibold text-emerald-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: Photo Session */}
        <div className="mb-10 print:mb-8 bg-gradient-to-r from-amber-50 to-white p-6 rounded-lg border-l-4 border-amber-400">
          <div className="flex items-center mb-4">
            <Camera className="h-6 w-6 text-amber-600 mr-2" />
            <h3 className="text-xl font-semibold text-amber-800">Part 3: Photo Session</h3>
          </div>
          <p className="text-amber-700 mb-4">11:30 AM – 1:30 PM</p>
          
          <div className="space-y-6 pl-2 border-l-2 border-amber-100 ml-3">
            {[
              { time: '11:30 AM', title: 'Official Photo Shoot', description: 'Bridal party heads to photo site', icon: Camera },
              { time: '11:30 AM', title: 'Guests Arrive at Venue', description: 'Refreshments and music at Homeland Resort', icon: Users },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start group">
                <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-amber-200 transition-colors">
                  <item.icon className="h-4 w-4 text-amber-700" />
                </div>
                <div>
                  <div className="font-medium text-amber-700">{item.time}</div>
                  <h4 className="font-semibold text-amber-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 4: The Reception */}
        <div className="mb-10 print:mb-8 bg-gradient-to-r from-emerald-50 to-white p-6 rounded-lg border-l-4 border-emerald-500">
          <div className="flex items-center mb-4">
            <PartyPopper className="h-6 w-6 text-emerald-600 mr-2" />
            <h3 className="text-xl font-semibold text-emerald-800">Part 4: The Reception</h3>
          </div>
          <p className="text-emerald-700 mb-4">Homeland Ruiru Resort</p>
          
          <div className="space-y-6 pl-2 border-l-2 border-emerald-100 ml-3">
            {[
              { time: '1:30 PM', title: 'Lunch is Served', description: 'Guests enjoy buffet while bridal party finishes photos', icon: Utensils },
              { time: '2:30 PM', title: 'Grand Entrance', description: 'MC hypes crowd, bridal party enters dancing', icon: PartyPopper },
              { time: '3:00 PM', title: 'Entertainment & Speeches', description: 'DJ, dancers, speeches from friends and parents', icon: Mic2 },
              { time: '4:00 PM', title: 'Gift Presentation', description: 'Guests and family present gifts', icon: Gift },
              { time: '4:30 PM', title: 'Cake Cutting & Toast', description: 'Cutting cake, sharing with parents, champagne toasts', icon: Cake },
              { time: '5:30 PM', title: 'Vote of Thanks & Closing', description: 'Thanks, closing prayer, bouquet toss', icon: Heart },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start group">
                <div className="bg-emerald-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-emerald-200 transition-colors">
                  <item.icon className="h-4 w-4 text-emerald-700" />
                </div>
                <div>
                  <div className="font-medium text-emerald-700">{item.time}</div>
                  <h4 className="font-semibold text-emerald-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 5: Evening Party */}
        <div className="mb-6 print:mb-4 bg-gradient-to-r from-amber-50 to-white p-6 rounded-lg border-l-4 border-amber-500">
          <div className="flex items-center mb-4">
            <Moon className="h-6 w-6 text-amber-600 mr-2" />
            <h3 className="text-xl font-semibold text-amber-800">Part 5: Evening Party</h3>
          </div>
          <p className="text-amber-700 mb-4">After-Party at Homeland Resort</p>
          
          <div className="space-y-6 pl-2 border-l-2 border-amber-100 ml-3">
            {[
              { time: '6:00 PM', title: 'Transition / Freshen Up', description: 'Older guests depart, couple changes to evening wear', icon: Sparkles },
              { time: '7:00 PM', title: 'Evening Dinner', description: 'Intimate dinner for bridal team and close friends', icon: Utensils },
              { time: '8:30 PM', title: 'The Party', description: 'First dance, open floor, DJ mixing Afro-pop & Mugithi', icon: Music },
              { time: '12:00 AM', title: 'End of Programme', description: 'Departure', icon: Moon },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start group">
                <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-amber-200 transition-colors">
                  <item.icon className="h-4 w-4 text-amber-700" />
                </div>
                <div>
                  <div className="font-medium text-amber-700">{item.time}</div>
                  <h4 className="font-semibold text-amber-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-amber-100 text-center text-sm text-gray-600 print:mt-8">
          <p className="text-emerald-800 font-medium">Thank you for being part of our special day!</p>
          <p className="mt-2 text-amber-700">For any questions, please contact our wedding planner at <a href="mailto:planner@example.com" className="text-emerald-700 hover:underline font-medium">planner@example.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default EventProgramme;