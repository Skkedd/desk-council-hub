import { Link, useParams } from "react-router-dom";
import { councilMembers } from "../data/councilMembers";

export default function MemberDossierPage() {
  const { memberId } = useParams();
  const member = councilMembers.find((item) => item.id === memberId);

  if (!member) {
    return (
      <div className="dossier-page">
        <p className="lab-stamp">DOSSIER NOT FOUND</p>
        <h1>Unknown Council Member</h1>
        <p>This file may have been misplaced, deleted or hidden by Cubie.</p>
        <Link className="back-link" to="/">
          Return to Headquarters
        </Link>
      </div>
    );
  }

  return (
    <div className="dossier-page">
      <Link className="back-link" to="/">
        ← Return to Headquarters
      </Link>

      <section className="dossier-hero">
        <div className="dossier-portrait-large">
          <img src={member.portrait} alt={member.name} />
        </div>

        <div className="dossier-summary">
          <p className="lab-stamp">COUNCIL DOSSIER</p>
          <h1>{member.name}</h1>

          <div className="dossier-facts">
            <p>
              <strong>Status:</strong> {member.status}
            </p>
            <p>
              <strong>Current Activity:</strong> {member.activity}
            </p>
            <p>
              <strong>Join Date:</strong> {member.joinDate}
            </p>
            <p>
              <strong>Current Thought:</strong> {member.thought}
            </p>
            <p>
              <strong>Favorite Quote:</strong> {member.favoriteQuote}
            </p>
          </div>
        </div>
      </section>

      <section className="dossier-grid">
        <article className="lab-panel">
          <p className="panel-label">Biography</p>
          <h2>File Pending</h2>
          <p>
            This dossier is still being assembled. Additional history, behavior
            notes and questionable incidents will be added as the Council
            develops.
          </p>
        </article>

        <article className="lab-panel">
          <p className="panel-label">Technical File</p>
          <h2>Restricted</h2>
          <p>
            Hardware, local model details and other nerd-cool specifications
            will live here later. Public-facing identity remains separate from
            technical details.
          </p>
        </article>
      </section>
    </div>
  );
}