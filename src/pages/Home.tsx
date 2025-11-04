import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText, Github, DollarSign, Zap, Battery, Wifi, AlertTriangle, CheckCircle } from "lucide-react";
import SpecCard from "../components/shared/SpecCard";
import FeatureCard from "../components/shared/FeatureCard";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";

export default function Home() {
  const specs = [
    { icon: DollarSign, label: "Prototype Cost", value: "$50" },
    { icon: Zap, label: "Install", value: "Velcro clamp + 3D box" },
    { icon: Battery, label: "Battery", value: "4400 mAh; ≥3 months target" },
    { icon: Wifi, label: "Connectivity", value: "2.4 GHz Wi-Fi" },
    { icon: AlertTriangle, label: "Detection", value: "RMS baseline + anomaly alerts" },
    { icon: CheckCircle, label: "App", value: "Android (iOS planned)" },
  ];

  const comparableProducts = [
    { feature: "Installation", ours: "Clamp-on, no plumbing mods", others: "Often requires cutting pipes" },
    { feature: "Cost", ours: "$50", others: "$250–$500+" },
    { feature: "Renter-Friendly", ours: "Yes, fully removable", others: "Usually requires landlord approval" },
    { feature: "Power", ours: "Rechargeable battery", others: "Often hardwired" },
    { feature: "Setup", ours: "5 minutes", others: "Professional installation" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0E3A5D] via-[#0E3A5D] to-[#2CB1A1] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2CB1A1] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2CB1A1] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                🎓 Senior Design Project 2025
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Clamp-On, Renter-Friendly Leak Detection
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200 mb-4">
                No Cutting, No Plumbers.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Non-invasive vibration sensing that learns a baseline and flags sustained anomalies.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#2CB1A1] hover:bg-[#2CB1A1]/90 text-white px-8 py-6 text-lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download Poster
                </Button>
                <Link to={createPageUrl("Documentation")}>
                  <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-6 text-lg backdrop-blur-sm">
                    <FileText className="w-5 h-5 mr-2" />
                    View Documentation
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/20 overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
                  alt="Leak detector device"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Specs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {specs.map((spec, index) => (
            <SpecCard
              key={index}
              icon={spec.icon}
              label={spec.label}
              value={spec.value}
              className="bg-white"
            />
          ))}
        </div>
      </section>

      {/* What is it? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="p-8 sm:p-12 border-2 border-[#2CB1A1] bg-gradient-to-br from-white to-[#2CB1A1]/5">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0E3A5D] mb-6">
                What is it?
              </h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                <p>
                  Clamp-on device uses an accelerometer and a FireBeetle ESP32. During setup it learns a baseline RMS profile of normal plumbing vibration. It samples periodically at low power, compares current RMS against baseline, and flags sustained deviations as potential leaks.
                </p>
                <p>
                  To preserve battery, it limits Wi-Fi use to brief bursts for logging and notifications to the Android app (Supabase + FCM). Hardware is intentionally simple: Velcro clamp, 3D box shaped to the pipe, brass screws; no op-amp or analog filtering; only two resistors in the signal/power path.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80"
                alt="Device components"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </Card>
      </section>

      {/* Demo Video */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white/50 rounded-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0E3A5D] mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-gray-600">
            Watch our demo video to understand how the system works
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-2xl bg-gray-200 border-2 border-gray-300 overflow-hidden shadow-xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#0E3A5D] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-gray-500">Demo Video (Placeholder)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparable Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0E3A5D] mb-4">
            Why Choose Our Solution?
          </h2>
          <p className="text-lg text-gray-600">
            Comparison with traditional leak detection products
          </p>
        </div>
        
        <Card className="overflow-hidden border-2 border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#0E3A5D] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold">Our Solution</th>
                  <th className="px-6 py-4 text-left font-semibold">Typical Products</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparableProducts.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{item.feature}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-2 text-[#2CB1A1] font-medium">
                        <CheckCircle className="w-4 h-4" />
                        {item.ours}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{item.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="p-12 bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] text-white text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Explore our documentation, download resources, or check out our code repositories
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={createPageUrl("Documentation")}>
              <Button className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-6 text-lg backdrop-blur-sm">
                <FileText className="w-5 h-5 mr-2" />
                Documentation
              </Button>
            </Link>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-6 text-lg backdrop-blur-sm">
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}