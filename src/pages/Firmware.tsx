import React from "react";
import { Card } from "@/components/ui/card";
import { Cpu, Battery, Wifi, AlertTriangle, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Firmware() {
  const features = [
    {
      icon: Cpu,
      title: "RMS Processing",
      description: "Sliding window RMS calculation over sampled vibration data for efficient baseline comparison"
    },
    {
      icon: Battery,
      title: "Low-Power Operation",
      description: "Minimal peripheral use with planned deep sleep implementation for extended battery life"
    },
    {
      icon: Wifi,
      title: "Selective Wi-Fi",
      description: "Brief connection bursts only for event logging and notifications to conserve power"
    },
    {
      icon: AlertTriangle,
      title: "Anomaly Detection",
      description: "Persistence-based thresholding reduces false positives from transient spikes"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0E3A5D] mb-4">
            Firmware Architecture
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Low-power ESP32 firmware with RMS-based anomaly detection pipeline
          </p>
          
          <Button className="bg-[#2CB1A1] hover:bg-[#2CB1A1]/90">
            <Github className="w-4 h-4 mr-2" />
            View on GitHub
          </Button>
        </div>

        {/* Core Features */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 border-2 border-gray-200 hover:border-[#2CB1A1] transition-all hover:shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0E3A5D] mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Processing Pipeline */}
        <section className="mb-20">
          <Card className="p-8 border-2 border-[#2CB1A1] bg-gradient-to-br from-white to-[#2CB1A1]/5">
            <h2 className="text-2xl font-bold text-[#0E3A5D] mb-8 text-center">
              Signal Processing Pipeline
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] text-white flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0E3A5D] mb-2">Sensor Sampling</h3>
                  <p className="text-gray-600 mb-2">ADXL335 accelerometer sampled at configurable rate</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] text-white flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0E3A5D] mb-2">RMS Calculation</h3>
                  <p className="text-gray-600 mb-2">Root Mean Square computed over sliding windows (e.g., 1-second windows)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] text-white flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0E3A5D] mb-2">Baseline Comparison</h3>
                  <p className="text-gray-600 mb-2">Current RMS compared against learned baseline profile</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] text-white flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0E3A5D] mb-2">Persistence Logic</h3>
                  <p className="text-gray-600 mb-2">Anomaly must persist for configurable duration before triggering alert</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] text-white flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0E3A5D] mb-2">Event Logging & Notification</h3>
                  <p className="text-gray-600 mb-2">Wi-Fi activated to log event to Supabase and trigger push notification</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Power Management */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8">
            Power Management Strategy
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-[#0E3A5D] mb-4">Current Implementation</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Low-power sampling loop without deep sleep</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Minimal peripheral activation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Wi-Fi only during event transmission</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Scheduled periodic uploads</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">4400 mAh battery, target: ≥3 months</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-2 border-[#2CB1A1] bg-gradient-to-br from-white to-[#2CB1A1]/5">
              <h3 className="text-xl font-bold text-[#0E3A5D] mb-4">Planned Improvements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0E3A5D] mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Deep sleep mode between sampling intervals</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0E3A5D] mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Wake on timer or accelerometer interrupt</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0E3A5D] mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Adaptive sampling rates based on activity</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0E3A5D] mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Batch upload optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0E3A5D] mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Target: 6+ months battery life</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

       
        {/* Code Repository */}
        <section>
          <Card className="p-8 bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] text-white">
            <div className="text-center">
              <Github className="w-16 h-16 mx-auto mb-4 opacity-80" />
              <h2 className="text-2xl font-bold mb-4">
                Open Source Firmware
              </h2>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                Complete source code, documentation, and build instructions available on GitHub
              </p>
              <Button className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-6 text-lg backdrop-blur-sm">
                <Github className="w-4 h-4 mr-2" />
                View Repository
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}