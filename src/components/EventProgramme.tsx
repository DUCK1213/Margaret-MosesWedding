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
              <div class="time">6:00 - 7:00 AM</div>
              <div class="event-details">
                <div class="event-title">Glam & Dressing</div>
                <div class="event-description">BTS & Bride and Groom Promises • Car Decoration • Breakfast</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">7:00 - 8:00 AM</div>
              <div class="event-details">
                <div class="event-title">Dressing & Photo Session</div>
                <div class="event-description">Final touches and 'Getting Ready' photography</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">8:00 - 9:00 AM</div>
              <div class="event-details">
                <div class="event-title">Pick Up of Bride (Kutoa Bride)</div>
                <div class="event-description">Groom's team leaves for church • Guests arrival and settle</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">9:00 - 10:00 AM</div>
              <div class="event-details">
                <div class="event-title">Bridal Convoy Arrival</div>
                <div class="event-description">Arrival at the church</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">10:00 - 11:30 AM</div>
              <div class="event-details">
                <div class="event-title">Bridal Procession & Church Service</div>
                <div class="event-description">The Wedding Ceremony</div>
              </div>
            </div>
          </div>

          <!-- Part 2: Church Wedding Programme -->
          <div class="schedule-section" style="page-break-inside: avoid;">
            <h3 class="section-title">Part 2: Church Wedding Programme</h3>
            <p style="font-style: italic; color: #5d4037; margin-bottom: 5px;">For the Holy Matrimony of</p>
            <p style="font-weight: 600; color: #2e7d32; font-size: 18px; margin-bottom: 10px;">MARGARET KOORI & MOSES MURITHI KAREMA</p>
            <p class="event-location">ACK St. Michael and All Angels, Ruiru</p>
            <p style="font-size: 13px; color: #5d4037; margin-bottom: 15px;">Officiating Minister: Revd. Fredrick Wambua</p>
            
            <div style="background: #f5f5f5; padding: 12px; border-radius: 6px; margin-bottom: 20px;">
              <p style="font-weight: 600; color: #2e7d32; margin-bottom: 8px;">Bridal Team</p>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 5px; font-size: 13px; color: #5d4037;">
                <span>Bride: Margaret Koori</span>
                <span>Groom: Moses Murithi Karema</span>
                <span>Best Man: George Anthony Njau</span>
                <span>Best Maid: Agnes Mumbi Muiruri</span>
              </div>
            </div>

            <p style="font-weight: 600; color: #d4af37; margin-bottom: 15px; border-bottom: 1px solid #e8f5e9; padding-bottom: 8px;">Order of Service</p>

            <p style="font-weight: 600; color: #2e7d32; margin: 15px 0 10px 0;">Processional</p>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Entry of the Bridal Party</div></div></div>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Entry of the Bride</div></div></div>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Processional Hymn</div></div></div>

            <p style="font-weight: 600; color: #2e7d32; margin: 15px 0 10px 0;">Introduction & Welcome</p>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Opening Sentence</div></div></div>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Introduction of the Couple</div></div></div>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Declaration of Purpose</div></div></div>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Opening Hymn</div><div class="event-description">Jamhuri Choir</div></div></div>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Opening Prayer</div><div class="event-description">By the Officiating Minister</div></div></div>

            <p style="font-weight: 600; color: #2e7d32; margin: 15px 0 10px 0;">The Marriage Rite</p>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">The Charge</div></div></div>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">The Declarations</div></div></div>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Exchange of Vows</div></div></div>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Exchange of Rings</div><div class="event-description">Rockin' Years - Celine Dion (during certificate signing)</div></div></div>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Pronouncement of Marriage</div></div></div>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Blessing of the Couple</div></div></div>

            <p style="font-weight: 600; color: #2e7d32; margin: 15px 0 10px 0;">Scripture Readings</p>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Old Testament: Genesis 2:18–24</div><div class="event-description">Reader: Andrew Mureithi</div></div></div>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">New Testament: 1 Corinthians 13:1–13</div><div class="event-description">Reader: Collins Mureithi</div></div></div>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Gospel Reading: John 2:1–11</div><div class="event-description">Reader: Twila Kuria</div></div></div>

            <p style="font-weight: 600; color: #2e7d32; margin: 15px 0 10px 0;">Wedding Sermon</p>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Sermon</div><div class="event-description">By Revd. Fredrick Wambua</div></div></div>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Offering</div></div></div>

            <p style="font-weight: 600; color: #2e7d32; margin: 15px 0 10px 0;">Signing & Presentation</p>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Signing of the Marriage Register</div><div class="event-description">Hymn: We wi wakwa na nie waku</div></div></div>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Presentation of the Married Couple</div><div class="event-description">All Sing: We wi nyama… — Mr. & Mrs. Moses Murithi Karema</div></div></div>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Prayers for the Couple & Their Families</div></div></div>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Thanksgiving Hymn</div><div class="event-description">Jamhuri Choir</div></div></div>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Notices & Appreciations</div></div></div>

            <p style="font-weight: 600; color: #2e7d32; margin: 15px 0 10px 0;">Recessional</p>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">All Sing: Ishara by Alice Kimani</div></div></div>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Exit of the Newly Married Couple</div></div></div>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Exit of the Bridal Party</div></div></div>
            <div class="event"><div class="time"></div><div class="event-details"><div class="event-title">Exit of the Congregation</div></div></div>

            <div style="background: linear-gradient(135deg, #f9f5f0, #e8f5e9); padding: 15px; border-radius: 8px; margin-top: 20px; text-align: center; border: 1px solid #d4af37;">
              <p style="font-weight: 600; color: #2e7d32; margin-bottom: 8px;">Blessing</p>
              <p style="font-style: italic; color: #5d4037; font-size: 14px; line-height: 1.6;">
                "May the Lord bless you and keep you;<br/>
                May His face shine upon you and be gracious to you;<br/>
                May He lift up His countenance upon you and give you peace."<br/>
                <span style="font-size: 12px; color: #d4af37;">— Numbers 6:24–26</span>
              </p>
            </div>
          </div>

          <!-- Part 3: Photo Session -->
          <div class="schedule-section">
            <h3 class="section-title">Part 3: Photo Session & Transition</h3>
            <p class="event-location">11:30 AM – 2:00 PM</p>
            
            <div class="event">
              <div class="time">11:30 AM - 12:00 PM</div>
              <div class="event-details">
                <div class="event-title">Photo Session at Church Steps</div>
                <div class="event-description">Official photos at the church</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">12:00 - 12:30 PM</div>
              <div class="event-details">
                <div class="event-title">Photo Session at Windsor</div>
                <div class="event-description">Bridal party photos at scenic location</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">12:00 PM</div>
              <div class="event-details">
                <div class="event-title">Guests Proceed to Reception</div>
                <div class="event-description">Guests head to Homeland Leisure Garden</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">12:30 - 2:00 PM</div>
              <div class="event-details">
                <div class="event-title">Lunch is Served</div>
                <div class="event-description">Entertainment with Mugithi music</div>
              </div>
            </div>
          </div>

          <!-- Part 4: The Reception -->
          <div class="schedule-section">
            <h3 class="section-title">Part 4: The Reception</h3>
            <p class="event-location">Homeland Leisure Garden</p>
            
            <div class="event">
              <div class="time">2:00 - 3:00 PM</div>
              <div class="event-details">
                <div class="event-title">Bridal Team's Grand Arrival</div>
                <div class="event-description">Brief photo session • Entertainment</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">3:00 - 4:00 PM</div>
              <div class="event-details">
                <div class="event-title">Speeches</div>
                <div class="event-description">Speeches from bride and groom parents • Presentation of gifts</div>
              </div>
            </div>
            
            <div class="event">
              <div class="time">4:00 - 5:00 PM</div>
              <div class="event-details">
                <div class="event-title">Cake Cutting & Champagne Toss</div>
                <div class="event-description">Vote of Thanks - Rachel Mukuna • Bouquet Toss</div>
              </div>
            </div>
            
            <div style="background: linear-gradient(135deg, #f9f5f0, #e8f5e9); padding: 15px; border-radius: 8px; margin-top: 20px; text-align: center; border: 1px solid #d4af37;">
              <p style="font-style: italic; color: #5d4037; font-size: 14px; line-height: 1.6;">
                "Therefore what God has joined together, let no one separate."
              </p>
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
              { time: '6:00 - 7:00 AM', title: 'Glam & Dressing', description: 'BTS & Bride and Groom Promises • Car Decoration • Breakfast', icon: Sparkles },
              { time: '7:00 - 8:00 AM', title: 'Dressing & Photo Session', description: 'Final touches and \'Getting Ready\' photography', icon: Camera },
              { time: '8:00 - 9:00 AM', title: 'Pick Up of Bride (Kutoa Bride)', description: 'Groom\'s team leaves for church • Guests arrival and settle', icon: Car },
              { time: '9:00 - 10:00 AM', title: 'Bridal Convoy Arrival', description: 'Arrival at the church', icon: Car },
              { time: '10:00 - 11:30 AM', title: 'Bridal Procession & Church Service', description: 'The Wedding Ceremony', icon: Church },
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

        {/* Part 2: Church Wedding Programme */}
        <div className="mb-10 print:mb-8 bg-gradient-to-r from-emerald-50 to-white p-6 rounded-lg border-l-4 border-emerald-500">
          <div className="flex items-center mb-4">
            <Church className="h-6 w-6 text-emerald-600 mr-2" />
            <h3 className="text-xl font-semibold text-emerald-800">Part 2: Church Wedding Programme</h3>
          </div>
          <p className="text-sm text-gray-600 italic mb-1">For the Holy Matrimony of</p>
          <p className="font-semibold text-emerald-800 text-lg mb-2">MARGARET KOORI & MOSES MURITHI KAREMA</p>
          <p className="text-emerald-700 mb-1">ACK St. Michael and All Angels, Ruiru</p>
          <p className="text-sm text-gray-600 mb-4">Officiating Minister: Revd. Fredrick Wambua</p>
          
          {/* Bridal Team */}
          <div className="bg-amber-50 p-4 rounded-lg mb-6">
            <p className="font-semibold text-emerald-800 mb-2">Bridal Team</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
              <span><span className="font-medium">Bride:</span> Margaret Koori</span>
              <span><span className="font-medium">Groom:</span> Moses Murithi Karema</span>
              <span><span className="font-medium">Best Man:</span> George Anthony Njau</span>
              <span><span className="font-medium">Best Maid:</span> Agnes Mumbi Muiruri</span>
            </div>
          </div>

          {/* Order of Service */}
          <p className="font-semibold text-amber-700 mb-4 pb-2 border-b border-emerald-100">Order of Service</p>
          
          <div className="space-y-4">
            {/* Processional */}
            <div>
              <p className="font-semibold text-emerald-700 mb-2 flex items-center gap-2">
                <Users className="h-4 w-4" /> Processional
              </p>
              <div className="pl-6 space-y-1 text-sm text-gray-700">
                <p>• Entry of the Bridal Party</p>
                <p>• Entry of the Bride</p>
                <p>• Processional Hymn</p>
              </div>
            </div>

            {/* Introduction & Welcome */}
            <div>
              <p className="font-semibold text-emerald-700 mb-2 flex items-center gap-2">
                <Mic2 className="h-4 w-4" /> Introduction & Welcome
              </p>
              <div className="pl-6 space-y-1 text-sm text-gray-700">
                <p>• Opening Sentence</p>
                <p>• Introduction of the Couple</p>
                <p>• Declaration of Purpose</p>
                <p>• Opening Hymn <span className="text-amber-600 italic">— Jamhuri Choir</span></p>
                <p>• Opening Prayer <span className="text-amber-600 italic">— By the Officiating Minister</span></p>
              </div>
            </div>

            {/* The Marriage Rite */}
            <div>
              <p className="font-semibold text-emerald-700 mb-2 flex items-center gap-2">
                <Heart className="h-4 w-4" /> The Marriage Rite
              </p>
              <div className="pl-6 space-y-1 text-sm text-gray-700">
                <p>• The Charge</p>
                <p>• The Declarations</p>
                <p>• Exchange of Vows</p>
                <p>• Exchange of Rings <span className="text-amber-600 italic">— Rockin' Years - Celine Dion (cert signing)</span></p>
                <p>• Pronouncement of Marriage</p>
                <p>• Blessing of the Couple</p>
              </div>
            </div>

            {/* Scripture Readings */}
            <div>
              <p className="font-semibold text-emerald-700 mb-2 flex items-center gap-2">
                <Church className="h-4 w-4" /> Scripture Readings
              </p>
              <div className="pl-6 space-y-1 text-sm text-gray-700">
                <p>• Old Testament: Genesis 2:18–24 <span className="text-amber-600 italic">— Andrew Mureithi</span></p>
                <p>• New Testament: 1 Corinthians 13:1–13 <span className="text-amber-600 italic">— Collins Mureithi</span></p>
                <p>• Gospel Reading: John 2:1–11 <span className="text-amber-600 italic">— Twila Kuria</span></p>
              </div>
            </div>

            {/* Wedding Sermon */}
            <div>
              <p className="font-semibold text-emerald-700 mb-2 flex items-center gap-2">
                <Mic2 className="h-4 w-4" /> Wedding Sermon
              </p>
              <div className="pl-6 space-y-1 text-sm text-gray-700">
                <p>• Sermon <span className="text-amber-600 italic">— By Revd. Fredrick Wambua</span></p>
                <p>• Offering</p>
              </div>
            </div>

            {/* Signing & Presentation */}
            <div>
              <p className="font-semibold text-emerald-700 mb-2 flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> Signing & Presentation
              </p>
              <div className="pl-6 space-y-1 text-sm text-gray-700">
                <p>• Signing of the Marriage Register <span className="text-amber-600 italic">— Hymn: We wi wakwa na nie waku</span></p>
                <p>• Presentation of the Married Couple <span className="text-amber-600 italic">— All Sing: We wi nyama…</span></p>
                <p className="font-medium text-emerald-800 pl-4">Mr. & Mrs. Moses Murithi Karema</p>
                <p>• Prayers for the Couple & Their Families</p>
                <p>• Thanksgiving Hymn <span className="text-amber-600 italic">— Jamhuri Choir</span></p>
                <p>• Notices & Appreciations</p>
              </div>
            </div>

            {/* Recessional */}
            <div>
              <p className="font-semibold text-emerald-700 mb-2 flex items-center gap-2">
                <Music className="h-4 w-4" /> Recessional
              </p>
              <div className="pl-6 space-y-1 text-sm text-gray-700">
                <p>• All Sing: Ishara by Alice Kimani</p>
                <p>• Exit of the Newly Married Couple</p>
                <p>• Exit of the Bridal Party</p>
                <p>• Exit of the Congregation</p>
              </div>
            </div>
          </div>

          {/* Blessing */}
          <div className="mt-6 bg-gradient-to-r from-amber-50 to-emerald-50 p-4 rounded-lg border border-amber-200 text-center">
            <p className="font-semibold text-emerald-800 mb-2">Blessing</p>
            <p className="text-sm text-gray-700 italic leading-relaxed">
              "May the Lord bless you and keep you;<br/>
              May His face shine upon you and be gracious to you;<br/>
              May He lift up His countenance upon you and give you peace."
            </p>
            <p className="text-xs text-amber-700 mt-2">— Numbers 6:24–26</p>
          </div>
        </div>

        {/* Part 3: Photo Session & Transition */}
        <div className="mb-10 print:mb-8 bg-gradient-to-r from-amber-50 to-white p-6 rounded-lg border-l-4 border-amber-400">
          <div className="flex items-center mb-4">
            <Camera className="h-6 w-6 text-amber-600 mr-2" />
            <h3 className="text-xl font-semibold text-amber-800">Part 3: Photo Session & Transition</h3>
          </div>
          <p className="text-amber-700 mb-4">11:30 AM – 2:00 PM</p>
          
          <div className="space-y-6 pl-2 border-l-2 border-amber-100 ml-3">
            {[
              { time: '11:30 AM - 12:00 PM', title: 'Photo Session at Church Steps', description: 'Official photos at the church', icon: Camera },
              { time: '12:00 - 12:30 PM', title: 'Photo Session at Windsor', description: 'Bridal party photos at scenic location', icon: Camera },
              { time: '12:00 PM', title: 'Guests Proceed to Reception', description: 'Guests head to Homeland Leisure Garden', icon: Users },
              { time: '12:30 - 2:00 PM', title: 'Lunch is Served', description: 'Entertainment with Mugithi music', icon: Utensils },
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
          <p className="text-emerald-700 mb-4">Homeland Leisure Garden</p>
          
          <div className="space-y-6 pl-2 border-l-2 border-emerald-100 ml-3">
            {[
              { time: '2:00 - 3:00 PM', title: 'Bridal Team\'s Grand Arrival', description: 'Brief photo session • Entertainment', icon: PartyPopper },
              { time: '3:00 - 4:00 PM', title: 'Speeches', description: 'Speeches from bride and groom parents • Presentation of gifts', icon: Mic2 },
              { time: '4:00 - 5:00 PM', title: 'Cake Cutting & Champagne Toss', description: 'Vote of Thanks - Rachel Mukuna • Bouquet Toss', icon: Cake },
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
          
          {/* Scripture Quote */}
          <div className="mt-6 bg-gradient-to-r from-amber-50 to-emerald-50 p-4 rounded-lg border border-amber-200 text-center">
            <p className="text-sm text-gray-700 italic leading-relaxed">
              "Therefore what God has joined together, let no one separate."
            </p>
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