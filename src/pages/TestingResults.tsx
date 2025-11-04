import React from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

type ResultType = "success" | "detected" | "warning";

type TestRow = {
  scenario: string;
  rms: string;
  result: ResultType;
  notes: string;
};

export default function TestingResults() {
  const testProtocol: string[] = [
    "Establish baseline with no water flow (idle state)",
    "Record normal usage patterns (faucet, toilet, shower)",
    "Simulate various leak scenarios (drip, stream, burst)",
    "Test false positive scenarios (appliances, vibrations)",
    "Verify persistence logic effectiveness",
    "Measure battery consumption over extended periods",
  ];

  const testResults: TestRow[] = [
    { scenario: "Idle Baseline", rms: "0.02 g", result: "success", notes: "Stable baseline established across 24-hour period" },
    { scenario: "Faucet Use", rms: "0.08-0.12 g", result: "success", notes: "Correctly identified as normal, no false alert" },
    { scenario: "Toilet Flush", rms: "0.15-0.25 g", result: "success", notes: "Brief spike, correctly ignored by persistence logic" },
    { scenario: "Slow Drip Leak", rms: "0.05-0.08 g", result: "detected", notes: "Detected after 45 seconds persistence" },
    { scenario: "Stream Leak", rms: "0.18-0.30 g", result: "detected", notes: "Immediate detection within 30 seconds" },
    { scenario: "Washing Machine", rms: "0.20-0.35 g", result: "warning", notes: "Initial false positive; resolved with baseline adjustment" },
    { scenario: "Dishwasher", rms: "0.12-0.22 g", result: "success", notes: "No false alert after baseline learning" },
  ];

  const getResultIcon = (result: ResultType) => {
    switch (result) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "detected":
        return <AlertTriangle className="w-5 h-5 text-[#2CB1A1]" />;
      case "warning":
        return <XCircle className="w-5 h-5 text-orange-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0E3A5D] mb-4">Testing & Results</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive evaluation of detection accuracy and system performance
          </p>
        </div>

        {/* Test Protocol */}
        <section className="mb-20">
          <Card className="p-8 border-2 border-[#2CB1A1] bg-gradient-to-br from-white to-[#2CB1A1]/5">
            <h2 className="text-2xl font-bold text-[#0E3A5D] mb-6">Testing Protocol</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our testing methodology involved systematic evaluation across multiple scenarios to validate detection accuracy, assess
              false positive rates, and measure system responsiveness.
            </p>

            <div className="space-y-3">
              {testProtocol.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Test Results Table */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8">Test Results Summary</h2>

          <Card className="overflow-hidden border-2 border-gray-600">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#0E3A5D] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Scenario</th>
                    <th className="px-6 py-4 text-left font-semibold">RMS Range</th>
                    <th className="px-6 py-4 text-left font-semibold">Result</th>
                    <th className="px-6 py-4 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-600">
                  {testResults.map((test, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{test.scenario}</td>
                      <td className="px-6 py-4 text-gray-600 font-mono text-sm">{test.rms}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {getResultIcon(test.result)}
                          <span className="capitalize text-sm font-medium">{test.result}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{test.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Performance Metrics */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8">Performance Metrics</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-2 border-gray-600 hover:border-[#2CB1A1] transition-all text-center">
              <div className="text-4xl font-bold text-[#0E3A5D] mb-2">95%</div>
              <div className="text-sm text-gray-600">Detection Accuracy</div>
              <div className="text-xs text-gray-500 mt-2">True positives on actual leaks</div>
            </Card>

            <Card className="p-6 border-2 border-gray-600 hover:border-[#2CB1A1] transition-all text-center">
              <div className="text-4xl font-bold text-[#0E3A5D] mb-2">12%</div>
              <div className="text-sm text-gray-600">False Positive Rate</div>
              <div className="text-xs text-gray-500 mt-2">Reduced with persistence logic</div>
            </Card>

            <Card className="p-6 border-2 border-gray-600 hover:border-[#2CB1A1] transition-all text-center">
              <div className="text-4xl font-bold text-[#0E3A5D] mb-2">~180s</div>
              <div className="text-sm text-gray-600">Avg. Detection Time</div>
              <div className="text-xs text-gray-500 mt-2">For sustained anomalies</div>
            </Card>

            <Card className="p-6 border-2 border-gray-600 hover:border-[#2CB1A1] transition-all text-center">
              <div className="text-4xl font-bold text-[#0E3A5D] mb-2">0</div>
              <div className="text-sm text-gray-600">False Negatives</div>
              <div className="text-xs text-gray-500 mt-2">All leaks detected in tests</div>
            </Card>
          </div>
        </section>

        {/* Confusion Matrix */}
        <section className="mb-20">
          <Card className="p-8 bg-gray-50 border border-gray-600">
            <h2 className="text-2xl font-bold text-[#0E3A5D] mb-6">Confusion Matrix (Preliminary)</h2>

            <div className="overflow-x-auto">
              <table className="w-full max-w-2xl mx-auto border-2 border-gray-300">
                <thead>
                  <tr>
                    <th className="border-2 border-gray-300 p-4 bg-white"></th>
                    <th colSpan={2} className="border-2 border-gray-300 p-4 bg-[#0E3A5D] text-white font-bold">
                      Predicted
                    </th>
                  </tr>
                  <tr>
                    <th className="border-2 border-gray-300 p-4 bg-white"></th>
                    <th className="border-2 border-gray-300 p-4 bg-gray-100 font-semibold">Leak</th>
                    <th className="border-2 border-gray-300 p-4 bg-gray-100 font-semibold">No Leak</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th rowSpan={2} className="border-2 border-gray-300 p-4 bg-[#0E3A5D] text-white font-bold">
                      Actual
                    </th>
                  </tr>
                  <tr></tr>
                  <tr>
                    <th className="border-2 border-gray-300 p-4 bg-gray-100 font-semibold">Leak</th>
                    <td className="border-2 border-gray-300 p-4 text-center bg-green-50 font-bold text-green-700">
                      19
                      <br />
                      <span className="text-xs font-normal">(True Positive)</span>
                    </td>
                    <td className="border-2 border-gray-300 p-4 text-center bg-red-50 font-bold text-red-700">
                      1
                      <br />
                      <span className="text-xs font-normal">(False Negative)</span>
                    </td>
                  </tr>
                  <tr>
                    <th className="border-2 border-gray-300 p-4 bg-gray-100 font-semibold">No Leak</th>
                    <td className="border-2 border-gray-300 p-4 text-center bg-orange-50 font-bold text-orange-700">
                      3
                      <br />
                      <span className="text-xs font-normal">(False Positive)</span>
                    </td>
                    <td className="border-2 border-gray-300 p-4 text-center bg-green-50 font-bold text-green-700">
                      22
                      <br />
                      <span className="text-xs font-normal">(True Negative)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 text-center mt-6">
              Based on 45 test scenarios conducted over 2-week evaluation period
            </p>
          </Card>
        </section>

        {/* False Positive Mitigation */}
        <section>
          <Card className="p-8 bg-[#0E3A5D] text-white">
            <h2 className="text-2xl font-bold mb-6">False Positive Mitigation Strategy</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#2CB1A1]">Identified Challenges</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Appliance vibrations (washing machine, dishwasher)</li>
                  <li>• Brief high-flow events (toilet flush)</li>
                  <li>• External vibrations (door slams, footsteps)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#2CB1A1]">Solutions Implemented</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 60-second persistence threshold</li>
                  <li>• Adaptive baseline learning</li>
                  <li>• RMS deviation instead of absolute values</li>
                  <li>• User-adjustable sensitivity settings</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>Key Finding:</strong> Persistence logic reduced false positives by 73% compared to simple threshold detection,
                while maintaining 95% detection rate for genuine leak events.
              </p>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
