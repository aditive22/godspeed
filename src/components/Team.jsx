import React from "react";
import "./Team.css";

const team = [
  {
    name: "Ayush Ghai",
    role: "Chief Alchemist",
    photo: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Akshar Ghai",
    role: "Backstage Brain",
    photo: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Alexander Rhomberg",
    role: "Angel with a ChequeBook",
    photo: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Tanvir Walia",
    role: "The Startup Sherpa",
    photo: "https://randomuser.me/api/portraits/men/76.jpg"
  }
];

const Team = () => (
  <div className="team-section">
    <div className="background-blobs">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
    </div>

    <h2 className="team-heading dynamic-handwritten">Meet the Team</h2>

    <div className="team-list">
      {team.map((member, idx) => (
        <div key={idx} className="team-member">
          <img
            src={member.photo}
            alt={member.name}
            className="team-photo"
          />
          <div className="team-name">{member.name}</div>
          <div className="team-role">{member.role}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Team;
