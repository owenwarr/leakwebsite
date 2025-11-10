// src/pages/Documentation.tsx
import React, { useCallback, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Download,
  Github,
  FileSpreadsheet,
  Presentation,
  Book,
  ExternalLink,
} from "lucide-react";
import JSZip from "jszip";

/** ========= Types ========= */
type DriveKind = "doc" | "slides" | "sheets" | "file";
type ExportFormat = "pdf" | "docx" | "pptx" | "xlsx";
type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type DocItem = {
  title: string;
  description: string;
  icon: IconType;
  format: string; // display-only
  size: string;   // display-only
  pages: string;  // display-only
  driveId?: string;
  driveKind?: DriveKind;
  downloadHref?: string;   // absolute URL override
  viewHref?: string;       // absolute URL override
  exportFormat?: ExportFormat; // controls Drive export type
};

/** ========= Hard-coded BOM copied from PartsList ========= */
type BomItem = {
  item: string;
  qty: number | string;
  cost: string;
  link: string;
};

const bomItems: BomItem[] = [
  { item: "FireBeetle ESP32-E IoT Microcontroller", qty: 1, cost: "$15", link: "https://www.dfrobot.com/product-2195.html" },
  { item: "ADXL335 Accelerometer Module", qty: 1, cost: "$2.50", link: "https://www.amazon.com/gp/product/B094NHTPKR/ref=ox_sc_act_title_1?smid=A3KCMC2VCXFGL9&th=1" },
  { item: "3.7V 4400mAh Li-Po Battery", qty: 1, cost: "$6", link: "https://www.amazon.com/dp/B0BJKFJ227?ref=ppx_yo2ov_dt_b_fed_asin_title" },
  { item: 'Velcro Strap (1.5" width)', qty: 1, cost: "$3", link: "https://www.walmart.com/ip/VELCRO-USA-Inc-Industrial-Strength-Sticky-Back-Hook-Loop-Fastener-Strips-4-x-2-Black/19311524" },
  { item: "3D Printing Filament (PLA)", qty: "50g", cost: "$2.00", link: "https://atomicfilament.com/products/black-pla-filament" },
  { item: "Brass Screws M3 (6 pack)", qty: 1, cost: "$1.50", link: "https://www.lowes.com/pd/Hillman-8-32-x-1-2-in-Slotted-Drive-Machine-Screws-4-Count/3035901" },
  { item: "Resistors (2x 10kΩ)", qty: 1, cost: "$0.20", link: "https://www.digikey.com/en/products/detail/stackpole-electronics-inc/CF14JT4K70/1830366" },
  { item: "Jumper Wires x10 (Male-Male)", qty: 1, cost: "$2", link: "https://www.adafruit.com/product/1957" },
  { item: "USB-C Cable (charging)", qty: 1, cost: "$6", link: "https://www.amazon.com/Amazon-Basics-Charger-480Mbps-Certified/dp/B01GGKYN0A" },
  { item: "Heat Shrink Tubing", qty: "1ft", cost: "$1.00", link: "https://www.amazon.com/650pcs-Shrink-Tubing-innhom-Approved/dp/B07WWWPR2X" },
];

/** ========= Helpers: Drive URLs + BOM CSV ========= */
function driveViewUrl(id?: string, kind: DriveKind = "doc") {
  if (!id) return undefined;
  if (kind === "doc") return `https://docs.google.com/document/d/${id}/view`;
  if (kind === "slides") return `https://docs.google.com/presentation/d/${id}/preview`;
  if (kind === "sheets") return `https://docs.google.com/spreadsheets/d/${id}/view`;
  return `https://drive.google.com/file/d/${id}/view`;
}

function driveExportUrl(id?: string, kind: DriveKind = "doc", fmt?: ExportFormat) {
  if (!id) return undefined;
  const effectiveFmt = fmt ?? (kind === "doc" ? "pdf" : kind === "slides" ? "pdf" : kind === "sheets" ? "pdf" : "pdf");

  if (kind === "doc") {
    if (effectiveFmt === "docx") return `https://docs.google.com/document/d/${id}/export?format=docx`;
    return `https://docs.google.com/document/d/${id}/export?format=pdf`;
  }
  if (kind === "slides") {
    if (effectiveFmt === "pptx") return `https://docs.google.com/presentation/d/${id}/export/pptx`;
    return `https://docs.google.com/presentation/d/${id}/export/pdf`;
  }
  if (kind === "sheets") {
    const f = effectiveFmt === "xlsx" ? "xlsx" : "pdf";
    return `https://docs.google.com/spreadsheets/d/${id}/export?format=${f}`;
  }
  return `https://drive.google.com/uc?export=download&id=${id}`;
}

function generateBomCsv(filename = "bom.csv") {
  const headers = ["Item", "Quantity", "Est. Cost", "Link"];
  const rows = bomItems.map((b) => [b.item, String(b.qty), b.cost, b.link]);
  const esc = (v: string) => `"${v.replace(/"/g, '""')}"`;
  const csv = "\uFEFF" + [headers, ...rows].map((r) => r.map(esc).join(",")).join("\n");
  return { filename, content: csv };
}

function triggerBlobDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function guessExt(doc: DocItem): string {
  if (doc.exportFormat) return doc.exportFormat;
  const f = doc.format.toLowerCase();
  if (f.includes("pptx")) return "pptx";
  if (f.includes("word")) return "docx";
  if (f.includes("xlsx") || f.includes("excel")) return "xlsx";
  return "pdf";
}

function safeName(s: string) {
  return s.replace(/[\/\\:*?"<>|]+/g, "").replace(/\s+/g, " ").trim();
}

/** ========= Reusable action buttons (uniform layout) ========= */
function ActionButtons({
  viewUrl,
  downloadUrl,
  downloadExt,          // "pdf" | "pptx" | "docx" | "xlsx"
  onBomDownload,
  downloadFilename,     // suggested filename for non-PDF
  showPlaceholders = true,
}: {
  viewUrl?: string;
  downloadUrl?: string;
  downloadExt?: string;
  onBomDownload?: () => void;
  downloadFilename?: string;
  showPlaceholders?: boolean;
}) {
  const ext = (downloadExt ?? "pdf").toLowerCase();
  const isPdf = ext === "pdf";

  const baseBtn =
    "w-full h-11 text-sm leading-none whitespace-nowrap focus-visible:ring-2 focus-visible:ring-offset-2";

  const driveBtn =
    baseBtn + " bg-[#0E3A5D] text-white hover:bg-[#0C314E] focus-visible:ring-[#2CB1A1]";
  const dlBtn =
    baseBtn + " bg-[#2CB1A1] text-white hover:bg-[#259C8F] focus-visible:ring-[#0E3A5D]";
  const ghostBtn =
    baseBtn + " bg-gray-200 text-gray-500 cursor-not-allowed";

  return (
    <div className="grid grid-cols-2 gap-3">
      {viewUrl ? (
        <a href={viewUrl} target="_blank" rel="noreferrer" className="block w-full">
          <Button className={driveBtn}>
            <ExternalLink className="w-4 h-4 mr-2" />
            <span className="truncate">Open in Drive</span>
          </Button>
        </a>
      ) : showPlaceholders ? (
        <Button disabled aria-disabled className={ghostBtn} title="Not available yet">
          <ExternalLink className="w-4 h-4 mr-2" />
          <span className="truncate">Open in Drive</span>
        </Button>
      ) : (
        <div className="w-full" />
      )}

      {downloadUrl ? (
        <a
          href={downloadUrl}
          target={isPdf ? "_blank" : "_self"}
          rel="noreferrer"
          className="block w-full"
          download={!isPdf ? downloadFilename : undefined}
        >
          <Button className={dlBtn}>
            <Download className="w-4 h-4 mr-2" />
            <span className="truncate">Download</span>
          </Button>
        </a>
      ) : onBomDownload ? (
        <Button onClick={onBomDownload} className={dlBtn}>
          <Download className="w-4 h-4 mr-2" />
          <span className="truncate">Download</span>
        </Button>
      ) : showPlaceholders ? (
        <Button disabled aria-disabled className={ghostBtn} title="Not available yet">
          <Download className="w-4 h-4 mr-2" />
          <span className="truncate">Download</span>
        </Button>
      ) : (
        <div className="w-full" />
      )}
    </div>
  );
}

/** ========= Page Component ========= */
export default function Documentation() {
  const [zipping, setZipping] = useState(false);

  const handleBomDownload = useCallback(() => {
    const { filename, content } = generateBomCsv();
    triggerBlobDownload(new Blob([content], { type: "text/csv;charset=utf-8;" }), filename);
  }, []);

  const documents: DocItem[] = useMemo(() => [
    // --- Blocks before Final Project Report ---
    {
      title: "Formal Project Proposal",
      description: "Initial scope, objectives, background research, and proposed approach.",
      icon: FileText,
      format: "PDF",
      size: "460 KB",
      pages: "17 pages",
      driveId: "15_Tfl6mgKyUBHBJX7zCnFbB299febH6H",
      driveKind: "doc",
      exportFormat: "pdf",
    },
    {
      title: "Ethics Presentation",
      description: "Slide deck covering ethical considerations, risks, and mitigations.",
      icon: Presentation,
      format: "PDF",
      size: "474 KB",
      pages: "18 pages",
      driveId: "1S1Z4VowbqSkpc1xgpE9Srcek8GLnmUqa",
      driveKind: "slides",
      exportFormat: "pdf",
    },
    {
      title: "Ethics Report",
      description: "Written analysis of ethical concerns, mitigations, and policy alignment.",
      icon: FileText,
      format: "Word (.docx)",
      size: "82 KB",
      pages: "3 pages",
      downloadHref: "https://drive.google.com/uc?export=download&id=1hRQk2NyQBqJ2KpFXw_7XO0QPRm0Lf_Gz",
      exportFormat: "docx",
    },
    {
      title: "Midterm Presentation",
      description: "Slide deck summarizing progress, prototype status, and next steps.",
      icon: Presentation,
      format: "PDF",
      size: "644 KB",
      pages: "20 pages",
      driveId: "1JfePofnCtRxtr0oK3yDUDOosV-BL_JAR",
      driveKind: "slides",
      exportFormat: "pdf",
    },
    {
      title: "Sustainability Presentation",
      description: "Environmental footprint, materials, energy, packaging, and EOL considerations.",
      icon: Presentation,
      format: "PDF",
      size: "443 KB",
      pages: "21 pages",
      driveId: "1ygLV5DHc4G7iC-gxCRub8RvQ0-aT197z",
      driveKind: "slides",
      exportFormat: "pdf",
    },
    {
      title: "Sustainability Report",
      description: "Written analysis of sustainability concerns, environmental footprint, materials, energy, packaging, and EOL considerations.",
      icon: FileText,
      format: "Word (.docx)",
      size: "29.4 KB",
      pages: "3 pages",
      downloadHref: "https://drive.google.com/uc?export=download&id=1LioDScJSDcVE7i7PTQx4he9KTxADuS_1",
      exportFormat: "docx",
    },
    // --- Original bundle ---
    {
      title: "Final Project Report",
      description: "Comprehensive 60-page report covering all aspects of design, implementation, testing, and results",
      icon: FileText,
      format: "PDF",
      size: "2.8 MB",
      pages: "44 pages",
      driveId: "1yWzPcXL1cdz8Mm2xrxSQJWcQeR4RLwkRLoLpkhhNz-Y",
      driveKind: "doc",
      exportFormat: "pdf",
    },
    {
      title: "Project Poster",
      description: "Academic poster summarizing project goals, methods, results, and conclusions for demonstration",
      icon: Presentation,
      format: "PDF",
      size: "12 MB",
      pages: '36" x 48"',
      driveId: "REPLACE_WITH_POSTER_FILE_ID",
      driveKind: "file",
    },
    {
      title: "Presentation Slides",
      description: "PowerPoint presentation used for final project defense and demonstration",
      icon: Presentation,
      format: "PPTX",
      size: "25 MB",
      pages: "45 slides",
      driveId: "REPLACE_WITH_FINAL_SLIDES_ID",
      driveKind: "slides",
      exportFormat: "pptx",
    },
    {
      title: "Bill of Materials (BOM)",
      description: "Complete parts list with quantities, costs, suppliers, and part numbers",
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
      driveId: "REPLACE_WITH_USER_MANUAL_DOC_ID",
      driveKind: "doc",
      exportFormat: "pdf",
    },
    {
      title: "Technical Specification",
      description: "Detailed technical specifications, schematics, and design documentation",
      icon: FileText,
      format: "PDF",
      size: "5.1 MB",
      pages: "28 pages",
      driveId: "REPLACE_WITH_TECH_SPEC_DOC_ID",
      driveKind: "doc",
      exportFormat: "pdf",
    },
  ], []);

  // Build per-item view/download URLs
  const withLinks = useMemo(() => {
    return documents.map((doc) => {
      const viewUrl = doc.viewHref ?? (doc.driveId ? driveViewUrl(doc.driveId, doc.driveKind) : undefined);
      const downloadUrl = doc.downloadHref ?? (doc.driveId ? driveExportUrl(doc.driveId, doc.driveKind, doc.exportFormat) : undefined);
      return { ...doc, viewUrl, downloadUrl } as DocItem & { viewUrl?: string; downloadUrl?: string };
    });
  }, [documents]);

  // ---- Download All as ZIP ----
  const handleDownloadAll = useCallback(async () => {
    if (zipping) return;
    setZipping(true);
    try {
      const zip = new JSZip();
      const errors: string[] = [];

      // 1) Add BOM CSV
      const bom = generateBomCsv("bom.csv");
      zip.file(bom.filename, bom.content);

      // 2) Add every document that has a downloadable URL
      const tasks = withLinks.map(async (doc) => {
        if (doc.title === "Bill of Materials (BOM)") return; // already added
        const url = (doc as any).downloadUrl as string | undefined;
        if (!url) return;
        const ext = guessExt(doc);
        const fname = `${safeName(doc.title)}.${ext}`;
        try {
          const res = await fetch(url, { credentials: "omit" });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const blob = await res.blob();
          zip.file(fname, blob);
        } catch (e) {
          console.warn("Failed to fetch:", doc.title, e);
          errors.push(doc.title);
        }
      });

      await Promise.allSettled(tasks);

      const zipBlob = await zip.generateAsync({ type: "blob" });
      triggerBlobDownload(zipBlob, "project-documents.zip");

      if (errors.length) {
        alert(
          `Downloaded ZIP, but some files could not be fetched:\n\n- ${errors.join(
            "\n- "
          )}\n\nMake sure those Drive files are shared as "Anyone with the link (Viewer)".`
        );
      }
    } finally {
      setZipping(false);
    }
  }, [withLinks, zipping]);

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
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8">Project Documents</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {withLinks.map((doc, index) => {
              const Icon = doc.icon;
              const isBom = doc.title === "Bill of Materials (BOM)";
              const ext = (doc.exportFormat ?? "pdf").toLowerCase();
              const isPdf = ext === "pdf";

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

                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{doc.description}</p>

                  {/* Uniform action buttons */}
                  <ActionButtons
                    viewUrl={(doc as any).viewUrl}
                    downloadUrl={isBom ? undefined : (doc as any).downloadUrl}
                    downloadExt={ext}
                    onBomDownload={isBom ? handleBomDownload : undefined}
                    downloadFilename={!isPdf ? `${safeName(doc.title)}.${ext}` : undefined}
                    showPlaceholders={true}
                  />
                </Card>
              );
            })}
          </div>
        </section>

        {/* Code Repositories */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#0E3A5D]">Source Code Repositories</h2>
            <Button
              variant="outline"
              className="border-[#0E3A5D] text-[#0E3A5D] hover:bg-[#0E3A5D] hover:text-white"
            >
              <Github className="w-4 h-4 mr-2" />
              View Organization
            </Button>
          </div>

          <div className="space-y-4">
            {[
              {
                name: "leak-detector-firmware",
                description: "ESP32 firmware source code, build instructions, and configuration files",
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
                description: "CAD files, schematics, PCB layouts, and 3D printable enclosure models",
                language: "STEP/STL",
                url: "#",
              },
              {
                name: "leak-detector-docs",
                description: "Project documentation, reports, presentations, and supplementary materials",
                language: "Markdown",
                url: "#",
              },
            ].map((repo, index) => (
              <Card key={index} className="p-6 border-2 border-gray-200 hover:border-[#2CB1A1] transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Github className="w-6 h-6 text-[#0E3A5D]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0E3A5D] mb-1">{repo.name}</h3>
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
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8">Quick Access</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card
              onClick={handleDownloadAll}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleDownloadAll()}
              className={`p-6 text-center border-2 border-gray-200 hover:border-[#2CB1A1] transition-all cursor-pointer select-none ${
                zipping ? "opacity-60 pointer-events-none" : ""
              }`}
              title={zipping ? "Preparing ZIP..." : "Download all documents as a ZIP"}
            >
              <Download className="w-10 h-10 text-[#2CB1A1] mx-auto mb-3" />
              <h3 className="font-bold text-[#0E3A5D] mb-2">{zipping ? "Zipping..." : "All Documents"}</h3>
              <p className="text-xs text-gray-600">ZIP archive</p>
            </Card>

            <Card className="p-6 text-center border-2 border-gray-200 hover:border-[#2CB1A1] transition-all cursor-pointer">
              <FileText className="w-10 h-10 text-[#0E3A5D] mx-auto mb-3" />
              <h3 className="font-bold text-[#0E3A5D] mb-2">CAD Files</h3>
              <p className="text-xs text-gray-600">STEP &amp; STL (8.2 MB)</p>
            </Card>

            <Card className="p-6 text-center border-2 border-gray-200 hover:border-[#2CB1A1] transition-all cursor-pointer">
              <Github className="w-10 h-10 text-[#0E3A5D] mx-auto mb-3" />
              <h3 className="font-bold text-[#0E3A5D] mb-2">Source Code</h3>
              <p className="text-xs text-gray-600">All repositories</p>
            </Card>

            <Card
              onClick={handleBomDownload}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleBomDownload()}
              className="p-6 text-center border-2 border-gray-200 hover:border-[#2CB1A1] transition-all cursor-pointer select-none"
            >
              <FileSpreadsheet className="w-10 h-10 text-[#0E3A5D] mx-auto mb-3" />
              <h3 className="font-bold text-[#0E3A5D] mb-2">BOM + Specs</h3>
              <p className="text-xs text-gray-600">CSV &amp; PDF (3 KB)</p>
            </Card>
          </div>
        </section>

        {/* Licensing */}
        <section>
          <Card className="p-8 bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Open Source Licensing</h2>

            <div className="max-w-3xl mx-auto">
              <p className="text-gray-200 mb-6 leading-relaxed text-center">
                This project is released under the MIT License, encouraging open collaboration
                and adaptation. You are free to use, modify, and distribute this work for any
                purpose, including commercial applications.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-bold mb-3">What you can do:</h3>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li className="flex items-start gap-2"><span>✓</span><span>Commercial use</span></li>
                  <li className="flex items-start gap-2"><span>✓</span><span>Modification</span></li>
                  <li className="flex items-start gap-2"><span>✓</span><span>Distribution</span></li>
                  <li className="flex items-start gap-2"><span>✓</span><span>Private use</span></li>
                </ul>

                <h3 className="font-bold mt-6 mb-3">What you must do:</h3>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li className="flex items-start gap-2"><span>•</span><span>Include license & copyright</span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Provide attribution</span></li>
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
            <h2 className="text-2xl font-bold text-[#0E3A5D] mb-4 text-center">How to Cite This Work</h2>
            <p className="text-sm text-gray-600 text-center mb-4">
              If you use this project in academic work, please cite as follows:
            </p>
            <div className="bg-white rounded-lg p-6 border border-gray-200 font-mono text-sm text-gray-800 max-w-4xl mx-auto">
              Conger, D., Warrington, O., Holder, S., &amp; Waters, J. (2025). <em>Renter-Friendly Leak
              Detector: Non-Invasive Plumbing Monitoring with RMS-Based Anomaly Detection.</em> Senior
              Design Project, Department of Electrical &amp; Computer Engineering, Georgia Southern University.
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
