import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";

// Pages
import Home from "@/pages/Home";
import ProjectBackground from "@/pages/ProjectBackground";
import SystemDiagram from "@/pages/SystemDiagram";
import PartsList from "@/pages/PartsList";
import ClampEnclosure from "@/pages/ClampEnclosure";
import Firmware from "@/pages/Firmware";
import MobileApp from "@/pages/MobileApp";
import CloudData from "@/pages/CloudData";
import TestingResults from "@/pages/TestingResults";
import Sustainability from "@/pages/Sustainability";
import Timeline from "@/pages/Timeline";
import FutureWork from "@/pages/FutureWork";
import ProfessionalComponents from "@/pages/ProfessionalComponents";
import LessonsLearned from "@/pages/LessonsLearned";
import Documentation from "@/pages/Documentation";
import TeamContact from "@/pages/TeamContact";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wraps all routes */}
        <Route element={<Layout />}>
          {/* Home */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          {/* Main sections (keep paths in sync with createPageUrl) */}
          <Route path="/project-background" element={<ProjectBackground />} />
          <Route path="/system-diagram" element={<SystemDiagram />} />
          <Route path="/parts-list" element={<PartsList />} />
          <Route path="/clamp-enclosure" element={<ClampEnclosure />} />
          <Route path="/firmware" element={<Firmware />} />
          <Route path="/mobile-app" element={<MobileApp />} />
          <Route path="/cloud-data" element={<CloudData />} />
          <Route path="/testing-results" element={<TestingResults />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/future-work" element={<FutureWork />} />
          <Route path="/professional-components" element={<ProfessionalComponents />} />
          <Route path="/lessons-learned" element={<LessonsLearned />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/team-contact" element={<TeamContact />} />

          {/* 404 → Home (or make a dedicated NotFound page) */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
