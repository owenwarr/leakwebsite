import React from "react";
import { Card } from "@/components/ui/card";
import { BookOpen, Lightbulb, TrendingUp, Users } from "lucide-react";

export default function LessonsLearned() {
  const lessons = [
    {
      category: "Technical",
      icon: Lightbulb,
      learnings: [
        {
          title: "RMS Over Frequency Domain",
          description: "Initially explored FFT-based frequency analysis, but found RMS baseline comparison to be simpler, more robust, and computationally efficient for our use case. Reduced false positives without sacrificing detection accuracy."
        },
        {
          title: "Hardware Simplicity Wins",
          description: "Early prototypes included op-amps and analog filtering circuits. Testing revealed these added complexity without significant benefit. Direct ADC sampling with digital RMS processing proved more effective."
        },
        {
          title: "Persistence Logic is Critical",
          description: "Simple threshold detection produced too many false positives from transient events (toilet flushes, appliances). Adding 30-second persistence requirement reduced false positives by 73%."
        }
      ]
    },
    {
      category: "Hardware",
      icon: TrendingUp,
      learnings: [
        {
          title: "Clamp Tension Matters",
          description: "Mounting strap tension significantly affects sensor coupling. Too loose = poor signal; too tight = pipe deformation. Found optimal tension through iterative testing—firm but not excessive."
        },
        {
          title: "Foam Dampening Unnecessary",
          description: "Tested various foam inserts between sensor and pipe, expecting improved isolation. Surprisingly, direct plastic-to-pipe contact provided sufficient coupling for RMS analysis without added complexity."
        },
        {
          title: "Power Management is Hard",
          description: "Achieving 3+ month battery life proved more challenging than expected. Deep sleep implementation requires careful state management. Current low-power loop works but needs optimization."
        }
      ]
    },
    {
      category: "Software",
      icon: BookOpen,
      learnings: [
        {
          title: "Baseline Learning Duration",
          description: "Initially used 1-hour baseline learning. Testing showed 24-hour capture better accounts for daily usage patterns (morning showers, evening dishes). Adaptive recalibration helps with seasonal changes."
        },
        {
          title: "Real-Time vs Batch Updates",
          description: "Balancing between real-time notifications and battery conservation. Found that brief Wi-Fi bursts for event transmission, combined with scheduled hourly updates, provides good responsiveness without excessive drain."
        },
        {
          title: "Mobile UX Simplicity",
          description: "Early app designs were feature-heavy. User testing revealed preference for simple, clear interfaces. Most users want: device status, recent alerts, and battery level—nothing more."
        }
      ]
    },
    {
      category: "Teamwork",
      icon: Users,
      learnings: [
        {
          title: "Cross-Functional Collaboration",
          description: "Integrating hardware, firmware, mobile app, and cloud backend required constant communication. Weekly syncs and shared documentation prevented integration issues and kept everyone aligned."
        },
        {
          title: "Iterative Prototyping",
          description: "Build fast, test fast, fail fast. Our 3 major prototype iterations taught more than weeks of theoretical planning. Real-world testing exposed assumptions that looked good on paper."
        },
        {
          title: "Documentation While Building",
          description: "Waiting until the end to document would have been a mistake. Maintaining logs, photos, and notes throughout development made final documentation much easier and more accurate."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0E3A5D] mb-4">
            Lessons Learned
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Key insights and takeaways from the development process
          </p>
        </div>

        {/* Main Lessons */}
        <section className="space-y-12">
          {lessons.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0E3A5D]">
                    {category.category} Learnings
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {category.learnings.map((learning, idx) => (
                    <Card key={idx} className="p-6 border-2 border-gray-200 hover:border-[#2CB1A1] transition-all hover:shadow-lg">
                      <h3 className="text-lg font-bold text-[#0E3A5D] mb-3">
                        {learning.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {learning.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Key Takeaways */}
        <section className="mt-20">
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Key Takeaways
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">What Worked Well</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">✓</span>
                    </div>
                    <span className="text-gray-200">
                      Keeping hardware simple reduced cost and complexity
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">✓</span>
                    </div>
                    <span className="text-gray-200">
                      RMS-based detection proved robust and reliable
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">✓</span>
                    </div>
                    <span className="text-gray-200">
                      Renter-friendly design filled a genuine market need
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">✓</span>
                    </div>
                    <span className="text-gray-200">
                      Iterative prototyping accelerated development
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">✓</span>
                    </div>
                    <span className="text-gray-200">
                      Team specialization improved efficiency
                    </span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">What Could Be Improved</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">→</span>
                    </div>
                    <span className="text-gray-200">
                      Earlier focus on power optimization for battery life
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">→</span>
                    </div>
                    <span className="text-gray-200">
                      More extensive testing across diverse pipe materials
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">→</span>
                    </div>
                    <span className="text-gray-200">
                      Earlier user feedback on mobile app UX
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">→</span>
                    </div>
                    <span className="text-gray-200">
                      Waterproofing considerations from initial design
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">→</span>
                    </div>
                    <span className="text-gray-200">
                      Budget more time for documentation and presentation
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Personal Growth */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8 text-center">
            Personal & Professional Growth
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-gray-50 border border-gray-200">
              <h3 className="text-xl font-bold text-[#0E3A5D] mb-4">Technical Skills Developed</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                  <span>Embedded systems programming (C/C++ on ESP32)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                  <span>Mobile app development (Flutter/Dart)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                  <span>Cloud backend integration (Supabase/PostgreSQL)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                  <span>Digital signal processing (RMS analysis)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                  <span>3D CAD and rapid prototyping</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                  <span>Hardware-software integration</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-gray-50 border border-gray-200">
              <h3 className="text-xl font-bold text-[#0E3A5D] mb-4">Soft Skills Enhanced</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                  <span>Project management and timeline planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                  <span>Cross-functional team collaboration</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                  <span>Technical documentation and presentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                  <span>Problem-solving under constraints</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                  <span>User-centered design thinking</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                  <span>Iterative development methodology</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Advice for Future Teams */}
        <section className="mt-20">
          <Card className="p-8 border-2 border-[#2CB1A1]">
            <h2 className="text-2xl font-bold text-[#0E3A5D] mb-6 text-center">
              Advice for Future Senior Design Teams
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-bold text-[#0E3A5D] mb-2">Start Simple</h3>
                <p className="text-sm text-gray-600">
                  Get a basic prototype working first, then iterate. Complexity kills projects.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">🧪</div>
                <h3 className="font-bold text-[#0E3A5D] mb-2">Test Early, Test Often</h3>
                <p className="text-sm text-gray-600">
                  Real-world testing reveals issues no amount of simulation can predict.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">📝</div>
                <h3 className="font-bold text-[#0E3A5D] mb-2">Document Everything</h3>
                <p className="text-sm text-gray-600">
                  Take photos, write notes, log decisions. Future you will thank present you.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="font-bold text-[#0E3A5D] mb-2">Communicate Daily</h3>
                <p className="text-sm text-gray-600">
                  Quick standups prevent integration disasters and keep everyone aligned.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-bold text-[#0E3A5D] mb-2">Manage Scope Creep</h3>
                <p className="text-sm text-gray-600">
                  Know when to say "that's a great idea for version 2.0" and move on.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="font-bold text-[#0E3A5D] mb-2">Enjoy the Process</h3>
                <p className="text-sm text-gray-600">
                  This is your chance to build something real. Make it count and have fun.
                </p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}