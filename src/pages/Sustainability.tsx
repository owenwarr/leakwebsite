import React from "react";
import { Card } from "@/components/ui/card";
import { Leaf, Battery, Package, TrendingDown, DollarSign, Zap } from "lucide-react";

export default function Sustainability() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0E3A5D] mb-4">
            Sustainability & Impact
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Environmental footprint, energy efficiency, and long-term cost benefits
          </p>
        </div>

        {/* Battery Life */}
        <section className="mb-20">
          <Card className="p-8 border-2 border-[#2CB1A1] bg-gradient-to-br from-white to-[#2CB1A1]/5">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Battery className="w-12 h-12 text-[#2CB1A1] mb-4" />
                <h2 className="text-2xl font-bold text-[#0E3A5D] mb-4">
                  Battery Performance & Target
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our 4400 mAh rechargeable battery targets a minimum 3-month operational 
                  period between charges, aligning with typical quarterly inspection cycles 
                  for rental properties.
                </p>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Battery Capacity</span>
                    <span className="font-bold text-[#0E3A5D]">4400 mAh (3.7V)</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Target Runtime</span>
                    <span className="font-bold text-[#0E3A5D]">≥3 months</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Charging Method</span>
                    <span className="font-bold text-[#0E3A5D]">USB-C (built-in)</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Deep Sleep</span>
                    <span className="font-bold text-orange-600">Planned (not yet enabled)</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1609091843029-1c2609cd9faa?w=600&q=80"
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
            Energy Consumption Metrics
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 border-2 border-gray-600 hover:border-[#2CB1A1] transition-all">
              <Zap className="w-10 h-10 text-[#2CB1A1] mb-4" />
              <h3 className="text-lg font-bold text-[#0E3A5D] mb-2">
                Device Power Draw
              </h3>
              <div className="text-3xl font-bold text-[#0E3A5D] mb-2">~0.5 kWh</div>
              <div className="text-sm text-gray-600">Estimated per month (current firmware)</div>
            </Card>

            <Card className="p-6 border-2 border-gray-600 hover:border-[#2CB1A1] transition-all">
              <TrendingDown className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-lg font-bold text-[#0E3A5D] mb-2">
                With Deep Sleep
              </h3>
              <div className="text-3xl font-bold text-green-600 mb-2">~0.15 kWh</div>
              <div className="text-sm text-gray-600">Projected with optimization</div>
            </Card>

            <Card className="p-6 border-2 border-gray-600 hover:border-[#2CB1A1] transition-all">
              <Leaf className="w-10 h-10 text-[#0E3A5D] mb-4" />
              <h3 className="text-lg font-bold text-[#0E3A5D] mb-2">
                CO₂ Footprint
              </h3>
              <div className="text-3xl font-bold text-[#0E3A5D] mb-2">~0.1 kg</div>
              <div className="text-sm text-gray-600">CO₂ per month (avg grid mix)</div>
            </Card>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="mb-20">
          <Card className="p-8 bg-[#0E3A5D] text-[#0E3A5D]">
            <h2 className="text-2xl font-bold mb-6">
              Environmental Impact Assessment
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#2CB1A1]">Water Conservation</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>Typical household leak wastes 10,000+ gallons/year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>Early detection prevents 80-90% of potential waste</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>Saves ~9,000 gallons per household annually</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>Reduces strain on municipal water systems</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#2CB1A1]">Material Sustainability</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>Recyclable PLA 3D printing filament</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>Rechargeable battery (300+ cycles)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>Minimal packaging: ~150cm³ volume</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span>Estimated 5-7 year device lifespan</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Cloud Data Usage */}
        <section className="mb-20">
          <Card className="p-8 bg-gray-50 border border-gray-600">
            <h2 className="text-2xl font-bold text-[#0E3A5D] mb-6">
              Cloud Data Usage & Storage
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-[#0E3A5D] mb-3">Per Event</h3>
                <div className="text-2xl font-bold text-[#0E3A5D] mb-2">~2 KB</div>
                <p className="text-sm text-gray-600">
                  JSON payload with timestamp, RMS values, device ID
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#0E3A5D] mb-3">Monthly Average</h3>
                <div className="text-2xl font-bold text-[#0E3A5D] mb-2">~50 KB</div>
                <p className="text-sm text-gray-600">
                  Typical user with baseline + periodic uploads
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#0E3A5D] mb-3">Annual Storage</h3>
                <div className="text-2xl font-bold text-[#0E3A5D] mb-2">~600 KB</div>
                <p className="text-sm text-gray-600">
                  Including 90-day retention with archival
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white rounded-lg border border-gray-600">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Carbon Impact:</strong> Estimated 0.001 kg CO₂/user/year for cloud storage 
                and data transmission, negligible compared to water conservation benefits.
              </p>
            </div>
          </Card>
        </section>

        {/* Economic Benefits */}
        <section>
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8">
            Economic & ROI Analysis
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 border-2 border-[#2CB1A1]">
              <DollarSign className="w-12 h-12 text-[#2CB1A1] mb-4" />
              <h3 className="text-xl font-bold text-[#0E3A5D] mb-4">
                For Homeowners/Renters
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Device Cost</div>
                  <div className="text-2xl font-bold text-[#0E3A5D]">$50-$75</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Avg. Leak Damage Prevented</div>
                  <div className="text-2xl font-bold text-green-600">$2,000-$10,000</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">ROI if ONE leak detected</div>
                  <div className="text-2xl font-bold text-[#2CB1A1]">2,600-13,200%</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Water bill savings</div>
                  <div className="text-2xl font-bold text-[#0E3A5D]">$50-$150/year</div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-gray-200">
              <Package className="w-12 h-12 text-[#0E3A5D] mb-4" />
              <h3 className="text-xl font-bold text-[#0E3A5D] mb-4">
                For Landlords/Property Managers
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Cost per unit</div>
                  <div className="text-2xl font-bold text-[#0E3A5D]">$50-$75</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Reduced insurance claims</div>
                  <div className="text-2xl font-bold text-green-600">15-25% savings</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Fewer emergency calls</div>
                  <div className="text-2xl font-bold text-[#2CB1A1]">$200-$500/year saved</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Tenant satisfaction</div>
                  <div className="text-2xl font-bold text-[#0E3A5D]">Improved retention</div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="mt-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200">
            <div className="flex items-start gap-4">
              <Leaf className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-green-900 mb-2">Total Cost of Ownership (TCO)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Over a 5-year lifespan: <strong>$50-75 initial + $5/year electricity = $75-100 total. </strong> 
                   Compare this to the average $10,000 water damage repair cost, making this solution 
                  approximately <strong>100-130x more cost-effective</strong> than a single undetected leak.
                </p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}