// src/search/searchIndex.ts
export type SearchItem = {
  title: string;
  path: string;
  keywords?: string[];
};

export const searchIndex: SearchItem[] = [
  { title: "Home", path: "/" },
  { title: "Project Background", path: "/project-background", keywords: ["problem", "solution", "stats"] },
  { title: "System Diagram", path: "/system-diagram", keywords: ["architecture", "block diagram"] },
  { title: "Parts List", path: "/parts-list", keywords: ["BOM", "components"] },
  { title: "Clamp & Enclosure", path: "/clamp-enclosure", keywords: ["3D print", "mechanical"] },
  { title: "Firmware", path: "/firmware", keywords: ["ESP32", "RMS", "accelerometer"] },
  { title: "Mobile App", path: "/mobile-app", keywords: ["Flutter", "Android", "iOS"] },
  { title: "Cloud & Data", path: "/cloud-data", keywords: ["Supabase", "database", "schema"] },
  { title: "Testing & Results", path: "/testing-results", keywords: ["confusion matrix", "metrics"] },
  { title: "Sustainability", path: "/sustainability", keywords: ["battery", "energy", "CO2"] },
  { title: "Timeline", path: "/timeline" },
  { title: "Future Work", path: "/future-work" },
  { title: "Professional Components", path: "/professional-components", keywords: ["ethics", "IP", "safety"] },
  { title: "Lessons Learned", path: "/lessons-learned" },
  { title: "Documentation", path: "/documentation", keywords: ["report", "slides", "zip"] },
  { title: "Team & Contact", path: "/team-contact", keywords: ["email", "advisor"] },
];
