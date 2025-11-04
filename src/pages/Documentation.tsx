// src/pages/Documentation.tsx
import React, { useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Download,
  Github,
  FileSpreadsheet,
  Presentation,
  Book,
} from "lucide-react";

/** ---- Hard-coded BOM copied from PartsList ---- */
type BomItem = {
  item: string;
  qty: number | string;
  cost: string; // e.g. "$2.50", "$6", "50g"
  link: string;
};

const bomItems: BomItem[] = [
  {
    item: "FireBeetle ESP32-E IoT Microcontroller",
    qty: 1,
    cost: "$15",
    link: "https://www.dfrobot.com/product-2195.html",
  },
  {
    item: "ADXL335 Accelerometer Module",
    qty: 1,
    cost: "$2.50",
    link: "https://www.amazon.com/gp/product/B094NHTPKR/ref=ox_sc_act_title_1?smid=A3KCMC2VCXFGL9&th=1",
  },
  {
    item: "3.7V 4400mAh Li-Po Battery",
    qty: 1,
    cost: "$6",
    link: "https://www.amazon.com/dp/B0BJKFJ227?ref=ppx_yo2ov_dt_b_fed_asin_title",
  },
  {
    item: 'Velcro Strap (1.5" width)',
    qty: 1,
    cost: "$3",
    link: "https://www.walmart.com/ip/VELCRO-USA-Inc-Industrial-Strength-Sticky-Back-Hook-Loop-Fastener-Strips-4-x-2-Black/19311524?wmlspartner=wlpa&selectedSellerId=0&wl13=1024&gclsrc=aw.ds&adid=2222222227719311524_117755028669_12420145346&wl0=&wl1=g&wl2=c&wl3=501107745824&wl4=pla-394283752452&wl5=9010995&wl6=&wl7=&wl8=&wl9=pla&wl10=8175035&wl11=local&wl12=19311524&veh=sem_LIA&gclsrc=aw.ds&gad_source=1&gad_campaignid=12420145346&gbraid=0AAAAADmfBIr0hAjuRk-897OnEGwUbASb6&gclid=Cj0KCQiA5abIBhCaARIsAM3-zFWFnHAZFaDSyb4AFpOj96Gnc3_zBIPU0c9SMaiis6qF6LBwc38WpIYaAhbTEALw_wcB",
  },
  {
    item: "3D Printing Filament (PLA)",
    qty: "50g",
    cost: "$2.00",
    link: "https://atomicfilament.com/products/black-pla-filament",
  },
  {
    item: "Brass Screws M3 (6 pack)",
    qty: 1,
    cost: "$1.50",
    link: "https://www.lowes.com/pd/Hillman-8-32-x-1-2-in-Slotted-Drive-Machine-Screws-4-Count/3035901?store=177&cm_mmc=shp-_-c-_-prd-_-hdw-_-ggl-_-PMAX_HDW_000_Priority_Item-_-3035901-_-local-_-0-_-0&gclsrc=aw.ds&gad_source=1&gad_campaignid=21797082881&gbraid=0AAAAAD2B2W-Pm1IYCwRHSMgDUhLmFWn6h&gclid=Cj0KCQiA5abIBhCaARIsAM3-zFXQcRKyo4vYyL2i9PrfmvSzaFWBRmEmIK_CIaQytMDb3yMwv6W8bLIaAsp3EALw_wcB",
  },
  {
    item: "Resistors (2x 10kΩ)",
    qty: 1,
    cost: "$0.20",
    link: "https://www.digikey.com/en/products/detail/stackpole-electronics-inc/CF14JT4K70/1830366?gclsrc=aw.ds&gad_source=1&gad_campaignid=20682878391&gbraid=0AAAAADrbLlgb8gJQ6J1kcKvIjfq2-lC1x&gclid=Cj0KCQiA5abIBhCaARIsAM3-zFVw2BcGZrDs85geLEBjB9UmZ9qvf2ijZBfmhUmqiZ3h1JbpAkflB2IaApwSEALw_wcB",
  },
  {
    item: "Jumper Wires x10 (Male-Male)",
    qty: 1,
    cost: "$2",
    link: "https://www.adafruit.com/product/1957?srsltid=AfmBOooGsyi4KqcGJqzcJNcyJdSbAl943DiR-bqoieDGuh1_y6BzBXvofE8",
  },
  {
    item: "USB-C Cable (charging)",
    qty: 1,
    cost: "$6",
    link: "https://www.amazon.com/Amazon-Basics-Charger-480Mbps-Certified/dp/B01GGKYN0A/ref=sr_1_7_ffob_sspa?dib=eyJ2IjoiMSJ9.kD_UX5cfSPk9-oqnhWXGj8CAbSOafH6GFMHA33knmhTjJySJfMCGsZLd9Ok09ZUQ6MqtaSn3tFi_bDtUD0NnxJEwV_oFVLj3Ylknc5-QkBSWykClXICeZX-TrTCSlUwNiAO01PDRSdqwdCNLhLnbhe6JXU9qx9jyyxIovfWj1COUIXcSqMi885JZS-Upv_KC9x4SqkwbudYx9ar8HNT3hRc1dgcakQPDsupHFYg1sEM.ktyLaCMcEVhDwJPFIxqUJSCUo-rsRYJmbTl5CvCfkd0&dib_tag=se&keywords=usb-c+charger&qid=1762283092&sr=8-7-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1",
  },
  {
    item: "Heat Shrink Tubing",
    qty: "1ft",
    cost: "$1.00",
    link: "https://www.amazon.com/650pcs-Shrink-Tubing-innhom-Approved/dp/B07WWWPR2X/ref=sr_1_6?dib=eyJ2IjoiMSJ9.afAtOFc0AWv7IewHnY-SsuN5uE2l0bfL-h5TpNvDnE6kfQoqZkYohyqoxSNuMUcN_WNKaZcK90NvFGHhgy-ATxUo2xlVY1iVJF70EdInhxSFmSUhiM8_FjuUkms3YpVmmAsvh-AeOUPRW-ZONGB63Ffs5WEviLLJj3lcvO1fz9Nvp4-j3OuXJFpR_GMq8_4fzU8J-2Vh9LxqaReMRHN7da1Ez8rgElSgprNg1U8fnv8.Dlip_atTTl9fUNwMOXt7GzO38fO6ZNSqZG1FdQWqPLE&dib_tag=se&keywords=heat+shrink+tubing&qid=1762283113&sr=8-6",
  },
];

/** Utility: build and trigger a CSV download from bomItems */
function downloadBomCsv(filename = "bom.csv") {
  const headers = ["Item", "Quantity", "Est. Cost", "Link"];
  const rows = bomItems.map((b) => [b.item, String(b.qty), b.cost, b.link]);

  // Escape CSV fields: wrap in quotes and double any internal quotes
  const esc = (v: string) => `"${v.replace(/"/g, '""')}"`;
  const csv =
    "\uFEFF" + // BOM so Excel opens as UTF-8
    [headers, ...rows].map((r) => r.map(esc).join(",")).join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/** ---------------- Component ---------------- */
export default function Documentation() {
  const handleBomDownload = useCallback(() => downloadBomCsv(), []);

  const documents = [
    {
      title: "Final Project Report",
      description:
        "Comprehensive 60-page report covering all aspects of design, implementation, testing, and results",
      icon: FileText,
      format: "PDF",
      size: "8.5 MB",
      pages: "60 pages",
    },
    {
      title: "Project Poster",
      description:
        "Academic poster summarizing project goals, methods, results, and conclusions for demonstration",
      icon: Presentation,
      format: "PDF",
      size: "12 MB",
      pages: '36" x 48"',
    },
    {
      title: "Presentation Slides",
      description:
        "PowerPoint presentation used for final project defense and demonstration",
      icon: Presentation,
      format: "PPTX",
      size: "25 MB",
      pages: "45 slides",
    },
    {
      title: "Bill of Materials (BOM)",
      description:
        "Complete parts list with quantities, costs, suppliers, and part numbers",
      icon: FileSpreadsheet,
      format: "CSV/Excel",
      size: "3 KB",
      pages: "1 sheet",
    },
    {
      title: "User Manual",
      description: "Installation, setup, and operation guide for end users",
      icon: Book,
      format: "PDF",
      size: "2.3 MB",
      pages: "16 pages",
    },
    {
      title: "Technical Specification",
      description:
        "Detailed technical specifications, schematics, and design documentation",
      icon: FileText,
      format: "PDF",
      size: "5.1 MB",
      pages: "28 pages",
    },
  ];

  const repositories = [
    {
      name: "leak-detector-firmware",
      description:
        "ESP32 firmware source code, build instructions, and configuration files",
      language: "C++",
      url: "#",
    },
    {
      name: "leak-detector-mobile",
      description: "Flutter/Dart mobile application for Android and iOS",
      language: "Dart",
      url: "#",
    },
    {
      name: "leak-detector-hardware",
      description:
        "CAD files, schematics, PCB layouts, and 3D printable enclosure models",
      language: "STEP/STL",
      url: "#",
    },
    {
      name: "leak-detector-docs",
      description:
        "Project documentation, reports, presentations, and supplementary materials",
      language: "Markdown",
      url: "#",
    },
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
              const isBom = doc.title === "Bill of Materials (BOM)";
              return (
                <Card
                  key={index}
                  className="p-6 border-2 border-gray-200 hover:border-[#2CB1A1] transition-all hover:shadow-lg"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-[#0E3A5D] mb-1 text-lg">
                        {doc.title}
                      </h3>
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

                  {isBom ? (
                    <Button
                      onClick={handleBomDownload}
                      className="w-full bg-[#2CB1A1] hover:bg-[#2CB1A1]/90"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download BOM (CSV)
                    </Button>
                  ) : (
                    <Button className="w-full bg-[#2CB1A1] hover:bg-[#2CB1A1]/90">
                      <Download className="w-4 h-4 mr-2" />
                      Download {doc.format}
                    </Button>
                  )}
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
            <Button
              variant="outline"
              className="border-[#0E3A5D] text-[#0E3A5D] hover:bg-[#0E3A5D] hover:text-white"
            >
              <Github className="w-4 h-4 mr-2" />
              View Organization
            </Button>
          </div>

          <div className="space-y-4">
            {repositories.map((repo, index) => (
              <Card
                key={index}
                className="p-6 border-2 border-gray-200 hover:border-[#2CB1A1] transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Github className="w-6 h-6 text-[#0E3A5D]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0E3A5D] mb-1">
                        {repo.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {repo.description}
                      </p>
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
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8">Quick Access</h2>

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

            {/* Make this one trigger the same CSV download */}
            <button
              onClick={handleBomDownload}
              className="text-left rounded-xl border-2 border-gray-200 hover:border-[#2CB1A1] transition-all cursor-pointer p-6"
            >
              <div className="text-center">
                <FileSpreadsheet className="w-10 h-10 text-[#0E3A5D] mx-auto mb-3" />
                <h3 className="font-bold text-[#0E3A5D] mb-2">BOM + Specs</h3>
                <p className="text-xs text-gray-600">CSV & PDF (3 KB)</p>
              </div>
            </button>
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
                <Button className="bg-white/10 border-white/20 text-white hover:bg-white/20" variant="outline">
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
              Department of Electrical &amp; Computer Engineering, Georgia Southern University.
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
