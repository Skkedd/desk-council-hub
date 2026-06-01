import { Link } from "react-router-dom";
import { councilWarnings } from "../data/councilWarnings";

function getRandomWarning() {
  const index = Math.floor(Math.random() * councilWarnings.length);
  return councilWarnings[index];
}

export default function HomePage() {
  const currentWarning = getRandomWarning();

  return (
    <div className="lab-home">
      <section className="lab-hero">
        <p className="lab-stamp">UNAUTHORIZED LAB ENTRY // DIRECTOR ACCESS</p>

        <div className="lab-hero-main">
          <div>
            <h1>Desk Council Headquarters</h1>
            <p>
              Private robot bunker. Active experiments. Several systems built
              before anyone asked if that was a good idea.
            </p>
          </div>

          <div className="lab-warning-card">
            <span>{currentWarning.label}</span>
            <strong>{currentWarning.text}</strong>
          </div>
        </div>
      </section>

      <section className="lab-board">
        <article className="lab-panel lab-panel-alert">
          <p className="panel-label">Lab Status</p>
          <h2>Operational, technically.</h2>
          <ul>
            <li>TARS is online and monitoring the facility.</li>
            <li>Three future members are awaiting arrival.</li>
            <li>Zero experiments have been approved by TARS.</li>
            <li>Cubie safety clearance remains denied until arrival.</li>
          </ul>
        </article>

        <article className="lab-panel">
          <p className="panel-label">Active Experiment</p>
          <h2>Build the Council Hub MVP</h2>
          <p>
            Create the private command bunker where the Council can train,
            remember, record, argue and eventually play games badly on purpose.
          </p>

          <div className="quick-actions">
            <Link to="/studio">Open Studio</Link>
            <Link to="/members">View Dossiers</Link>
            <Link to="/training">Training Lab</Link>
          </div>
        </article>

        <article className="lab-panel">
          <p className="panel-label">Incident Log</p>
          <h2>No official incidents.</h2>
          <p>
            This does not mean no incidents occurred. It only means no one has
            filed the paperwork yet.
          </p>
        </article>

        <article className="lab-panel">
          <p className="panel-label">Public Site</p>
          <h2>DeskCouncil.com reserved.</h2>
          <p>
            Future visitor center for dossiers, experiments, Council Plays and
            whatever UMI & Ortomi think a newsletter is.
          </p>
        </article>
      </section>
    </div>
  );
}