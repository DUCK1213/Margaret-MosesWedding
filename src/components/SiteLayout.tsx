import { Outlet } from "react-router-dom";
import HeaderNav from "@/components/HeaderNav";

const SiteLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <HeaderNav />
      <main className="pt-4 pb-16">
        <Outlet />
      </main>
    </div>
  );
};

export default SiteLayout;
