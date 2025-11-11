import React from "react";
import { Card } from "@/components/ui/card";
import { Calendar, CheckCircle, Clock } from "lucide-react";

export default function Timeline() {
  const milestones = [
    { phase: "Concept & Research", date: "Aug 2025", status: "completed", tasks: ["Problem identification", "Market research", "Technology evaluation", "Team formation"] },
    { phase: "Prototype Design", date: "Sep 2025", status: "completed", tasks: ["Hardware selection", "3D modeling", "Circuit design", "Initial BOM"] },
    { phase: "Firmware Development", date: "Sep-Nov 2025", status: "completed", tasks: ["ESP32 setup", "Sensor integration", "RMS algorithm", "Baseline learning"] },
    { phase: "Mobile App Development", date: "Aug-Oct 2025", status: "completed", tasks: ["Flutter setup", "Supabase integration", "UI/UX design", "Push notifications"] },
    { phase: "Cloud Infrastructure", date: "Sep 2025", status: "completed", tasks: ["Database schema", "API endpoints", "Authentication", "Real-time sync"] },
    { phase: "Enclosure & Assembly", date: "Oct 2025", status: "completed", tasks: ["3D printing", "Assembly jigs", "Velcro mounting", "First prototype"] },
    { phase: "Testing & Validation", date: "Oct 2025", status: "completed", tasks: ["Baseline testing", "Leak simulation", "False positive analysis", "Battery profiling"] },
    { phase: "Poster & Demo", date: "Nov 2025", status: "completed", tasks: ["Poster design", "Demo preparation", "Documentation", "Final presentation"] },
    { phase: "Future Enhancements", date: "Dec 2025+", status: "planned", tasks: ["Deep sleep implementation", "iOS app", "OTA updates"] }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0E3A5D] mb-4">
            Project Timeline
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Development milestones from concept to demonstration
          </p>
        </div>

        {/* Timeline Visualization */}
        <section className="mb-12">
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#0E3A5D] via-[#2CB1A1] to-gray-300"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const isLeft = index % 2 === 0;
                const isCompleted = milestone.status === "completed";

                return (
                  <div key={index} className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Timeline dot */}
                    <div
                      className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white shadow-lg items-center justify-center z-10"
                      style={{ background: isCompleted ? "linear-gradient(135deg, #0E3A5D 0%, #2CB1A1 100%)" : "#E5E7EB" }}
                    >
                      {isCompleted ? <CheckCircle className="w-6 h-6 text-white" /> : <Clock className="w-6 h-6 text-gray-400" />}
                    </div>

                    {/* Content card */}
                    <div className={`w-full md:w-5/12 ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                      <Card
                        className={`p-6 border-2 transition-all hover:shadow-xl ${
                          isCompleted ? "border-[#2CB1A1] bg-gradient-to-br from-white to-[#2CB1A1]/5" : "border-gray-200"
                        }`}
                      >
                        <div className="flex items-start gap-3 mb-4 md:hidden">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                              isCompleted ? "bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1]" : "bg-gray-200"
                            }`}
                          >
                            {isCompleted ? <CheckCircle className="w-5 h-5 text-white" /> : <Clock className="w-5 h-5 text-gray-400" />}
                          </div>
                          <div>
                            <div
                              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-2"
                              style={{
                                backgroundColor: isCompleted ? "#2CB1A1" : "#E5E7EB",
                                color: isCompleted ? "white" : "#6B7280"
                              }}
                            >
                              <Calendar className="w-3 h-3" />
                              {milestone.date}
                            </div>
                          </div>
                        </div>

                        <div className="hidden md:block">
                          <div
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-2"
                            style={{
                              backgroundColor: isCompleted ? "#2CB1A1" : "#E5E7EB",
                              color: isCompleted ? "white" : "#6B7280"
                            }}
                          >
                            <Calendar className="w-3 h-3" />
                            {milestone.date}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-[#0E3A5D] mb-3">{milestone.phase}</h3>

                        <ul className="space-y-2">
                          {milestone.tasks.map((task, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${isCompleted ? "bg-[#2CB1A1]" : "bg-gray-400"}`}></div>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Summary Stats */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8 text-center">Project Statistics</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center border-2 border-gray-200 hover:border-[#2CB1A1] transition-all">
              <div className="text-4xl font-bold text-[#0E3A5D] mb-2">5</div>
              <div className="text-sm text-gray-600">Months Duration</div>
            </Card>

            <Card className="p-6 text-center border-2 border-gray-200 hover:border-[#2CB1A1] transition-all">
              <div className="text-4xl font-bold text-[#0E3A5D] mb-2">4</div>
              <div className="text-sm text-gray-600">Team Members</div>
            </Card>

            <Card className="p-6 text-center border-2 border-gray-200 hover:border-[#2CB1A1] transition-all">
              <div className="text-4xl font-bold text-[#0E3A5D] mb-2">4</div>
              <div className="text-sm text-gray-600">Major Prototypes</div>
            </Card>

            <Card className="p-6 text-center border-2 border-gray-200 hover:border-[#2CB1A1] transition-all">
              <div className="text-4xl font-bold text-[#0E3A5D] mb-2">18</div>
              <div className="text-sm text-gray-600">Test Scenarios</div>
            </Card>
          </div>
        </section>

        {/* Gantt Chart (public image) */}
        <section className="mt-20">
          <Card className="p-8 bg-gray-50 border border-gray-200">
            <div className="flex items-center justify-between gap-4 mb-6">
              <h2 className="text-2xl font-bold text-[#0E3A5D]">Gantt Chart Overview</h2>
              <a
                href="/gantt-timeline.png"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-[#0E3A5D] hover:underline"
              >
                Open full size
              </a>
            </div>

            <div className="rounded-lg border bg-white overflow-hidden">
              <img
                src="/gantt-timeline.png"
                alt="Project timeline Gantt chart"
                className="w-full h-auto block"
              />
            </div>

            <p className="text-xs text-gray-500 mt-3">
              Note: chart reflects planned vs. actual dates through the latest iteration.
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
}
