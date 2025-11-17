import React from "react";
import { Card } from "@/components/ui/card";
import { Download, Box, Ruler, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ClampEnclosure() {
  const specifications = [
    { label: "Pipe Diameter Support", value: "1 to 1.5 inches" },
    { label: "Enclosure Material", value: "PLA 3D-printed" },
    { label: "Mounting Method", value: "Velcro strap" },
    { label: "Fasteners", value: "Brass screws (M3)" },
    { label: "Dampening", value: "None (not required)" },
    { label: "Weight", value: "~85 grams (complete)" },
  ];

  const designFeatures = [
    {
      icon: Box,
      title: "Pipe-Shaped Design",
      description: "Enclosure contours to pipe geometry for stable mounting and optimal sensor contact"
    },
    {
      icon: Ruler,
      title: "Modular Assembly",
      description: "Two-piece design allows easy access to electronics for maintenance and battery replacement"
    },
    {
      icon: Wrench,
      title: "Tool-Free Installation",
      description: "Velcro strap enables quick attachment and removal without any tools or expertise"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0E3A5D] mb-4">
            Clamp & Enclosure Design
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            3D-printed housing with non-invasive Velcro mounting system
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#2CB1A1] hover:bg-[#2CB1A1]/90">
              <Download className="w-4 h-4 mr-2" />
              Download STL Files
            </Button>
            <Button className="bg-[#2CB1A1] hover:bg-[#2CB1A1]/90">
              <Download className="w-4 h-4 mr-2" />
              Download STEP Files
            </Button>
          </div>
        </div>


        {/* Specifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8">
            Technical Specifications
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifications.map((spec, index) => (
              <Card key={index} className="p-6 border-2 border-gray-200 hover:border-[#2CB1A1] transition-all">
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                  {spec.label}
                </div>
                <div className="text-lg font-bold text-[#0E3A5D]">
                  {spec.value}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Design Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8">
            Design Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {designFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 border-2 border-gray-200 hover:border-[#2CB1A1] transition-all hover:shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0E3A5D] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Installation & Setup */}
<section className="mb-16">
  <Card className="p-8 border-2 border-[#2CB1A1]">
    <h2 className="text-2xl font-bold text-[#0E3A5D] mb-6">
      Installation & Setup
    </h2>

    <div className="space-y-6">
      {/* 1. Mount */}
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-[#2CB1A1] text-white flex items-center justify-center font-bold flex-shrink-0">
          1
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-[#0E3A5D] mb-2">Mount Device</h3>
          <p className="text-gray-600">
            Wrap the 1.5&quot; Velcro strap through the enclosure’s slots and around the pipe. 
            Pull snug so the enclosure sits flush; no tools or plumbing work required.
          </p>
        </div>
      </div>

      {/* 2. Position */}
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-[#2CB1A1] text-white flex items-center justify-center font-bold flex-shrink-0">
          2
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-[#0E3A5D] mb-2">Position on Pipe</h3>
          <p className="text-gray-600">
            Choose a straight run of pipe (under-sink or by toilet). 
            Avoid elbows and valves. Tighten the strap to maintain firm, continuous contact.
          </p>
        </div>
      </div>

      {/* 3. Power */}
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-[#2CB1A1] text-white flex items-center justify-center font-bold flex-shrink-0">
          3
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-[#0E3A5D] mb-2">Power On</h3>
          <p className="text-gray-600">
            Ensure the 4400&nbsp;mAh battery is connected. If needed, top off via the FireBeetle’s built-in USB-C before first use.
          </p>
        </div>
      </div>

      {/* 4. Connect Wi-Fi */}
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-[#2CB1A1] text-white flex items-center justify-center font-bold flex-shrink-0">
          4
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-[#0E3A5D] mb-2">Connect to Wi-Fi</h3>
          <p className="text-gray-600">
            Open the mobile app (Android). Follow the in-app prompt to provision 2.4&nbsp;GHz Wi-Fi. 
            The device only wakes Wi-Fi briefly for logs/alerts to preserve battery.
          </p>
        </div>
      </div>

      {/* 5. Link & Baseline */}
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-[#2CB1A1] text-white flex items-center justify-center font-bold flex-shrink-0">
          5
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-[#0E3A5D] mb-2">Link Device & Start Baseline</h3>
          <p className="text-gray-600">
            In the app, sign in and claim the device (by ID/MAC). Start baseline learning—an initial quiet period is used to capture 
            normal RMS. The app will notify you when anomaly alerts are active.
          </p>
        </div>
      </div>
    </div>
  </Card>
</section>


        {/* Gallery */}
        <section>
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8">
            Design Gallery
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="overflow-hidden border-2 border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80"
                alt="CAD render front"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-gray-50">
                <h3 className="font-bold text-[#0E3A5D]">Front View</h3>
                <p className="text-sm text-gray-600">Showing size of deivce</p>
              </div>
            </Card>

            <Card className="overflow-hidden border-2 border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80"
                alt="CAD render side"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-gray-50">
                <h3 className="font-bold text-[#0E3A5D]">Side Profile</h3>
                <p className="text-sm text-gray-600">Pipe contour and strap mounting points</p>
              </div>
            </Card>

            <Card className="overflow-hidden border-2 border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80"
                alt="Installed on pipe"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-gray-50">
                <h3 className="font-bold text-[#0E3A5D]">Installed Configuration</h3>
                <p className="text-sm text-gray-600">Device mounted on 1.5" diameter pipe</p>
              </div>
            </Card>

            <Card className="overflow-hidden border-2 border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80"
                alt="Internal components"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-gray-50">
                <h3 className="font-bold text-[#0E3A5D]">Internal Layout</h3>
                <p className="text-sm text-gray-600">ESP32, accelerometer, and battery placement</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Design Notes */}
        <section className="mt-12">
          <Card className="p-8 bg-[#0E3A5D] text-[#0E3A5D]">
            <h3 className="text-2xl font-bold mb-6">Design Considerations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-[#2CB1A1]">Material Choice</h4>
                <p className="text-gray-600 leading-relaxed">
                  PLA was selected for ease of printing and sufficient strength. 
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-[#2CB1A1]">Mounting Tension</h4>
                <p className="text-gray-600 leading-relaxed">
                  Strap tension affects sensor coupling. Testing showed firm (but not excessive) tension provides optimal vibration transfer without deforming the pipe or enclosure.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-[#2CB1A1]">No Foam Dampening</h4>
                <p className="text-gray-600 leading-relaxed">
                  Early prototypes tested foam inserts, but were found unnecessary. Direct plastic-to-pipe contact provides sufficient vibration coupling for RMS analysis.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-[#2CB1A1]">Future Iterations</h4>
                <p className="text-gray-600 leading-relaxed">
                  Next versions may include IP-rated sealing for wet environments, adjustable mounts for varying pipe sizes, and integrated status LEDs.
                </p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}