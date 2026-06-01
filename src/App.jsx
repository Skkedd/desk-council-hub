import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import CouncilRoster from "./components/CouncilRoster";
import HQSystemsPanel from "./components/HQSystemsPanel";

import MemberDossierPage from "./pages/MemberDossierPage";
import HomePage from "./pages/HomePage";
import StudioPage from "./pages/StudioPage";
import CouncilMembersPage from "./pages/CouncilMembersPage";
import TrainingPage from "./pages/TrainingPage";
import MemoryPage from "./pages/MemoryPage";
import LabPage from "./pages/LabPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="hub-header">
          <div className="hub-title-block">
            <h1>Desk Council Hub</h1>
            <p>Private laboratory, robot headquarters and council command bunker.</p>
          </div>

          <div className="storage-status">Council Storage: Local Dev Mode</div>
        </header>

        <CouncilRoster />

        <div className="hub-layout">
          <main className="hub-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/studio" element={<StudioPage />} />
              <Route path="/members" element={<CouncilMembersPage />} />
              <Route path="/members/:memberId" element={<MemberDossierPage />} />
              <Route path="/training" element={<TrainingPage />} />
              <Route path="/memory" element={<MemoryPage />} />
              <Route path="/lab" element={<LabPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>

          <HQSystemsPanel />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;