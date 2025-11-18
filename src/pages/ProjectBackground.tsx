// src/pages/ProjectBackground.tsx
import React from "react";
import { Card } from "@/components/ui/card";
import {
  AlertTriangle,
  TrendingDown,
  Target,
  CheckCircle,
} from "lucide-react";
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
    "Low-cost prototype (~$50 target hardware cost)",
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
            Understanding the problem and our renter-friendly leak detection
            solution
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
                Unnoticed Leaks, Big Consequences
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Water leaks in residential properties often go undetected until
                significant damage has occurred. This is especially challenging
                for renters, who typically cannot modify plumbing infrastructure
                but still face property damage, disruption, and potential
                liability.
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
                src="https://cdn.prod.website-files.com/643dd13153ce80ea0a9ceae9/68deab3139c6575485a4c908_65f0cc8b9b651eae06aa774d_Untitled%2520(1).jpeg"
                alt="Water leak damage"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E3A5D]/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-6">
          <div className="grid sm:grid-cols-3 gap-6">
            {/* Stat 1 */}
            <Card className="p-8 text-center border-2 border-gray-200 hover:border-[#2CB1A1] transition-all">
              <div className="text-3xl font-extrabold text-[#0E3A5D] mb-2">
                $10,000+
              </div>
              <div className="text-sm text-gray-600">
                Typical range for water damage repair or insurance payouts
              </div>
            </Card>

            {/* Stat 2 */}
            <Card className="p-8 text-center border-2 border-gray-200 hover:border-[#2CB1A1] transition-all">
              <div className="text-3xl font-extrabold text-[#0E3A5D] mb-2">
                14,000
              </div>
              <div className="text-sm text-gray-600">
                Estimated U.S. water damage emergencies every day
              </div>
            </Card>

            {/* Stat 3 */}
            <Card className="p-8 text-center border-2 border-gray-200 hover:border-[#2CB1A1] transition-all">
              <div className="text-3xl font-extrabold text-[#0E3A5D] mb-2">
                10%
              </div>
              <div className="text-sm text-gray-600">
                Homes have leaks wasting 90+ gallons per day
              </div>
            </Card>
          </div>
        </section>

        {/* Stat context + sources */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-xs text-gray-600 space-y-2">
            

            <div className="mt-2">
              <span className="font-semibold">Sources:&nbsp;</span>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>
                  Insurance Information Institute (III),{" "}
                  <a
                    href="https://www.iii.org/fact-statistic/facts-statistics-homeowners-and-renters-insurance"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0E3A5D] hover:underline"
                  >
                    Homeowners &amp; Renters Insurance Statistics
                  </a>{" "}
                  – reports average water damage &amp; freezing claim payouts in
                  the ~$10k+ range (varies by year).
                </li>
                <li>
                  IICRC / restoration industry communications referencing{" "}
                  <strong>“~14,000 people in the U.S. experience a water damage
                  emergency each day.”</strong>{" "}
                  (e.g. IICRC public outreach and partner materials). This
                  figure is best treated as an indicative industry estimate, not
                  an official government statistic.
                </li>
                <li>
                  U.S. EPA WaterSense –{" "}
                  <a
                    href="https://www.epa.gov/watersense/fix-leak-week"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0E3A5D] hover:underline"
                  >
                    Fix a Leak Week
                  </a>
                  :{" "}
                  “The average household&apos;s leaks can account for nearly
                  10,000 gallons of water wasted every year, and ten percent of
                  homes have leaks that waste 90 gallons or more per day.”
                </li>
              </ul>
            </div>
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
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#2CB1A1]/20 rounded-full blur-3xl" />
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
                Our prototype is a clamp-on, non-invasive leak detector that
                uses RMS-based anomaly detection on pipe vibration data to
                identify abnormal flow patterns without opening walls or cutting
                pipe. The design targets affordability and portability so
                renters and property managers can deploy protection quickly and
                remove it without damage.
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
            Key Features &amp; Benefits
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={TrendingDown}
              title="Low Cost"
              description="Prototype hardware target around $50 enables scalable deployment."
              accent
            />
            <FeatureCard
              icon={CheckCircle}
              title="Easy Install"
              description="Velcro clamp, no tools, no pipe cutting, fully removable."
            />
            <FeatureCard
              icon={AlertTriangle}
              title="Smart Alerts"
              description="RMS baseline learning and anomaly detection to reduce false alarms."
            />
            <FeatureCard
              icon={Target}
              title="Renter-Friendly"
              description="Non-invasive design respects leases and avoids property damage."
            />
          </div>
        </section>
      </div>
    </div>
  );
}
