import React, { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  Home as HomeIcon, FileText, Network, ShoppingCart, Box, Cpu,
  Smartphone, Cloud, FlaskConical, Leaf, Calendar,
  Lightbulb, Award, BookOpen, FileStack, Users, Menu, X, Search as SearchIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchDialog, { useSearchHotkeys } from "@/components//ui/searchdialog";

const navigationItems = [
  { title: "Home", url: createPageUrl("Home"), icon: HomeIcon },
  { title: "Project Background", url: createPageUrl("ProjectBackground"), icon: FileText },
  { title: "System Diagram", url: createPageUrl("SystemDiagram"), icon: Network },
  { title: "Parts List", url: createPageUrl("PartsList"), icon: ShoppingCart },
  { title: "Clamp & Enclosure", url: createPageUrl("ClampEnclosure"), icon: Box },
  { title: "Firmware", url: createPageUrl("Firmware"), icon: Cpu },
  { title: "Mobile App", url: createPageUrl("MobileApp"), icon: Smartphone },
  { title: "Cloud & Data", url: createPageUrl("CloudData"), icon: Cloud },
  { title: "Testing & Results", url: createPageUrl("TestingResults"), icon: FlaskConical },
  { title: "Sustainability", url: createPageUrl("Sustainability"), icon: Leaf },
  { title: "Timeline", url: createPageUrl("Timeline"), icon: Calendar },
  { title: "Future Work", url: createPageUrl("FutureWork"), icon: Lightbulb },
  { title: "Professional Components", url: createPageUrl("ProfessionalComponents"), icon: Award },
  { title: "Lessons Learned", url: createPageUrl("LessonsLearned"), icon: BookOpen },
  { title: "Documentation", url: createPageUrl("Documentation"), icon: FileStack },
  { title: "Team & Contact", url: createPageUrl("TeamContact"), icon: Users },
];

export default function Layout({ children }: { children?: React.ReactNode }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [searchOpen, setSearchOpen] = useState(false);
  useSearchHotkeys(() => setSearchOpen(true));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      setHidden(currentScrollY > lastScrollY && currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => { setMobileMenuOpen(false); }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      {/* Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      } ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] flex items-center justify-center group-hover:scale-105 transition">
                <HomeIcon className="w-5 h-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-[#0E3A5D]">Leak Detector</div>
                <div className="text-xs text-gray-500">Renter-Friendly</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navigationItems.slice(0, 6).map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.url;
                return (
                  <Link
                    key={item.title}
                    to={item.url}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive ? "bg-[#0E3A5D] text-white" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden xl:inline">{item.title}</span>
                  </Link>
                );
              })}

              {/* More dropdown (unchanged) */}
              <div className="relative group">
                <Button variant="ghost" className="text-sm font-medium text-gray-700 hover:bg-gray-100">
                  More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
                <div className="absolute top-full right-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  {navigationItems.slice(6).map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.url;
                    return (
                      <Link
                        key={item.title}
                        to={item.url}
                        className={`flex items-center gap-3 px-4 py-2 text-sm font-medium transition-colors ${
                          isActive ? "bg-[#0E3A5D] text-white" : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Search button */}
              <Button
                variant="ghost"
                className="ml-1 text-gray-700 hover:bg-gray-100"
                onClick={() => setSearchOpen(true)}
                title="Search (Ctrl/⌘ + K)"
              >
                <SearchIcon className="w-4 h-4 mr-2" />
                <span className="hidden xl:inline">Search</span>
                <span className="ml-2 hidden 2xl:inline text-xs text-gray-500 border px-1.5 py-0.5 rounded">Ctrl/⌘ K</span>
              </Button>
            </div>

            {/* Mobile: search + menu */}
            <div className="lg:hidden flex items-center gap-1">
              <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)} aria-label="Search">
                <SearchIcon className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu (unchanged) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 max-h-[80vh] overflow-y-auto">
              <div className="grid gap-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.url;
                  return (
                    <Link
                      key={item.title}
                      to={item.url}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive ? "bg-[#0E3A5D] text-white" : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">{children ?? <Outlet />}</main>

      {/* Footer (unchanged) */}
      <footer className="bg-[#0E3A5D] text-white mt-20">
        {/* … your existing footer content … */}
      </footer>

      {/* Search Modal */}
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
