// src/layout.tsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  Home as HomeIcon, FileText, Network, ShoppingCart, Box, Cpu,
  Smartphone, Cloud, FlaskConical, Leaf, Calendar,
  Lightbulb, Award, BookOpen, FileStack, Users, Menu, X
} from "lucide-react";
import { Button } from "@/components/ui/button";

// 🔄 Smooth page transitions
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

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

  const prefersReducedMotion = useReducedMotion();

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

  // ⬆️ Scroll to top on route change (respect reduced motion)
  useEffect(() => {
    if (prefersReducedMotion) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, prefersReducedMotion]);

  // Framer Motion variants for page transitions
  const variants = {
    initial: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 },
    animate: prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    exit: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 },
  };

  // ✅ Use cubic-bezier tuple for ease (or omit ease entirely)
  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.25, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      {/* Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
        } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
      >
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
            </div>

            {/* Mobile button */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
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

      {/* Main with animated route transitions */}
      <main className="pt-16">
        {/* ✅ Prevent the first route from animating in again */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={transition}
            className="will-change-transform"
          >
            {children ?? <Outlet />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-[#0E3A5D] text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Project blurb */}
            <div>
              <h3 className="text-xl font-bold mb-3">Leak Detector Project</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                A renter-friendly, non-invasive leak detection system using RMS-based anomaly detection.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-[#2CB1A1]">Home</Link></li>
                <li><Link to="/project-background" className="hover:text-[#2CB1A1]">Project Background</Link></li>
                <li><Link to="/system-diagram" className="hover:text-[#2CB1A1]">System Diagram</Link></li>
                <li><Link to="/parts-list" className="hover:text-[#2CB1A1]">Parts List</Link></li>
                <li><Link to="/clamp-enclosure" className="hover:text-[#2CB1A1]">Clamp &amp; Enclosure</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-3">Contact</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>Georgia Southern University</li>
                <li>Senior Design Project Fall 2025</li>
                <li className="mt-3">Team:</li>
                <li><a className="hover:text-[#2CB1A1]" href="mailto:dc22627@georgiasouthern.edu">Dustin Conger</a></li>
                <li><a className="hover:text-[#2CB1A1]" href="mailto:ow01446@georgiasouthern.edu">Owen Warrington</a></li>
                <li><a className="hover:text-[#2CB1A1]" href="mailto:sh31183@georgiasouthern.edu">Samuel Holder</a></li>
                <li><a className="hover:text-[#2CB1A1]" href="mailto:jw48679@georgiasouthern.edu">Jarred Waters</a></li>
              </ul>
            </div>
          </div>

          <hr className="border-white/10 mt-8" />

          <div className="py-6 text-center text-sm text-gray-400">
            © 2025 Leak Detector Team. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
