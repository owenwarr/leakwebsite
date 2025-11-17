import React from "react";
import { Card } from "@/components/ui/card";
import { Database, Lock, Download, Shield, Server, BarChart } from "lucide-react";

export default function CloudData() {
  const tables = [
    {
      name: "profiles",
      description: "User account information and preferences",
      fields: ["username", "fcm_token", "created_at"]
    },
    {
      name: "devices",
      description: "Registered leak detector devices",
      fields: ["device_id", "device_name", "username", "status", "last_updated"]
    },
    {
      name: "leaks",
      description: "Confirmed leak incidents",
      fields: ["id", "device_id", "rms", "occured_at"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0E3A5D] mb-4">
            Cloud & Data Architecture
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Supabase-powered backend with secure data management and real-time sync
          </p>
        </div>

        {/* Overview */}
        <section className="mb-20">
          <Card className="p-8 sm:p-12 border-2 border-[#2CB1A1] bg-gradient-to-br from-white to-[#2CB1A1]/5">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Database className="w-12 h-12 text-[#2CB1A1] mb-4" />
                <h2 className="text-2xl font-bold text-[#0E3A5D] mb-4">
                  Supabase PostgreSQL Backend
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our cloud infrastructure leverages Supabase (PostgreSQL) for scalable, 
                  secure data storage with built-in authentication, real-time subscriptions, 
                  and RESTful API access.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Real-time data synchronization across devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Row-level security for data isolation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Automatic backups and point-in-time recovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">RESTful API with auto-generated documentation</span>
                  </li>
                </ul>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80"
                  alt="Cloud infrastructure"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Database Schema */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8">
            Database Schema
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {tables.map((table, index) => (
              <Card key={index} className="p-6 border-2 border-gray-200 hover:border-[#2CB1A1] transition-all">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] flex items-center justify-center flex-shrink-0">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0E3A5D]">{table.name}</h3>
                    <p className="text-sm text-gray-600">{table.description}</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-xs font-medium text-gray-500 mb-2">Key Fields:</div>
                  <div className="flex flex-wrap gap-2">
                    {table.fields.map((field, idx) => (
                      <code key={idx} className="px-2 py-1 bg-white text-[#0E3A5D] text-xs rounded border border-gray-200 font-mono">
                        {field}
                      </code>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Security & Privacy */}
        <section className="mb-20">
          <Card className="p-8 bg-[#0E3A5D] text-[#0E3A5D]">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <Shield className="w-12 h-12 mb-4 opacity-80" />
                <h2 className="text-2xl font-bold mb-4">
                  Security & Privacy
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We prioritize user data protection with industry-standard security practices 
                  and transparent privacy policies.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Encryption (Planned)</h3>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• TLS 1.3 for data in transit</li>
                      <li>• AES-256 encryption at rest</li>
                      <li>• Secure password hashing (bcrypt)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Access Control</h3>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Row-level security policies</li>
                      <li>• JWT-based authentication</li>
                      <li>• API rate limiting</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Compliance</h3>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• GDPR-compliant data handling</li>
                      <li>• Right to data deletion</li>
                      <li>• Transparent data usage policies</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <Lock className="w-12 h-12 mb-4 opacity-80" />
                <h2 className="text-2xl font-bold mb-4">
                  Data Retention
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We maintain event data for analysis while respecting user privacy and storage efficiency.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Event Data</h3>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• 90-day rolling retention by default</li>
                      <li>• User-configurable retention periods</li>
                      <li> </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">User Data</h3>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Account deletion removes all personal data</li>
                      <li>• No third-party data sharing</li>
					  <li> </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Export Options</h3>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• CSV export of event history (planned)</li>
                      <li>• JSON API for raw data access (planned)</li>
                      <li>• Scheduled reports (planned)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Data Flow */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8">
            Data Flow Pipeline
          </h2>
          
          <Card className="p-8 border-2 border-gray-200">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] text-white flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0E3A5D] mb-2">Device Detection</h3>
                  <p className="text-gray-600">ESP32 firmware detects anomaly and prepares event payload with RMS data, timestamp, and device ID</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] text-white flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0E3A5D] mb-2">Wi-Fi Transmission</h3>
                  <p className="text-gray-600">Device connects to Wi-Fi and POSTs event data to Supabase REST API endpoint</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] text-white flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0E3A5D] mb-2">Database Insert</h3>
                  <p className="text-gray-600">Supabase validates credentials, applies row-level security, and inserts event record</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] text-white flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0E3A5D] mb-2">Real-Time Broadcast</h3>
                  <p className="text-gray-600">Supabase real-time engine broadcasts new event to subscribed mobile clients</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] text-white flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0E3A5D] mb-2">Push Notification</h3>
                  <p className="text-gray-600">Server-side function triggers FCM to send push notification to user's device</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] text-white flex items-center justify-center font-bold flex-shrink-0">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0E3A5D] mb-2">App Update</h3>
                  <p className="text-gray-600">Mobile app receives notification and updates UI with new event details</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Export & Analytics */}
        <section>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-2 border-[#2CB1A1]">
              <Download className="w-10 h-10 text-[#2CB1A1] mb-4" />
              <h3 className="text-xl font-bold text-[#0E3A5D] mb-3">
                Data Export (Planned)
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Users can export their complete event history in CSV or JSON format for 
                external analysis, insurance claims, or personal records.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• CSV export for Excel/Sheets</li>
                <li>• JSON API for programmatic access</li>
                <li>• Filtered exports by date range</li>
                <li>• Device-specific data isolation</li>
              </ul>
            </Card>

            <Card className="p-6 border-2 border-gray-200">
              <BarChart className="w-10 h-10 text-[#0E3A5D] mb-4" />
              <h3 className="text-xl font-bold text-[#0E3A5D] mb-3">
                Analytics (Planned)
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Future versions will include aggregated analytics dashboards for 
                pattern recognition, predictive maintenance, and system optimization.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Historical trend analysis</li>
                <li>• False positive rate tracking</li>
                <li>• Usage pattern insights</li>
                <li>• Comparative benchmarking</li>
              </ul>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}