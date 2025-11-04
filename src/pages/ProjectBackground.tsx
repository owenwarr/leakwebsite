import React from "react";
import { Card } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, Target, CheckCircle } from "lucide-react";
import FeatureCard from "../components/shared/FeatureCard";

export default function ProjectBackground() {
  const problems = [
    "Hidden leaks can cause thousands in water damage",
    "Renters cannot modify plumbing infrastructure",
    "Traditional leak detectors require professional installation",
    "High costs prevent widespread adoption",
  ];

  const solutions = [
    "Non-invasive clamp-on design",
    "RMS-based anomaly detection",
    "Low-cost prototype ($50)",
    "Mobile alerts via Android app",
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0E3A5D] mb-4">
            Project Background
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the problem and our innovative solution
          </p>
        </div>

        {/* Problem Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
                <AlertTriangle className="w-4 h-4" />
                The Problem
              </div>
              <h2 className="text-3xl font-bold text-[#0E3A5D] mb-6">
                Hidden Leaks, Big Consequences
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Water leaks in residential properties often go undetected until significant damage has occurred. 
                This creates a major challenge for renters who cannot modify existing plumbing infrastructure, 
                yet bear the consequences of undetected leaks.
              </p>
              
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AlertTriangle className="w-3 h-3 text-red-600" />
                    </div>
                    <p className="text-gray-700">{problem}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=800&q=80"
                alt="Water leak damage"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E3A5D]/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-20">
          <div className="grid sm:grid-cols-3 gap-6">
            <Card className="p-8 text-center border-2 border-gray-200 hover:border-[#2CB1A1] transition-all">
              <div className="text-4xl font-bold text-[#0E3A5D] mb-2">$10,000+</div>
              <div className="text-sm text-gray-600">Average water damage repair cost</div>
            </Card>
            <Card className="p-8 text-center border-2 border-gray-200 hover:border-[#2CB1A1] transition-all">
              <div className="text-4xl font-bold text-[#0E3A5D] mb-2">14,000</div>
              <div className="text-sm text-gray-600">Water damage insurance claims daily (US)</div>
            </Card>
            <Card className="p-8 text-center border-2 border-gray-200 hover:border-[#2CB1A1] transition-all">
              <div className="text-4xl font-bold text-[#0E3A5D] mb-2">10%</div>
              <div className="text-sm text-gray-600">Homes have leaks wasting 90+ gallons/day</div>
            </Card>
          </div>
        </section>

        {/* Solution Section */}
        <section>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
                alt="Leak detector solution"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#2CB1A1]/20 rounded-full blur-3xl"></div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                <Target className="w-4 h-4" />
                Our Solution
              </div>
              <h2 className="text-3xl font-bold text-[#0E3A5D] mb-6">
                Low-Cost, Renter-Friendly Detection
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We developed a clamp-on, non-invasive leak detector that uses RMS-based anomaly detection 
                to identify potential leaks without requiring any modifications to existing plumbing. 
                Mobile alerts keep users informed in real-time.
              </p>
              
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <p className="text-gray-700">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-12 text-center">
            Key Features & Benefits
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={TrendingDown}
              title="Low Cost"
              description="$50 prototype cost makes it accessible for widespread adoption"
              accent
            />
            <FeatureCard
              icon={CheckCircle}
              title="Easy Install"
              description="5-minute Velcro clamp installation, no tools or plumbing expertise needed"
            />
            <FeatureCard
              icon={AlertTriangle}
              title="Smart Alerts"
              description="RMS baseline learning with anomaly detection reduces false positives"
            />
            <FeatureCard
              icon={Target}
              title="Renter-Friendly"
              description="Completely removable, leaving no trace or damage to property"
            />
          </div>
        </section>
      </div>
    </div>
  );
}