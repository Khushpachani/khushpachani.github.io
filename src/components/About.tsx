import React from "react";
import Section from './Section';
import { profile, stats } from '../data/portfolio';

function About() {
  return (
    <Section id="about" index="01" title="about_me">
      <div className="about-grid">
        <div className="about-photo">
          <img src={profile.avatar} alt={profile.name} />
        </div>
        <div>
          <p className="about-summary">{profile.summary}</p>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat card" key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
