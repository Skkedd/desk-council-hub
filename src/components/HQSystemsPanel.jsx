import { Link } from "react-router-dom";

export default function HQSystemsPanel() {
  return (
    <aside className="hq-systems-panel">
      <p className="panel-eyebrow">AUTHORIZED PERSONNEL ONLY</p>
      <h2>Lab Access</h2>

      <nav className="systems-list">
        <Link to="/">Situation Room</Link>
        <Link to="/studio">Studio Wing</Link>
        <Link to="/training">Training Chamber</Link>
        <Link to="/memory">Memory Vault</Link>
        <Link to="/lab">Experiment Wing</Link>
        <Link to="/settings">Facility Controls</Link>
      </nav>
    </aside>
  );
}