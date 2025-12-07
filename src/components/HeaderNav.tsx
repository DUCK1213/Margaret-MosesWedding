import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type NavAnchor = { label: string; href: string; type: "anchor" } | { label: string; href: string; type: "route" };

const navItems: NavAnchor[] = [
  { label: "Home", href: "#hero", type: "anchor" },
  { label: "Story", href: "#story", type: "anchor" },
  { label: "Details", href: "#details", type: "anchor" },
  { label: "Programme", href: "#programme", type: "anchor" },
  { label: "Parking", href: "#parking", type: "anchor" },
  { label: "RSVP", href: "#rsvp", type: "anchor" },
  { label: "Parking Pass", href: "/parking-pass", type: "route" },
];

const HeaderNav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNavigate = () => setOpen(false);
  const isHome = location.pathname === "/";

  const renderLink = (item: NavAnchor, className = "") => {
    if (item.type === "route") {
      return (
        <Link to={item.href} onClick={handleNavigate} className={className}>
          {item.label}
        </Link>
      );
    }

    if (!isHome) {
      return (
        <Link to={`/${item.href}`} onClick={handleNavigate} className={className}>
          {item.label}
        </Link>
      );
    }

    return (
      <a href={item.href} onClick={handleNavigate} className={className}>
        {item.label}
      </a>
    );
  };

  return (
    <header className="sticky top-0 z-30 bg-emerald/95 backdrop-blur supports-[backdrop-filter]:bg-emerald/80 border-b border-gold/20">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <Link to="/" className="flex items-center gap-2 text-cream font-script text-2xl">
          <Car className="w-6 h-6 text-gold" />
          M &amp; M Wedding
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-cream font-serif text-sm tracking-[0.2em] uppercase">
          {navItems.map((item) =>
            item.label === "Parking Pass" ? (
              <Button asChild key={item.label} className="bg-gold text-emerald font-serif tracking-[0.2em]">
                {renderLink(item)}
              </Button>
            ) : (
              <span key={item.label}>{renderLink(item, "hover:text-gold transition-colors")}</span>
            ),
          )}
        </nav>

        {/* Mobile trigger */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="border-gold text-cream hover:bg-gold/20">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-emerald text-cream border-l border-gold/20">
              <div className="space-y-6 mt-8">
                <p className="font-serif text-sm uppercase tracking-[0.3em] text-gold">
                  Navigate
                </p>
                <div className="flex flex-col gap-4 text-lg font-serif">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      {renderLink(
                        item,
                        "block py-2 border-b border-gold/20 text-cream hover:text-gold transition-colors",
                      )}
                    </div>
                  ))}
                </div>
                {location.pathname !== "/parking-pass" && (
                  <Button asChild className="w-full bg-gold text-emerald font-serif text-base">
                    <Link to="/parking-pass" onClick={handleNavigate}>
                      Download Parking Pass
                    </Link>
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
