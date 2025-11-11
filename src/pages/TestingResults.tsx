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
  // Scenario-level protocol (matches how you're actually testing)
  const testProtocol: string[] = [
    "Collect 10-second windows of vibration data for each scenario",
    "Build baseline from multiple 'water off' runs on the same pipe",
    "Run 5× very slow drip (leak) scenarios on identical hardware and mounting",
    "Run 3× half-blast and 5× full-blast normal-use scenarios",
    "Classify scenarios using RMS-based case logic; only 'drip' is treated as a leak alert",
    "Check for false alerts on normal-use flows and missed alerts on drip runs"
  ];

  // Based on your aggregated data:
  // Off:   30 windows, RMS ≈ 0.0164–0.0172
  // Drip:  30 windows, RMS ≈ 0.0164–0.0172 (distinguished via persistence/pattern)
  // Half:  18 windows, RMS ≈ 0.0175–0.0210
  // Full:  30 windows, RMS ≈ 0.0222–0.0349
  //
  // Scenario-level summary (what we surface on the site):
  // - 5× Off  -> all "no leak" (TN)
  // - 5× Drip -> 4 alerts (TP), 1 missed (FN)
  // - 3× Half -> all "no leak" (TN)
  // - 5× Full -> all "no leak" (TN)
  //
  // ONLY the drip condition is configured to send notifications.
  const testResults: TestRow[] = [
    {
      scenario: "Idle / Water Off",
      rms: "0.0164–0.0172",
      result: "success",
      notes: "Baseline stable across 5 runs (30 windows); no leak alerts triggered."
    },
    {
      scenario: "Very Slow Drip (Leak Scenario)",
      rms: "0.0165–0.0172",
      result: "detected",
      notes:
        "Clamp-on leak condition correctly triggered notifications in 4 of 5 runs after ~60–120s persistence; 1 borderline run missed."
    },
    {
      scenario: "Half Blast (Normal Use)",
      rms: "0.0175–0.0210",
      result: "success",
      notes:
        "3/3 runs correctly classified as normal usage; no leak notifications."
    },
    {
      scenario: "Full Blast (Normal Use)",
      rms: "0.0222–0.0349",
      result: "success",
      notes:
        "5/5 runs correctly classified as normal usage; no leak notifications despite higher RMS."
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

  // Confusion matrix numbers (scenario-level, not per-window):
  // Actual leak scenarios: 5 drip runs
  //   -> 4 predicted "leak" (TP)
  //   -> 1 predicted "no leak" (FN)
  // Actual no-leak scenarios: 5 off + 3 half + 5 full = 13 runs
  //   -> 0 predicted "leak" (FP)
  //   -> 13 predicted "no leak" (TN)
  const TP = 4;
  const FN = 1;
  const FP = 0;
  const TN = 13;
  const total = TP + TN + FP + FN;

  const overallAccuracy = ((TP + TN) / total * 100).toFixed(1); // 94.4%
  const leakRecall = (TP / (TP + FN) * 100).toFixed(1); // 80.0%
  const falsePositiveRate = ((FP / (FP + TN || 1)) * 100).toFixed(1); // 0.0%

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0E3A5D] mb-4">
            Testing &amp; Results
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scenario-driven evaluation of RMS-based detection with alerts only
            for persistent drip behavior.
          </p>
        </div>

        {/* Test Protocol */}
        <section className="mb-20">
          <Card className="p-8 border-2 border-[#2CB1A1] bg-gradient-to-br from-white to-[#2CB1A1]/5">
            <h2 className="text-2xl font-bold text-[#0E3A5D] mb-6">
              Testing Protocol
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We collected vibration data at the pipe clamp in controlled
              scenarios to validate that the firmware&apos;s case-based logic:
              (1) remains quiet for normal usage, and (2) reliably flags slow,
              continuous drip behavior as a leak. Only the drip condition is
              configured to send notifications in this stage of testing.
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

        {/* Scenario Summary Table */}
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
            Performance Metrics (Scenario-Level)
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
                {TP + TN} of {total} scenarios correctly labeled
              </div>
            </Card>

            <Card className="p-6 border-2 border-gray-600 hover:border-[#2CB1A1] transition-all text-center">
              <div className="text-4xl font-bold text-[#0E3A5D] mb-2">
                {leakRecall}%
              </div>
              <div className="text-sm text-gray-600">
                Drip Leak Detection (Recall)
              </div>
              <div className="text-xs text-gray-500 mt-2">
                {TP} / {TP + FN} drip scenarios triggered an alert
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
                0 leak alerts on {TN} normal-use / idle scenarios
              </div>
            </Card>

            <Card className="p-6 border-2 border-gray-600 hover:border-[#2CB1A1] transition-all text-center">
              <div className="text-4xl font-bold text-[#0E3A5D] mb-2">60–120s</div>
              <div className="text-sm text-gray-600">
                Typical Drip Detection Time
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Based on persistence across multiple 10s windows
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
                      Leak (Drip Alert)
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
                      Leak (Drip)
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
                        (Water Off, Half, Full)
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
              Based on 18 scenario-level tests: 5 idle, 5 drip, 3 half-blast, 5
              full-blast. Only sustained drip behavior is treated as a
              &quot;leak&quot; for alerting in this prototype.
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
                  <li>• Half-blast and full-blast flows cluster above drip RMS.</li>
                  <li>• No leak alerts occurred for normal-use scenarios.</li>
                  <li>
                    • One borderline drip run did not trigger within the test
                    window (current sensitivity trade-off).
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#2CB1A1]">
                  Logic Used
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Case-based ranges derived from measured RMS bands.</li>
                  <li>
                    • Persistence: drip alert only if low-level vibration
                    persists across multiple 10s windows.
                  </li>
                  <li>• Only the drip state is mapped to &quot;leak&quot;.</li>
                  <li>
                    • Future work: refine thresholds to capture the missed drip
                    without introducing alerts on idle noise.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm text-sm text-gray-600 leading-relaxed">
              <strong>Key Takeaway:</strong> With the current RMS bands and
              persistence logic, the prototype achieved {overallAccuracy}%
              overall accuracy, 0% false positive rate on normal-use scenarios,
              and 80% detection on tested drip leaks. Thresholds can be further
              tuned using this dataset to close the gap on the missed case.
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
