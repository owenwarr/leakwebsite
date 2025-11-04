import React from "react";
import { Card } from "@/components/ui/card";
import { Lightbulb, Zap, Smartphone, Wifi, Settings, TrendingUp } from "lucide-react";

export default function FutureWork() {
  const enhancements = [
    {
      icon: Zap,
      title: "Deep Sleep Implementation",
      priority: "High",
      description: "Enable ESP32 deep sleep mode to extend battery life to 6+ months between charges",
      details: ["Wake on timer or accelerometer interrupt", "Sub-10μA sleep current", "Fast wake-up with RTC memory", "Battery life testing & optimization"]
    },
    {
      icon: Settings,
      title: "Adaptive Baseline Learning",
      priority: "High",
      description: "Implement machine learning for dynamic baseline adjustment based on usage patterns",
      details: ["Time-of-day pattern recognition", "Seasonal variation compensation", "Automatic recalibration suggestions", "Improved false positive reduction"]
    },
    {
      icon: Smartphone,
      title: "iOS Application",
      priority: "High",
      description: "Port Flutter app to iOS for complete mobile platform coverage",
      details: ["Feature parity with Android", "Apple Push Notification service", "App Store submission", "TestFlight beta program"]
    },
    {
      icon: Wifi,
      title: "Over-the-Air (OTA) Updates",
      priority: "Medium",
      description: "Enable remote firmware updates without physical device access",
      details: ["Secure update mechanism", "Rollback capability", "Update scheduling", "Version management dashboard"]
    },
    {
      icon: Lightbulb,
      title: "Expanded Pipe Size Support",
      priority: "Low",
      description: "Design enclosure variants for pipes larger than 1.5 inches",
      details: ["Modular clamp system", "Adjustable mounting brackets", "Universal sensor positioning", "Commercial/industrial applications"]
    }
  ];

  const research = [
    {
      title: "Frequency Domain Analysis",
      description: "Investigate FFT-based detection to complement RMS analysis for more nuanced leak signatures"
    },
    {
      title: "Mesh Networking",
      description: "Enable ESP-NOW for multi-device communication and coordinated detection"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0E3A5D] mb-4">
            Future Work & Roadmap
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Planned enhancements and research directions for next iterations
          </p>
        </div>

        {/* Priority Enhancements */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8">
            Planned Enhancements
          </h2>
          
          <div className="space-y-6">
            {enhancements.map((enhancement, index) => {
              const Icon = enhancement.icon;
              const priorityColors = {
                "High": "bg-red-100 text-red-800 border-red-200",
                "Medium": "bg-yellow-100 text-yellow-800 border-yellow-200",
                "Low": "bg-blue-100 text-blue-800 border-blue-200"
              };
              
              return (
                <Card key={index} className="p-6 border-2 border-gray-200 hover:border-[#2CB1A1] transition-all hover:shadow-lg">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="flex items-start gap-4 md:col-span-2">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-[#0E3A5D]">{enhancement.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${priorityColors[enhancement.priority]}`}>
                            {enhancement.priority}
                          </span>
                        </div>
                        <p className="text-gray-600">{enhancement.description}</p>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2 bg-gray-50 rounded-lg p-4">
                      <div className="text-sm font-medium text-gray-500 mb-3">Implementation Details:</div>
                      <ul className="space-y-2">
                        {enhancement.details.map((detail, idx) => (
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

        {/* Research Directions */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8">
            Research & Exploration
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {research.map((item, index) => (
              <Card key={index} className="p-6 border-2 border-gray-200 hover:border-[#2CB1A1] transition-all">
                <h3 className="text-lg font-bold text-[#0E3A5D] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Product Vision */}
        <section>
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <Lightbulb className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl font-bold mb-6">
                Long-Term Vision
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Our ultimate goal is to create a comprehensive smart home water management ecosystem 
                that makes leak detection accessible to all, regardless of housing situation or 
                technical expertise.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 text-left">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-bold mb-2">Ecosystem Integration</h3>
                  <p className="text-sm text-gray-200">
                    Integration with Google Home, Alexa, and Apple HomeKit for voice control and automation
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-bold mb-2">Insurance Partnerships</h3>
                  <p className="text-sm text-gray-200">
                    Collaborate with insurance companies to offer premium discounts for users
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-bold mb-2">Commercial Scale</h3>
                  <p className="text-sm text-gray-200">
                    Expand to multi-unit properties, commercial buildings, and municipal applications
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Community Feedback */}
        <section className="mt-20">
          <Card className="p-8 bg-gray-50 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#0E3A5D] mb-4 text-center">
              We Welcome Your Input
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
              As an open-source project, we encourage contributions from the community. 
              Whether you're an engineer, designer, or end-user, your feedback helps shape 
              the future of this technology. Reach out through our contact page or GitHub repository 
              to share your ideas and suggestions.
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
}