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
  // Updated protocol to match the new trial structure
  const testProtocol: string[] = [
    "Build a vibration baseline from multiple 'water off' runs on the same pipe.",
    "Configure the device to sleep and wake roughly every 10 seconds, sampling a short RMS window on each wake.",
    "Run 55 non-leak trials (idle and normal-use flows) to characterize the false positive rate.",
    "Run 20 small-leak trials to probe sensitivity to very low, persistent leak behavior.",
    "Run 8 medium-leak trials to measure detection at higher, more obvious leak levels.",
    "Classify each wake as 'leak' or 'no leak' using RMS-based case logic; only sustained leak-like classifications generate alerts.",
    "Aggregate results across trials to compute false positives, false negatives, and overall leak detection rates."
  ];

  // Scenario-level summary for the new data
  const testResults: TestRow[] = [
    {
      scenario: "Non-Leak (Idle & Normal Use)",
      rms: "Idle to full-flow bands",
      result: "success",
      notes:
        "55 non-leak trials (water off and normal usage). Only 2 false positives; 53 trials produced no leak alerts."
    },
    {
      scenario: "Small Leak (Low-Level Drip)",
      rms: "Just above idle baseline",
      result: "warning",
      notes:
        "20 small-leak trials. 8 trials triggered alerts; 12 trials were missed (conservative thresholds to avoid noise-driven alerts)."
    },
    {
      scenario: "Medium Leak",
      rms: "Above small-leak band",
      result: "detected",
      notes:
        "8 medium-leak trials. 7 correctly triggered alerts; 1 trial was missed, indicating strong but not perfect detection at this level."
    }
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

  // NEW DATA (trial-level, sleep/wake every ~10 seconds):
  //
  // False positive:        2 / 55 non-leak trials
  // False negative small: 12 / 20 small-leak trials
  // False negative medium: 1 / 8 medium-leak trials
  //
  // Convert to confusion-matrix style counts:
  const smallLeakTrials = 20;
  const smallLeakFN = 12;
  const smallLeakTP = smallLeakTrials - smallLeakFN; // 8

  const mediumLeakTrials = 8;
  const mediumLeakFN = 1;
  const mediumLeakTP = mediumLeakTrials - mediumLeakFN; // 7

  const noLeakTrials = 55;
  const FP = 2;
  const TN = noLeakTrials - FP; // 53

  // Aggregate leak vs. no-leak:
  const TP = smallLeakTP + mediumLeakTP; // 15
  const FN = smallLeakFN + mediumLeakFN; // 13
  const total = TP + TN + FP + FN; // 83

  const overallAccuracy = (((TP + TN) / total) * 100).toFixed(1); // ≈81.9%
  const leakRecall = ((TP / (TP + FN)) * 100).toFixed(1); // ≈53.6%
  const falsePositiveRate = ((FP / (FP + TN)) * 100).toFixed(1); // ≈3.6%

  const smallLeakDetection = ((smallLeakTP / smallLeakTrials) * 100).toFixed(1); // 40.0%
  const mediumLeakDetection = (
    (mediumLeakTP / mediumLeakTrials) *
    100
  ).toFixed(1); // 87.5%

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0E3A5D] mb-4">
            Testing &amp; Results
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trial-level evaluation of RMS-based detection with the device
            waking roughly every 10 seconds to sample vibration and classify
            leaks.
          </p>
        </div>

        {/* Testing Protocol */}
        <section className="mb-20">
          <Card className="p-8 border-2 border-[#2CB1A1] bg-gradient-to-br from-white to-[#2CB1A1]/5">
            <h2 className="text-2xl font-bold text-[#0E3A5D] mb-6">
              Testing Protocol
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We tested the clamp-on sensor in controlled leak and non-leak
              conditions while the firmware cycled between deep sleep and
              short measurement windows. On each wake, the device samples
              vibration, computes RMS, and applies case-based logic to decide
              whether the behavior looks like a leak or normal use.
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

        {/* Scenario Summary Table (updated for new trials) */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8">
            Scenario Results Summary
          </h2>

          <Card className="overflow-hidden border-2 border-gray-600">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#0E3A5D] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">
                      Scenario
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Observed RMS Range
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Result
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-600">
                  {testResults.map((test, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {test.scenario}
                      </td>
                      <td className="px-6 py-4 text-gray-600 font-mono text-sm">
                        {test.rms}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {getResultIcon(test.result)}
                          <span className="capitalize text-sm font-medium">
                            {test.result}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 text-sm">
                        {test.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Performance Metrics */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8">
            Performance Metrics (Trial-Level, 10s Sleep/Wake)
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-2 border-gray-600 hover:border-[#2CB1A1] transition-all text-center">
              <div className="text-4xl font-bold text-[#0E3A5D] mb-2">
                {overallAccuracy}%
              </div>
              <div className="text-sm text-gray-600">
                Overall Classification Accuracy
              </div>
              <div className="text-xs text-gray-500 mt-2">
                {TP + TN} of {total} trials correctly labeled
              </div>
            </Card>

            <Card className="p-6 border-2 border-gray-600 hover:border-[#2CB1A1] transition-all text-center">
              <div className="text-4xl font-bold text-[#0E3A5D] mb-2">
                {leakRecall}%
              </div>
              <div className="text-sm text-gray-600">
                Leak Detection (Small + Medium)
              </div>
              <div className="text-xs text-gray-500 mt-2">
                {TP} / {TP + FN} leak trials triggered an alert
              </div>
            </Card>

            <Card className="p-6 border-2 border-gray-600 hover:border-[#2CB1A1] transition-all text-center">
              <div className="text-4xl font-bold text-[#0E3A5D] mb-2">
                {falsePositiveRate}%
              </div>
              <div className="text-sm text-gray-600">
                False Positive Rate
              </div>
              <div className="text-xs text-gray-500 mt-2">
                {FP} leak alerts on {FP + TN} non-leak trials
              </div>
            </Card>

            <Card className="p-6 border-2 border-gray-600 hover:border-[#2CB1A1] transition-all text-center">
              <div className="text-xl font-bold text-[#0E3A5D] mb-1">
                {smallLeakDetection}% / {mediumLeakDetection}%
              </div>
              <div className="text-sm text-gray-600">
                Small vs. Medium Leak Detection
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Small: {smallLeakTP}/{smallLeakTrials}, Medium:{" "}
                {mediumLeakTP}/{mediumLeakTrials}
              </div>
            </Card>
          </div>
        </section>

        {/* Confusion Matrix */}
        <section className="mb-20">
          <Card className="p-8 bg-gray-50 border border-gray-600">
            <h2 className="text-2xl font-bold text-[#0E3A5D] mb-6">
              Confusion Matrix (Leak vs. No Leak)
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full max-w-2xl mx-auto border-2 border-gray-300">
                <thead>
                  <tr>
                    <th className="border-2 border-gray-300 p-4 bg-white"></th>
                    <th
                      colSpan={2}
                      className="border-2 border-gray-300 p-4 bg-[#0E3A5D] text-white font-bold"
                    >
                      Predicted
                    </th>
                  </tr>
                  <tr>
                    <th className="border-2 border-gray-300 p-4 bg-white"></th>
                    <th className="border-2 border-gray-300 p-4 bg-gray-100 font-semibold">
                      Leak
                    </th>
                    <th className="border-2 border-gray-300 p-4 bg-gray-100 font-semibold">
                      No Leak
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th
                      rowSpan={2}
                      className="border-2 border-gray-300 p-4 bg-[#0E3A5D] text-white font-bold"
                    >
                      Actual
                    </th>
                  </tr>
                  <tr></tr>
                  <tr>
                    <th className="border-2 border-gray-300 p-4 bg-gray-100 font-semibold">
                      Leak
                      <br />
                      <span className="text-[10px] font-normal">
                        (Small + Medium)
                      </span>
                    </th>
                    <td className="border-2 border-gray-300 p-4 text-center bg-green-50 font-bold text-green-700">
                      {TP}
                      <br />
                      <span className="text-xs font-normal">True Positive</span>
                    </td>
                    <td className="border-2 border-gray-300 p-4 text-center bg-red-50 font-bold text-red-700">
                      {FN}
                      <br />
                      <span className="text-xs font-normal">False Negative</span>
                    </td>
                  </tr>
                  <tr>
                    <th className="border-2 border-gray-300 p-4 bg-gray-100 font-semibold">
                      No Leak
                      <br />
                      <span className="text-[10px] font-normal">
                        (Normal-use / Idle)
                      </span>
                    </th>
                    <td className="border-2 border-gray-300 p-4 text-center bg-orange-50 font-bold text-orange-700">
                      {FP}
                      <br />
                      <span className="text-xs font-normal">False Positive</span>
                    </td>
                    <td className="border-2 border-gray-300 p-4 text-center bg-green-50 font-bold text-green-700">
                      {TN}
                      <br />
                      <span className="text-xs font-normal">True Negative</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 text-center mt-6">
              Based on {total} trial-level tests with firmware waking from sleep
              approximately every 10 seconds: {smallLeakTrials} small-leak
              trials, {mediumLeakTrials} medium-leak trials, and {noLeakTrials}{" "}
              non-leak trials. Leak category combines small and medium leaks.
            </p>
          </Card>
        </section>

        {/* False Positive Mitigation */}
        <section>
          <Card className="p-8 bg-[#0E3A5D] text-white">
            <h2 className="text-2xl font-bold mb-6">
              False Positive Mitigation Strategy
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#2CB1A1]">
                  Observed Behavior
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>
                    • Across {noLeakTrials} non-leak trials (idle and
                    normal-use), only {FP} false positives were observed.
                  </li>
                  <li>
                    • Small leaks were detected in {smallLeakTP} of{" "}
                    {smallLeakTrials} trials ({smallLeakDetection}%); medium
                    leaks in {mediumLeakTP} of {mediumLeakTrials} trials (
                    {mediumLeakDetection}%).
                  </li>
                  <li>
                    • Missed small leaks ({smallLeakFN} trials) reflect a
                    conservative threshold to avoid noise-driven alerts.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#2CB1A1]">
                  Logic Used
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• RMS bands derived from measured vibration levels.</li>
                  <li>
                    • Device wakes roughly every 10 seconds, samples vibration,
                    then returns to sleep if readings look like &quot;off&quot;
                    or normal use.
                  </li>
                  <li>
                    • Leak alerts are only raised when leak-like vibration
                    persists across multiple wake cycles.
                  </li>
                  <li>
                    • Future work: adjust thresholds and persistence rules to
                    recover more small-leak cases without increasing the{" "}
                    {falsePositiveRate}% false positive rate.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg:white/10 bg-white/10 rounded-lg backdrop-blur-sm text-sm text-gray-600 leading-relaxed">
              <strong>Key Takeaway:</strong> With the current RMS bands,
              persistence logic, and 10-second sleep/wake cycle, the prototype
              achieved {overallAccuracy}% overall accuracy across {total}{" "}
              trial-level tests, a {falsePositiveRate}% false positive rate on{" "}
              {noLeakTrials} non-leak trials, and {leakRecall}% combined
              detection on small and medium leaks (
              {smallLeakDetection}% small-leak,{" "}
              {mediumLeakDetection}% medium-leak detection).
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
