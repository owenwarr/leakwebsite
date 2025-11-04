import React from "react";
import { Card } from "@/components/ui/card";
import { Shield, Zap, FileCheck, AlertTriangle } from "lucide-react";

export default function ProfessionalComponents() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0E3A5D] mb-4">
            Professional Components
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Safety, compliance, and professional engineering considerations
          </p>
        </div>

        {/* Safety Considerations */}
        <section className="mb-20">
          <Card className="p-8 border-2 border-[#2CB1A1] bg-gradient-to-br from-white to-[#2CB1A1]/5">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#0E3A5D] mb-2">
                  Safety & Risk Mitigation
                </h2>
                <p className="text-gray-600">
                  Comprehensive safety analysis and risk mitigation strategies
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-[#0E3A5D] mb-3">Electrical Safety</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>Low voltage operation (3.7V battery, 5V USB)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>Built-in battery management and overcharge protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>Short circuit protection on all power paths</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>Proper spacing and insulation of electronic components</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#0E3A5D] mb-3">Physical Safety</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>Non-invasive installation requires no pipe modification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>Secure mounting prevents device displacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>Rounded edges and smooth surfaces prevent injury</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>No sharp components or exposed conductors</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#0E3A5D] mb-3">Water Safety</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>Splash-resistant enclosure design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>USB-C port protected from direct water exposure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>Recommended installation in dry, accessible locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>Future: IP-rated sealing for wet environments</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#0E3A5D] mb-3">Data & Privacy Safety</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>Encrypted data transmission (TLS 1.3)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>Secure authentication and user isolation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>No location tracking or unnecessary data collection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>GDPR-compliant data handling practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* EMC & Regulatory */}
        <section className="mb-20">
          <Card className="p-8 border-2 border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] flex items-center justify-center flex-shrink-0">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#0E3A5D] mb-2">
                  EMC & Regulatory Compliance
                </h2>
                <p className="text-gray-600">
                  Electromagnetic compatibility and standards considerations
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#0E3A5D] mb-3">FCC Compliance (US)</h3>
                <p className="text-gray-700 mb-3">
                  The ESP32 module used in this device is FCC certified (Part 15). For commercial 
                  deployment, the complete assembled product would require:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0E3A5D] mt-2 flex-shrink-0"></div>
                    <span>FCC Part 15 unintentional radiator testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0E3A5D] mt-2 flex-shrink-0"></div>
                    <span>Radiated and conducted emissions testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0E3A5D] mt-2 flex-shrink-0"></div>
                    <span>Immunity testing to ensure reliable operation</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#0E3A5D] mb-3">Wi-Fi Certification</h3>
                <p className="text-gray-700 mb-3">
                  2.4 GHz Wi-Fi operation leverages the ESP32's certified radio:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0E3A5D] mt-2 flex-shrink-0"></div>
                    <span>IEEE 802.11 b/g/n compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0E3A5D] mt-2 flex-shrink-0"></div>
                    <span>Wi-Fi Alliance certification (module-level)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0E3A5D] mt-2 flex-shrink-0"></div>
                    <span>WPA2/WPA3 security protocol support</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#0E3A5D] mb-3">Battery Safety Standards</h3>
                <p className="text-gray-700 mb-3">
                  Li-Po battery handling follows industry best practices:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0E3A5D] mt-2 flex-shrink-0"></div>
                    <span>UL 2054 (safety standard for household batteries)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0E3A5D] mt-2 flex-shrink-0"></div>
                    <span>IEC 62133 (secondary cells and batteries)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0E3A5D] mt-2 flex-shrink-0"></div>
                    <span>UN 38.3 (transport testing for lithium batteries)</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Installation Guidance */}
        <section className="mb-20">
          <Card className="p-8 bg-gray-50 border border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#0E3A5D] mb-2">
                  Renter-Friendly Installation Guidance
                </h2>
                <p className="text-gray-600">
                  Best practices for installation without violating lease terms
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-[#0E3A5D] mb-3">✓ Recommended Practices</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                    <span>Install on accessible, straight pipe sections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                    <span>Use Velcro straps—no permanent fasteners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                    <span>Choose dry locations (under sink, near water heater)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                    <span>Document installation with photos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                    <span>Remove completely upon move-out (no residue)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                    <span>Inform landlord (optional but recommended)</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#0E3A5D] mb-3">✗ Avoid These Actions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                    <span>Never drill holes or use permanent adhesives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                    <span>Don't modify or cut existing plumbing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                    <span>Avoid over-tightening straps (pipe deformation)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                    <span>Don't install in high-moisture enclosed spaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                    <span>Don't leave device unattended with low battery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                    <span>Avoid painting or permanently marking pipes</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Warranty & Liability */}
        <section>
          <Card className="p-8 bg-[#0E3A5D] text-black">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-7 h-7 text-black" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Disclaimer & Limitations
                </h2>
                <p className="text-gray-600 text-sm">
                  Important information for prototype deployment
                </p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                <strong>Academic Prototype:</strong> This device is a senior design project prototype 
                developed for educational purposes. It has not undergone full certification testing 
                required for commercial sale.
              </p>
              
              <p>
                <strong>No Warranty:</strong> The device is provided "as-is" without warranty of any kind. 
                While designed with safety in mind, users assume all risks associated with installation 
                and operation.
              </p>
              
              <p>
                <strong>Not a Replacement:</strong> This leak detector is a supplementary monitoring tool, 
                not a replacement for proper plumbing maintenance, inspections, or professional leak 
                detection services.
              </p>
              
              <p>
                <strong>Liability Limitations:</strong> The development team and Georgia Southern University 
                are not liable for property damage, water waste, or any other consequences resulting from 
                device malfunction, false positives, false negatives, or improper installation.
              </p>
              
              <p>
                <strong>User Responsibility:</strong> Users are responsible for verifying all alerts, 
                maintaining proper device operation, and ensuring compliance with local regulations and 
                lease agreements.
              </p>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}