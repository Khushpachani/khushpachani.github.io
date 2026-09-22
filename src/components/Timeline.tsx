import React from "react";
import Section from './Section';
import { experience } from '../data/portfolio';

function Timeline() {
  return (
    <Section id="experience" index="03" title="Experience">
      <ol className="timeline">
        {experience.map((job) => (
          <li className="timeline-item" key={job.role + job.org}>
            <div className="card">
              <p className="mono dim timeline-meta">{job.period} · {job.location}</p>
              <h3>{job.role}</h3>
              <p className="accent timeline-org">@ {job.org}</p>
              <ul className="bullets">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default Timeline;
