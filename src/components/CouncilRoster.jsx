import { Link } from "react-router-dom";
import { councilMembers } from "../data/councilMembers";

function CouncilRoster() {
  return (
    <section className="council-roster">
      {councilMembers.map((member) => (
        <Link
          className="dossier-card"
          key={member.id}
          to={`/members/${member.id}`}
        >
          <div className="portrait-window">
            <img
              src={member.portrait}
              alt={member.name}
              className="member-portrait"
            />
          </div>

          <div className="dossier-info">
            <h2>{member.name}</h2>
            <p>Status: {member.status}</p>
            <p>Activity: {member.activity}</p>
            <p>Arrival: {member.joinDate}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default CouncilRoster;