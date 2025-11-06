import React from "react";
import { Card } from "@/components/ui/card";
import { Activity, Cpu, Wifi, Cloud, Smartphone, Database, ArrowRight } from "lucide-react";

export default function SystemDiagram() {
  const systemComponents = [
    {
      icon: Activity,
      title: "Accelerometer Sensor",
      description: "Captures vibration data from plumbing pipes. No analog filtering or op-amp used.",
      details: ["Raw vibration signals", "Two resistors in signal path", "Brass screws for mounting"]
    },
    {
      icon: Cpu,
      title: "FireBeetle ESP32",
      description: "Processes sensor data and runs baseline learning & anomaly detection.",
      details: ["RMS windowing", "Baseline learning during onboarding", "Persistence/threshold logic", "Low-power operation (deep sleep planned)"]
    },
    {
      icon: Wifi,
      title: "Wi-Fi (2.4 GHz)",
      description: "Brief bursts for logging and notifications to preserve battery life.",
      details: ["Minimal Wi-Fi use", "Event-triggered transmission", "Minimal uploads", "Built-in charging plug"]
    },
    {
      icon: Database,
      title: "Supabase Backend",
      description: "Cloud database for device data, user profiles, and event logs.",
      details: ["User authentication", "Device management", "Event/leak records", "Data retention & privacy"]
    },
    {
      icon: Smartphone,
      title: "Android App",
      description: "Mobile interface for monitoring, alerts, and device management.",
      details: ["Device claiming", "Real-time alerts (FCM)", "Event logs & history", "Battery status monitoring"]
    }
  ];

  const flowSteps = [
    { from: "Sensor", to: "ESP32", label: "Raw vibration data" },
    { from: "ESP32", to: "Wi-Fi", label: "RMS analysis + anomaly detection" },
    { from: "Wi-Fi", to: "Supabase", label: "Event logging" },
    { from: "Supabase", to: "App", label: "Push notifications" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0E3A5D] mb-4">
            System Architecture
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end pipeline from sensor to mobile alert
          </p>
        </div>

        {/* System Flow Diagram */}
        <section className="mb-20">
          <Card className="p-8 sm:p-12 border-2 border-[#2CB1A1] bg-gradient-to-br from-white to-[#2CB1A1]/5">
            <h2 className="text-2xl font-bold text-[#0E3A5D] mb-8 text-center">
              Data Flow Pipeline
            </h2>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              {flowSteps.map((step, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm text-center px-2">{step.from}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-2 text-center max-w-[120px]">{step.label}</div>
                  </div>
                  
                  {index < flowSteps.length - 1 && (
                    <ArrowRight className="w-8 h-8 text-[#2CB1A1] flex-shrink-0 hidden sm:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </Card>
        </section>

        {/* Component Details */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-12 text-center">
            System Components
          </h2>
          
          <div className="space-y-6">
            {systemComponents.map((component, index) => {
              const Icon = component.icon;
              return (
                <Card key={index} className="p-6 border-2 border-gray-200 hover:border-[#2CB1A1] transition-all hover:shadow-lg">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="flex items-start gap-4 md:col-span-2">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#0E3A5D] mb-2">{component.title}</h3>
                        <p className="text-gray-600">{component.description}</p>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2 bg-gray-50 rounded-lg p-4">
                      <div className="text-sm font-medium text-gray-500 mb-3">Key Details:</div>
                      <ul className="space-y-2">
                        {component.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-1.5 flex-shrink-0"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Technical Notes */}
        <section>
          <Card className="p-8 bg-[#0E3A5D] text-[#0E3A5D]">
            <h2 className="text-2xl font-bold mb-6">Technical Implementation Notes</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#2CB1A1]">Baseline Learning</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Captured during initial device onboarding</li>
                  <li>• Records normal plumbing vibration patterns</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#2CB1A1]">Anomaly Detection</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• RMS deviation from baseline threshold</li>
                  <li>• No frequency domain analysis required</li>
                  <li>• Computationally efficient for battery life</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#2CB1A1]">Hardware Simplicity</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• No op-amp or analog filtering circuits</li>
                  <li>• Only two resistors in signal/power path</li>
                  <li>• Brass screws for reliable mounting</li>
                  <li>• No foam dampening materials needed</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#2CB1A1]">Power Management</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Current: low-power loop (deep sleep planned)</li>
                  <li>• Wi-Fi limited to brief transmission bursts</li>
                  <li>• Scheduled uploads minimize battery drain</li>
                  <li>• FireBeetle's built-in charging plug</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}