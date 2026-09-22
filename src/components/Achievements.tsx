import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import Section from './Section';
import { achievements } from '../data/portfolio';

function Achievements() {
  return (
    <Section id="achievements" index="04" title="achievements">
      <div className="achievements-grid">
        {achievements.map((a) => (
          <div className="card achievement-card" key={a.title}>
            <div className="project-top">
              <FontAwesomeIcon icon={faTrophy} className="achievement-icon" />
              <span className="mono dim">{a.period} · {a.location}</span>
            </div>
            <h3>{a.title}</h3>
            <p className="accent timeline-org">{a.subtitle}</p>
            <ul className="bullets">
              {a.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Achievements;
