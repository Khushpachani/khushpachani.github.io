import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faArrowUpRightFromSquare, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Section from './Section';
import { certifications, education } from '../data/portfolio';

function Certifications() {
  return (
    <>
      <Section id="certifications" index="06" title="Certifications">
        <div className="certs-grid">
          {certifications.map((cert) => (
            <a className="card cert-card" key={cert.name} href={cert.url} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faCertificate} className="accent cert-icon" />
              <div>
                <h3>{cert.name}</h3>
                <p className="mono dim">{cert.issuer}</p>
              </div>
              <span className="cert-verify mono">
                verify <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </span>
            </a>
          ))}
        </div>
      </Section>

      <Section id="education" index="07" title="Education">
        <div className="edu-grid">
          {education.map((edu) => (
            <div className="card edu-card" key={edu.degree}>
              <FontAwesomeIcon icon={faGraduationCap} className="accent edu-icon" />
              <h3>{edu.degree}</h3>
              <p className="accent">{edu.school}</p>
              <p className="mono dim">{edu.period} · {edu.location}</p>
              {edu.note && <p className="edu-note">{edu.note}</p>}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

export default Certifications;
