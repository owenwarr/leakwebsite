// src/pages/MobileApp.tsx
import React from "react";
import { Card } from "@/components/ui/card";
import {
  Smartphone,
  Bell,
  Battery,
  Settings,
  BarChart3,
  CheckCircle,
  Clock,
} from "lucide-react";

type Feature = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

type Screenshot = {
  title: string;
  description: string;
  image?: string; // path in /public, e.g. "/devices-dashboard.png"
};

export default function MobileApp() {
  const features: Feature[] = [
    {
      icon: Smartphone,
      title: "Device Management",
      description:
        "Claim, configure, and monitor multiple leak detectors from a single interface.",
    },
    {
      icon: Bell,
      title: "Push Notifications",
      description:
        "Real-time alerts via Firebase Cloud Messaging when anomalies are detected.",
    },
    {
      icon: BarChart3,
      title: "Event History",
      description:
        "View detailed logs of all detection events with timestamps and RMS data.",
    },
    {
      icon: Battery,
      title: "Battery Monitoring",
      description:
        "Track battery levels and receive low-battery warnings for timely recharging.",
    },
    {
      icon: Settings,
      title: "Configuration",
      description:
        "Adjust sensitivity, thresholds, and notification preferences remotely.",
    },
    {
      icon: CheckCircle,
      title: "Baseline Recalibration",
      description:
        "Trigger new baseline learning when household patterns change.",
    },
  ];

  // Update these image paths to match your actual filenames in /public
  const screenshots: Screenshot[] = [
    {
      title: "Devices Dashboard",
      description:
        "Overview of all registered devices and their status.",
      image: "/devicedashboard.jpg",
    },
    {
      title: "Add Device",
      description: "Quickly register a new device and assign it to a location.",
      image: "/adddevice.jpg",
    },
    {
      title: "Event Log",
      description:
        "Chronological list of events with severity, timestamps, and details.",
      image: "/eventlog.jpg",
    },
    {
      title: "Settings Panel",
      description:
        "Reset password.",
      image: "/settingspanel.jpg",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            Android Available • iOS Planned
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0E3A5D] mb-4">
            Mobile Application
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor your leak detectors, view analytics, and receive instant alerts—right from your phone.
          </p>
        </div>

        {/* Platform Status */}
        <section className="mb-20">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Android */}
            <Card className="p-8 border-2 border-[#2CB1A1] bg-gradient-to-br from-white to-[#2CB1A1]/5">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0E3A5D] mb-2">
                    Android
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-3">
                    <CheckCircle className="w-3 h-3" />
                    Currently Available
                  </div>
                  <p className="text-gray-600">
                    Built with Flutter for a smooth, responsive experience and wide device compatibility.
                  </p>
                </div>
              </div>
            </Card>

            {/* iOS */}
            <Card className="p-8 border-2 border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0E3A5D] mb-2">
                    iOS
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium mb-3">
                    <Clock className="w-3 h-3" />
                    Planned for Future
                  </div>
                  <p className="text-gray-600">
                    The shared Flutter codebase enables rapid deployment of a full-featured iOS app.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-12 text-center">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 border-2 border-gray-200 hover:border-[#2CB1A1] transition-all hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0E3A5D] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Authentication */}
        <section className="mb-20">
          <Card className="p-8 border-2 border-[#2CB1A1]">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-[#0E3A5D] mb-4">
                  Secure Authentication
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  User authentication is powered by Supabase. Each device is securely
                  claimed to a verified account, ensuring only authorized users can
                  view data and manage leak detectors.
                </p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2CB1A1] flex-shrink-0 mt-0.5" />
                    <span>Email-based sign-in and verification.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2CB1A1] flex-shrink-0 mt-0.5" />
                    <span>Password reset and recovery support.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2CB1A1] flex-shrink-0 mt-0.5" />
                    <span>Device claiming via unique MAC address.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2CB1A1] flex-shrink-0 mt-0.5" />
                    <span>Support for multiple devices per account.</span>
                  </li>
                </ul>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80"
                  alt="Mobile authentication"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Screenshots */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-12 text-center">
            App Screenshots
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {screenshots.map((screenshot, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 border-gray-200 hover:border-[#2CB1A1] transition-all"
              >
                <div className="aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-200 relative">
                  {screenshot.image ? (
                    <img
                      src={screenshot.image}
                      alt={screenshot.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Smartphone className="w-16 h-16 text-gray-400" />
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white">
                    <div className="text-[10px] uppercase tracking-wide opacity-80">
                      Screenshot Preview
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <h3 className="font-bold text-[#0E3A5D] mb-1">
                    {screenshot.title}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {screenshot.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Push Notifications */}
        <section className="mb-20">
          <Card className="p-8 bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Bell className="w-12 h-12 mb-4 opacity-80" />
                <h2 className="text-2xl font-bold mb-4">
                  Real-Time Push Notifications
                </h2>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  Firebase Cloud Messaging (FCM) delivers instant alerts when
                  potential leaks or anomalies are detected. Tap a notification
                  to jump directly into the relevant device view.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Alerts within seconds of detection.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Per-device notification preferences.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Rich notifications with context.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Background delivery even if the app is closed.</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"
                  alt="Push notifications"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Technical Stack */}
        <section>
          <Card className="p-8 bg-gray-50 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#0E3A5D] mb-6">
              Technical Implementation
            </h2>

            <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-700">
              <div>
                <h3 className="font-semibold text-[#0E3A5D] mb-3">
                  Frontend Framework
                </h3>
                <ul className="space-y-2">
                  <li>• Flutter (Dart)</li>
                  <li>• Material Design components</li>
                  <li>• Responsive layouts for phones & tablets</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[#0E3A5D] mb-3">
                  Backend Integration
                </h3>
                <ul className="space-y-2">
                  <li>• Supabase REST & real-time APIs</li>
                  <li>• Auth + Row-Level Security</li>
                  <li>• Device data streamed from cloud backend</li>
                  <li>• Offline caching for recent events</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[#0E3A5D] mb-3">
                  Notifications
                </h3>
                <ul className="space-y-2">
                  <li>• Firebase Cloud Messaging (FCM)</li>
                  <li>• Topic & device-based subscriptions</li>
                  <li>• Background & foreground handling</li>
                  <li>• Configurable quiet hours (future)</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
