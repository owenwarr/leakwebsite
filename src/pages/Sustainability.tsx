import React from "react";
import { Card } from "@/components/ui/card";
import {
  Leaf,
  Battery,
  Package,
  TrendingDown,
  DollarSign,
  Zap,
} from "lucide-react";

export default function Sustainability() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0E3A5D] mb-4">
            Sustainability &amp; Impact
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Environmental footprint, energy efficiency, and long-term cost
            benefits
          </p>
        </div>

        {/* Battery Life */}
        <section className="mb-20">
          <Card className="p-8 border-2 border-[#2CB1A1] bg-gradient-to-br from-white to-[#2CB1A1]/5">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Battery className="w-12 h-12 text-[#2CB1A1] mb-4" />
                <h2 className="text-2xl font-bold text-[#0E3A5D] mb-4">
                  Battery Performance &amp; Target
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The prototype uses a 3.7 V, 4400 mAh rechargeable battery
                  (≈16.3 Wh). With proper use of the FireBeetle 2 ESP32-E&apos;s
                  low-power modes and duty-cycled sensing, our design target is
                  a <strong>minimum 3-month runtime</strong> between charges.
                  Values below are engineering estimates based on expected
                  average current draw, not final lab-certified measurements.
                </p>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">
                      Battery Capacity
                    </span>
                    <span className="font-bold text-[#0E3A5D]">
                      4400 mAh @ 3.7 V
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">
                      Target Runtime (Optimized)
                    </span>
                    <span className="font-bold text-[#0E3A5D]">
                      ≥ 3 months
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">
                      Charging Method
                    </span>
                    <span className="font-bold text-[#0E3A5D]">
                      USB-C (built-in)
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">
                      Deep Sleep Optimization
                    </span>
                    <span className="font-bold text-orange-600">
                      Planned / in progress
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://cdn-shop.adafruit.com/970x728/354-05.jpg"
                  alt="Battery technology"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Energy Metrics */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8">
            Energy Consumption Metrics (Estimated)
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Current / conservative estimate */}
            <Card className="p-6 border-2 border-gray-200 hover:border-[#2CB1A1] transition-all">
              <Zap className="w-10 h-10 text-[#2CB1A1] mb-4" />
              <h3 className="text-lg font-bold text-[#0E3A5D] mb-2">
                Current Prototype (No Deep Sleep)
              </h3>
              <div className="text-3xl font-bold text-[#0E3A5D] mb-2">
                ~0.05 kWh / month
              </div>
              <div className="text-sm text-gray-600">
                Rough upper-bound estimate assuming higher-duty-cycle Wi-Fi and
                active sensing. Used as a conservative design reference.
              </div>
            </Card>

            {/* Optimized target */}
            <Card className="p-6 border-2 border-gray-200 hover:border-[#2CB1A1] transition-all">
              <TrendingDown className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-lg font-bold text-[#0E3A5D] mb-2">
                Optimized Target (Deep Sleep)
              </h3>
              <div className="text-3xl font-bold text-green-600 mb-2">
                ~0.005 kWh / month
              </div>
              <div className="text-sm text-gray-600">
                Based on low-mA average draw using FireBeetle 2 ESP32-E&apos;s
                low-power features, enabling multi-month battery life.
              </div>
            </Card>

            {/* CO2 from optimized usage */}
            <Card className="p-6 border-2 border-gray-200 hover:border-[#2CB1A1] transition-all">
              <Leaf className="w-10 h-10 text-[#0E3A5D] mb-4" />
              <h3 className="text-lg font-bold text-[#0E3A5D] mb-2">
                CO₂ Footprint (Optimized)
              </h3>
              <div className="text-3xl font-bold text-[#0E3A5D] mb-2">
                ~0.002 kg / month
              </div>
              <div className="text-sm text-gray-600">
                Order-of-magnitude estimate using ~0.4 kg CO₂/kWh grid factor;
                annual footprint is negligible compared to prevented water
                damage.
              </div>
            </Card>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="mb-20">
          <Card className="p-8 bg-[#0E3A5D] text-white">
            <h2 className="text-2xl font-bold mb-6">
              Environmental Impact Assessment
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#2CB1A1]">
                  Water Conservation
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>
                      Typical household leaks can waste{" "}
                      <strong>10,000+ gallons/year</strong> (EPA estimate).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>
                      Early detection can prevent a large fraction of this waste
                      by identifying abnormal flow early.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>
                      Reduces strain on municipal water and wastewater systems.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#2CB1A1]">
                  Material Sustainability
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>3D-printed enclosure using recyclable PLA.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>Rechargeable battery rated for 300+ cycles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>Minimal packaging (~150 cm³ shipping volume).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>Target device lifespan of 5–7 years.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Cloud Data Usage */}
        <section className="mb-20">
          <Card className="p-8 bg-gray-50 border border-gray-300">
            <h2 className="text-2xl font-bold text-[#0E3A5D] mb-6">
              Cloud Data Usage &amp; Storage
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-[#0E3A5D] mb-3">
                  Per Event
                </h3>
                <div className="text-2xl font-bold text-[#0E3A5D] mb-2">
                  ~2 KB
                </div>
                <p className="text-sm text-gray-600">
                  JSON payload with timestamp, RMS metrics, and device ID.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#0E3A5D] mb-3">
                  Monthly Average
                </h3>
                <div className="text-2xl font-bold text-[#0E3A5D] mb-2">
                  ~50 KB
                </div>
                <p className="text-sm text-gray-600">
                  Typical usage with baseline + periodic anomaly events.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#0E3A5D] mb-3">
                  Annual Storage
                </h3>
                <div className="text-2xl font-bold text-[#0E3A5D] mb-2">
                  ~600 KB
                </div>
                <p className="text-sm text-gray-600">
                  Including rolling history &amp; archival; extremely lightweight.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Carbon Impact:</strong> At these data volumes, cloud
                energy use is on the order of <strong>~0.001 kg CO₂</strong>{" "}
                per user per year—effectively negligible compared to the water
                and damage prevented.
              </p>
            </div>
          </Card>
        </section>

        {/* Economic Benefits */}
        <section>
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8">
            Economic &amp; ROI Analysis
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 border-2 border-[#2CB1A1]">
              <DollarSign className="w-12 h-12 text-[#2CB1A1] mb-4" />
              <h3 className="text-xl font-bold text-[#0E3A5D] mb-4">
                For Homeowners &amp; Renters
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Device Cost</div>
                  <div className="text-2xl font-bold text-[#0E3A5D]">
                    $50–$75 (target)
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">
                    Potential Leak Damage Avoided
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    $2,000–$10,000+
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">
                    ROI if One Leak is Caught
                  </div>
                  <div className="text-2xl font-bold text-[#2CB1A1]">
                    2,600–13,200%+
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">
                    Water Bill Savings (Leaks Stopped)
                  </div>
                  <div className="text-2xl font-bold text-[#0E3A5D]">
                    ~$50–$150 / year
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-gray-200">
              <Package className="w-12 h-12 text-[#0E3A5D] mb-4" />
              <h3 className="text-xl font-bold text-[#0E3A5D] mb-4">
                For Landlords &amp; Property Managers
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">
                    Per-Unit Hardware
                  </div>
                  <div className="text-2xl font-bold text-[#0E3A5D]">
                    $50–$75 (target)
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">
                    Fewer Major Incidents
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    Avoided $10k+ events
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">
                    Fewer Emergency Calls
                  </div>
                  <div className="text-2xl font-bold text-[#2CB1A1]">
                    ~$200–$500 / yr saved
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">
                    Tenant Satisfaction
                  </div>
                  <div className="text-2xl font-bold text-[#0E3A5D]">
                    Higher retention &amp; trust
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="mt-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200">
            <div className="flex items-start gap-4">
              <Leaf className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-green-900 mb-2">
                  Total Cost of Ownership (TCO)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Over a 5-year lifespan:{" "}
                  <strong>
                    ~$50–75 initial + a few dollars of electricity = ~$75–100
                    total.
                  </strong>{" "}
                  Compared to an average water damage claim on the order of{" "}
                  <strong>$10,000</strong>, a single prevented leak makes the
                  device roughly <strong>100x+</strong> more cost-effective than
                  doing nothing.
                </p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
