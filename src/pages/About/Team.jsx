import React from 'react';
import './Team.module.css';

const teamMembers = [
  { name: "Manish Sharma", role: "Chief Executive Officer (CEO) & Founder" },
  { name: "Manjeet", role: "Head of Operations" },
  { name: "Inayathulla SK", role: "Software Development Manager" },
  { name: "Adhish P", role: "Lead Software Engineer" },
];

const Team = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Our Core Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>

            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
