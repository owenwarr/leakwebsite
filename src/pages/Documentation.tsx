import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Github, FileSpreadsheet, Presentation, Book } from "lucide-react";

export default function Documentation() {
  const documents = [
    {
      title: "Final Project Report",
      description: "Comprehensive 40-page report covering all aspects of design, implementation, testing, and results",
      icon: FileText,
      format: "PDF",
      size: "8.5 MB",
      pages: "40 pages"
    },
    {
      title: "Project Poster",
      description: "Academic poster summarizing project goals, methods, results, and conclusions for demonstration",
      icon: Presentation,
      format: "PDF",
      size: "12 MB",
      pages: "36\" x 48\""
    },
    {
      title: "Presentation Slides",
      description: "PowerPoint presentation used for final project defense and demonstration",
      icon: Presentation,
      format: "PPTX",
      size: "25 MB",
      pages: "45 slides"
    },
    {
      title: "Bill of Materials (BOM)",
      description: "Complete parts list with quantities, costs, suppliers, and part numbers",
      icon: FileSpreadsheet,
      format: "CSV/Excel",
      size: "45 KB",
      pages: "1 sheet"
    },
    {
      title: "User Manual",
      description: "Installation, setup, and operation guide for end users",
      icon: Book,
      format: "PDF",
      size: "2.3 MB",
      pages: "16 pages"
    },
    {
      title: "Technical Specification",
      description: "Detailed technical specifications, schematics, and design documentation",
      icon: FileText,
      format: "PDF",
      size: "5.1 MB",
      pages: "28 pages"
    }
  ];

  const repositories = [
    {
      name: "leak-detector-firmware",
      description: "ESP32 firmware source code, build instructions, and configuration files",
      language: "C++",
      url: "#"
    },
    {
      name: "leak-detector-mobile",
      description: "Flutter/Dart mobile application for Android and iOS",
      language: "Dart",
      url: "#"
    },
    {
      name: "leak-detector-hardware",
      description: "CAD files, schematics, PCB layouts, and 3D printable enclosure models",
      language: "STEP/STL",
      url: "#"
    },
    {
      name: "leak-detector-docs",
      description: "Project documentation, reports, presentations, and supplementary materials",
      language: "Markdown",
      url: "#"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0E3A5D] mb-4">
            Documentation & Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete project documentation, source code, and downloadable resources
          </p>
        </div>

        {/* Documents Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8">
            Project Documents
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <Card key={index} className="p-6 border-2 border-gray-200 hover:border-[#2CB1A1] transition-all hover:shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-[#0E3A5D] mb-1 text-lg">{doc.title}</h3>
                      <div className="flex gap-2 text-xs text-gray-500">
                        <span>{doc.format}</span>
                        <span>•</span>
                        <span>{doc.size}</span>
                        <span>•</span>
                        <span>{doc.pages}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {doc.description}
                  </p>
                  
                  <Button className="w-full bg-[#2CB1A1] hover:bg-[#2CB1A1]/90">
                    <Download className="w-4 h-4 mr-2" />
                    Download {doc.format}
                  </Button>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Code Repositories */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#0E3A5D]">
              Source Code Repositories
            </h2>
            <Button variant="outline" className="border-[#0E3A5D] text-[#0E3A5D] hover:bg-[#0E3A5D] hover:text-white">
              <Github className="w-4 h-4 mr-2" />
              View Organization
            </Button>
          </div>
          
          <div className="space-y-4">
            {repositories.map((repo, index) => (
              <Card key={index} className="p-6 border-2 border-gray-200 hover:border-[#2CB1A1] transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Github className="w-6 h-6 text-[#0E3A5D]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0E3A5D] mb-1">
                        {repo.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">{repo.description}</p>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {repo.language}
                      </span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="md:w-auto w-full">
                    <Github className="w-4 h-4 mr-2" />
                    View Repository
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8">
            Quick Access
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-6 text-center border-2 border-gray-200 hover:border-[#2CB1A1] transition-all cursor-pointer">
              <Download className="w-10 h-10 text-[#2CB1A1] mx-auto mb-3" />
              <h3 className="font-bold text-[#0E3A5D] mb-2">All Documents</h3>
              <p className="text-xs text-gray-600">ZIP archive (52 MB)</p>
            </Card>

            <Card className="p-6 text-center border-2 border-gray-200 hover:border-[#2CB1A1] transition-all cursor-pointer">
              <FileText className="w-10 h-10 text-[#0E3A5D] mx-auto mb-3" />
              <h3 className="font-bold text-[#0E3A5D] mb-2">CAD Files</h3>
              <p className="text-xs text-gray-600">STEP & STL (8.2 MB)</p>
            </Card>

            <Card className="p-6 text-center border-2 border-gray-200 hover:border-[#2CB1A1] transition-all cursor-pointer">
              <Github className="w-10 h-10 text-[#0E3A5D] mx-auto mb-3" />
              <h3 className="font-bold text-[#0E3A5D] mb-2">Source Code</h3>
              <p className="text-xs text-gray-600">All repositories</p>
            </Card>

            <Card className="p-6 text-center border-2 border-gray-200 hover:border-[#2CB1A1] transition-all cursor-pointer">
              <FileSpreadsheet className="w-10 h-10 text-[#0E3A5D] mx-auto mb-3" />
              <h3 className="font-bold text-[#0E3A5D] mb-2">BOM + Specs</h3>
              <p className="text-xs text-gray-600">CSV & PDF (120 KB)</p>
            </Card>
          </div>
        </section>

        {/* Licensing */}
        <section>
          <Card className="p-8 bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Open Source Licensing
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-200 mb-6 leading-relaxed text-center">
                This project is released under the MIT License, encouraging open collaboration 
                and adaptation. You are free to use, modify, and distribute this work for any 
                purpose, including commercial applications.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-bold mb-3">What you can do:</h3>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Commercial use: Build and sell products based on this design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Modification: Adapt and improve the design for your needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Distribution: Share the project with others</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Private use: Use for personal or internal projects</span>
                  </li>
                </ul>
                
                <h3 className="font-bold mt-6 mb-3">What you must do:</h3>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Include the original license and copyright notice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Provide attribution to the original authors</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center mt-6">
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <FileText className="w-4 h-4 mr-2" />
                  View Full License
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Citation */}
        <section className="mt-20">
          <Card className="p-8 bg-gray-50 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#0E3A5D] mb-4 text-center">
              How to Cite This Work
            </h2>
            <p className="text-sm text-gray-600 text-center mb-4">
              If you use this project in academic work, please cite as follows:
            </p>
            <div className="bg-white rounded-lg p-6 border border-gray-200 font-mono text-sm text-gray-800 max-w-4xl mx-auto">
              Conger, D., Warrington, O., Holder, S., & Waters, J. (2025). <em>Renter-Friendly Leak Detector: 
              Non-Invasive Plumbing Monitoring with RMS-Based Anomaly Detection.</em> Senior Design Project, 
              Department of Electrical & Computer Engineering, Georgia Southern University.
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}