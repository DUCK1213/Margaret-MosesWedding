import { useMemo, useRef, useState } from "react";
import { 
  ShieldCheck, 
  PenSquare, 
  Download, 
  Printer, 
  Sparkles, 
  Users, 
  UserCheck, 
  Armchair as Chair, 
  FileText, 
  Coffee, 
  Gift, 
  Smile, 
  Truck, 
  ParkingCircle, 
  Car as CarIcon, 
  Settings, 
  Award, 
  Star, 
  Calendar,
  ChevronDown,
  ChevronUp,
  Shield,
  type LucideIcon
} from "lucide-react";

// Fallback icon component in case any icon is missing
const FallbackIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="9" y1="3" x2="9" y2="21"></line>
  </svg>
);
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const UsherTag = () => {
  const tagRef = useRef<HTMLDivElement>(null);
  const [usherName, setUsherName] = useState("");
  const [expandedDivisions, setExpandedDivisions] = useState<Set<string>>(new Set());

  const crewRoles = useMemo(
    () => [
      // Guest Services Division
      {
        id: "guest_services_lead",
        title: "Guest Services Lead",
        summary: "Oversee all guest services operations and team coordination",
        badge: "Guest Services",
        division: "guest_services",
        icon: Users,
        color: "#3B82F6"
      },
      {
        id: "usher_team_lead",
        title: "Usher Team Lead",
        summary: "Lead usher team and manage guest flow",
        badge: "Guest Services",
        division: "guest_services",
        icon: UserCheck,
        color: "#3B82F6"
      },
      {
        id: "seating_coordinator",
        title: "Seating Coordinator",
        summary: "Manage seating arrangements and assist with guest placement",
        badge: "Guest Services",
        division: "guest_services",
        icon: Chair,
        color: "#3B82F6"
      },
      {
        id: "program_distributor",
        title: "Program Distributor",
        summary: "Hand out programs and assist late arrivals",
        badge: "Guest Services",
        division: "guest_services",
        icon: FileText,
        color: "#3B82F6"
      },

      // Hospitality Division
      {
        id: "hospitality_lead",
        title: "Hospitality Lead",
        summary: "Oversee all hospitality services and team",
        badge: "Hospitality",
        division: "hospitality",
        icon: Coffee,
        color: "#10B981"
      },
      {
        id: "beverage_attendant",
        title: "Beverage Attendant",
        summary: "Serve drinks and manage beverage stations",
        badge: "Hospitality",
        division: "hospitality",
        icon: Coffee,
        color: "#10B981"
      },
      {
        id: "gift_attendant",
        title: "Gift Attendant",
        summary: "Manage gift table and assist with gift transportation",
        badge: "Hospitality",
        division: "hospitality",
        icon: Gift,
        color: "#10B981"
      },
      {
        id: "reception_host",
        title: "Reception Host",
        summary: "Welcome guests and direct them to activities",
        badge: "Hospitality",
        division: "hospitality",
        icon: Smile,
        color: "#10B981"
      },

      // Logistics Division
      {
        id: "logistics_lead",
        title: "Logistics Lead",
        summary: "Oversee all event logistics and operations",
        badge: "Logistics",
        division: "logistics",
        icon: Truck,
        color: "#8B5CF6"
      },
      {
        id: "parking_attendant",
        title: "Parking Attendant",
        summary: "Direct parking and manage vehicle flow",
        badge: "Logistics",
        division: "logistics",
        icon: ParkingCircle,
        color: "#8B5CF6"
      },
      {
        id: "transport_coordinator",
        title: "Transport Coordinator",
        summary: "Assist with guest transportation needs",
        badge: "Logistics",
        division: "logistics",
        icon: CarIcon,
        color: "#8B5CF6"
      },
      {
        id: "setup_crew",
        title: "Setup Crew",
        summary: "Assist with venue setup and breakdown",
        badge: "Logistics",
        division: "logistics",
        icon: Settings,
        color: "#8B5CF6"
      },

      // Protocol Division
      {
        id: "protocol_lead",
        title: "Protocol Lead",
        summary: "Oversee VIP coordination and ceremonial aspects",
        badge: "Protocol",
        division: "protocol",
        icon: Award,
        color: "#EC4899"
      },
      {
        id: "vip_host",
        title: "VIP Host",
        summary: "Attend to special guests and family members",
        badge: "Protocol",
        division: "protocol",
        icon: Star,
        color: "#EC4899"
      },
      {
        id: "family_liaison",
        title: "Family Liaison",
        summary: "Assist immediate family members with needs",
        badge: "Protocol",
        division: "protocol",
        icon: Users,
        color: "#EC4899"
      },
      {
        id: "ceremony_coordinator",
        title: "Ceremony Coordinator",
        summary: "Ensure smooth ceremony proceedings",
        badge: "Protocol",
        division: "protocol",
        icon: Calendar,
        color: "#EC4899"
      },
      
      // Security Division
      {
        id: "security_lead",
        title: "Security Lead",
        summary: "Oversee all security operations and team coordination",
        badge: "Security",
        division: "security",
        icon: Shield,
        color: "#F59E0B"
      },
      {
        id: "access_control",
        title: "Access Control",
        summary: "Manage entry points and verify guest credentials",
        badge: "Security",
        division: "security",
        icon: UserCheck,
        color: "#F59E0B"
      },
      {
        id: "crowd_control",
        title: "Crowd Control",
        summary: "Monitor guest flow and manage queues",
        badge: "Security",
        division: "security",
        icon: Users,
        color: "#F59E0B"
      },
      {
        id: "parking_security",
        title: "Parking Security",
        summary: "Monitor parking areas and vehicle safety",
        badge: "Security",
        division: "security",
        icon: ParkingCircle,
        color: "#F59E0B"
      },
      {
        id: "emergency_responder",
        title: "Emergency Responder",
        summary: "Handle medical or security emergencies",
        badge: "Security",
        division: "security",
        icon: ShieldCheck,
        color: "#F59E0B"
      },
    ],
    [],
  );

  const divisions = useMemo(() => {
    const uniqueDivisions = new Set(crewRoles.map(role => role.division));
    return Array.from(uniqueDivisions).map(divisionId => {
      const divisionRoles = crewRoles.filter(role => role.division === divisionId);
      return {
        id: divisionId,
        name: divisionRoles[0]?.badge || 'Uncategorized',
        color: divisionRoles[0]?.color || '#6B7280',
        icon: divisionRoles[0]?.icon || Users,
        roles: divisionRoles
      };
    });
  }, [crewRoles]);

  const [selectedRole, setSelectedRole] = useState(crewRoles[0].id);
  const activeRole = crewRoles.find((role) => role.id === selectedRole) ?? crewRoles[0];

  const toggleDivision = (divisionId: string) => {
    setExpandedDivisions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(divisionId)) {
        newSet.delete(divisionId);
      } else {
        newSet.add(divisionId);
      }
      return newSet;
    });
  };

  const openPrintWindow = (title: string) => {
    if (!tagRef.current) {
      alert("The usher tag preview is still loading. Please try again in a moment.");
      return;
    }

    const styles = Array.from(document.querySelectorAll("style, link[rel='stylesheet']"))
      .map((node) => node.outerHTML)
      .join("");

    const printWindow = window.open("", "_blank", "width=900,height=700");
    if (!printWindow) {
      alert("Please allow pop-ups in your browser to download the usher tag.");
      return;
    }

    printWindow.document.write(`
      <html>
        <head>
          <title>${title}</title>
          ${styles}
          <style>
            @page { size: A6 portrait; margin: 0; }
            body {
              margin: 0;
              padding: 20px;
              background: #0f2a20;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            #usher-tag-card {
              margin: 0 auto;
            }
          </style>
        </head>
        <body>
          ${tagRef.current.outerHTML}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const handleDownload = () => openPrintWindow("Usher Tag");
  const handlePrint = () => openPrintWindow("Usher Tag");

  return (
    <section id="usher-tag" className="relative py-16 bg-gradient-to-b from-emerald-900 to-emerald-800 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full border border-gold/30 animate-pulse-soft" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full border border-gold/20 animate-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-4 px-4">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-gold/20 rounded-full px-6 py-2 text-gold font-serif text-sm tracking-[0.3em] uppercase">
            <ShieldCheck className="w-4 h-4" />
            Volunteer Team Portal
          </div>
          <h2 className="font-script text-4xl md:text-5xl text-gold">Digital Volunteer Tags</h2>
          <p className="font-serif text-cream/80 max-w-3xl mx-auto">
            Personalize and download professional lanyard tags for all volunteer teams. 
            Select a role, enter the volunteer's name, and generate a ready-to-print badge 
            that matches our wedding theme and clearly identifies each team member's responsibilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr,400px] gap-8 items-start px-4">
          <div className="bg-white/5 border border-gold/20 rounded-3xl p-6 backdrop-blur-sm shadow-2xl">
            <div className="space-y-6">
              <div>
                <Label
                  htmlFor="volunteer-name"
                  className="font-serif uppercase tracking-[0.4em] text-xs text-gold/90 flex items-center gap-2"
                >
                  <PenSquare className="w-4 h-4 text-gold" />
                  Volunteer Name
                </Label>
                <Input
                  id="volunteer-name"
                  value={usherName}
                  onChange={(event) => setUsherName(event.target.value)}
                  placeholder="Enter volunteer's full name"
                  className="mt-2 bg-white/90 border-gold/40 text-emerald-900 font-serif placeholder:text-emerald-500/60 focus-visible:ring-gold"
                />
                <p className="text-cream/70 text-xs font-serif mt-2">
                  The name will appear exactly as typed on the badge.
                </p>
              </div>

              <div className="space-y-4">
                <Label className="font-serif uppercase tracking-[0.4em] text-xs text-gold/90 block">
                  Select Role
                </Label>
                
                <div className="space-y-3">
                  {divisions.map((division) => {
                    const isExpanded = expandedDivisions.has(division.id);
                    const Icon = division.icon;
                    
                    return (
                      <div 
                        key={division.id}
                        className="rounded-xl overflow-hidden border border-gold/20"
                        style={{ borderColor: `${division.color}40` }}
                      >
                        <button
                          onClick={() => toggleDivision(division.id)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
                          style={{ backgroundColor: `${division.color}10` }}
                        >
                          <div className="flex items-center gap-3">
                            <div 
                              className="p-2 rounded-lg"
                              style={{ backgroundColor: `${division.color}20` }}
                            >
                              <Icon className="w-5 h-5" style={{ color: division.color }} />
                            </div>
                            <div>
                              <h3 className="font-serif text-lg" style={{ color: division.color }}>
                                {division.name} Team
                              </h3>
                              <p className="text-xs text-cream/70">
                                {division.roles.length} role{division.roles.length !== 1 ? 's' : ''} available
                              </p>
                            </div>
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-gold/60" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gold/60" />
                          )}
                        </button>
                        
                        {isExpanded && (
                          <div className="p-3 space-y-2 bg-white/5">
                            <RadioGroup
                              value={selectedRole}
                              onValueChange={setSelectedRole}
                              className="space-y-2"
                            >
                              {division.roles.map((role) => {
                                const RoleIcon = role.icon;
                                return (
                                  <label
                                    key={role.id}
                                    htmlFor={`role-${role.id}`}
                                    className={cn(
                                      "flex items-start gap-3 rounded-xl p-3 cursor-pointer transition-colors",
                                      selectedRole === role.id 
                                        ? 'bg-white/10 border border-gold/30' 
                                        : 'hover:bg-white/5 border border-transparent'
                                    )}
                                  >
                                    <div 
                                      className="p-2 rounded-lg mt-0.5"
                                      style={{ backgroundColor: `${role.color}20` }}
                                    >
                                      <RoleIcon className="w-4 h-4" style={{ color: role.color }} />
                                    </div>
                                    <div className="flex-1">
                                      <p className="font-serif text-sm font-medium text-white">
                                        {role.title}
                                      </p>
                                      <p className="text-xs text-cream/70 mt-0.5">
                                        {role.summary}
                                      </p>
                                    </div>
                                    <RadioGroupItem
                                      id={`role-${role.id}`}
                                      value={role.id}
                                      className="mt-1 border-gold text-gold data-[state=checked]:bg-gold data-[state=checked]:text-emerald"
                                    />
                                  </label>
                                );
                              })}
                            </RadioGroup>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-gold/10">
              <div className="grid sm:grid-cols-2 gap-4">
                <Button 
                  onClick={handleDownload} 
                  className="bg-gold hover:bg-gold/90 text-emerald-900 font-serif text-base gap-2 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download Tag
                </Button>
                <Button
                  onClick={handlePrint}
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10 font-serif text-base gap-2 transition-all"
                >
                  <Printer className="w-4 h-4" />
                  Print Tag
                </Button>
              </div>

              <div className="mt-6 bg-emerald-900/50 rounded-2xl border border-gold/20 p-4 text-cream/80 text-sm font-serif space-y-2">
                <p className="flex items-center gap-2 text-gold font-medium">
                  <Sparkles className="w-4 h-4" />
                  Printing Instructions
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Use A6 (105 × 148mm) cardstock for best results</li>
                  <li>• Set print scale to 100% (do not fit to page)</li>
                  <li>• Laminate for durability if needed</li>
                  <li>• Punch hole at the top center for lanyard</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="sticky top-6 flex flex-col items-center">
            <div
              ref={tagRef}
              id="usher-tag-card"
              className="relative w-[88mm] h-[140mm] bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] border-2 border-gold/40 overflow-hidden print:shadow-none transition-all duration-300 hover:shadow-[0_25px_80px_rgba(0,0,0,0.4)]"
            >
              {/* Lanyard hole */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-2 border-gold/30 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                <div className="w-10 h-2.5 rounded-full bg-gold/50" />
              </div>
              
              {/* Main card content */}
              <div className="absolute inset-x-6 inset-y-8 bg-white/95 rounded-[22px] border border-gold/30 flex flex-col items-center justify-between px-6 py-8 text-center overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full" style={{ backgroundColor: `${activeRole.color}10` }} />
                <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full" style={{ backgroundColor: `${activeRole.color}05` }} />
                
                {/* Header */}
                <div className="relative z-10">
                  <p className="font-serif text-xs uppercase tracking-[0.4em] text-emerald-700/80">Margaret & Moses</p>
                  <h3 className="font-script text-3xl text-emerald-900 mt-1">Wedding</h3>
                </div>

                {/* Main content */}
                <div className="relative z-10 space-y-3 w-full">
                  <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border" style={{ 
                    backgroundColor: `${activeRole.color}10`,
                    borderColor: `${activeRole.color}30`
                  }}>
                    <p className="font-serif text-xs tracking-[0.3em] uppercase" style={{ color: activeRole.color }}>
                      {activeRole.badge.toUpperCase()}
                    </p>
                  </div>
                  
                  <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gold/50 to-transparent my-2" />
                  
                  <div className="space-y-1">
                    <p className="font-serif text-2xl font-medium text-emerald-900">
                      {usherName.trim() || "Volunteer Name"}
                    </p>
                    <p className="text-emerald-700 text-sm">{activeRole.title}</p>
                  </div>
                  
                  <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-gold/30 to-transparent my-2" />
                  
                  <div className="flex items-center justify-center gap-2 text-emerald-700/80 text-[10px] font-serif uppercase tracking-[0.2em] mt-4">
                    <ShieldCheck className="w-3 h-3" style={{ color: activeRole.color }} />
                    <span>Authorized Personnel</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="relative z-10 space-y-1">
                  <p className="text-[10px] font-serif text-emerald-700/70 tracking-[0.3em] uppercase">
                    December 12, 2025
                  </p>
                  <p className="text-[10px] font-serif text-emerald-700/70 tracking-[0.2em] uppercase">
                    Ruiru, Kenya
                  </p>
                </div>
              </div>
            </div>
            
            <p className="mt-4 text-center text-sm text-cream/70 font-serif max-w-xs">
              Preview of the volunteer badge. The downloaded version will be high resolution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsherTag;
