import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import Section from './Section';
import { projects } from '../data/portfolio';

function Project() {
  return (
    <Section id="projects" index="05" title="Projects">
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="card project-card" key={project.title}>
            <div className="project-top">
              <FontAwesomeIcon icon={faFolderOpen} className="accent project-icon" />
              <span className="mono dim">{project.date}</span>
            </div>
            <h3>{project.title}</h3>
            <p className="mono dim project-subtitle">{project.subtitle}</p>
            <p>{project.description}</p>

            {project.highlights && (
              <div className="project-highlights">
                {project.highlights.map((h) => (
                  <div key={h.label}>
                    <span className="highlight-value mono">{h.value}</span>
                    <span className="highlight-label">{h.label}</span>
                  </div>
                ))}
              </div>
            )}

            {project.details && (
              <ul className="bullets">
                {project.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            )}

            {project.findings.length > 0 && (
              <div className="findings">
                <p className="mono findings-title">{"// findings"}</p>
                <ul>
                  {project.findings.map((f) => (
                    <li key={f.label} className={`finding sev-${f.severity}`}>
                      <span className="sev-badge">{f.severity}</span>
                      {f.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <ul className="tags mono">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Project;
