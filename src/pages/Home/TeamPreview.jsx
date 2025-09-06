import React from 'react';
import './TeamPreview.css';
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import t3 from "../../assets/t3.png";
import t4 from "../../assets/t4.png";

const teamMembers = [
  { name: "Manish Sharma", role: "Chief Executive Officer (CEO) & Founder", image: t1 },
  { name: "Manjeet", role: "Head of Operations", image: t2 },
  { name: "Inayathulla SK", role: "Software Development Manager", image: t3 },
  { name: "Adhish P", role: "Lead Software Engineer", image: t4 },
];

const Team = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Our Core Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            {member.image && (
              <div className="avatar-container">
                <img src={member.image} alt={member.name} className="team-avatar" />
              </div>
            )}
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
