import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faBug,
  faScrewdriverWrench,
  faShieldHalved,
  faSitemap,
  faTerminal,
  faVirus,
} from '@fortawesome/free-solid-svg-icons';
import Section from './Section';
import { skills } from '../data/portfolio';

const icons: Record<string, IconDefinition> = {
  tools: faScrewdriverWrench,
  bug: faBug,
  sitemap: faSitemap,
  terminal: faTerminal,
  shield: faShieldHalved,
  virus: faVirus,
};

function Expertise() {
  return (
    <Section id="skills" index="02" title="skills">
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="card skill-card" key={group.title}>
            <div className="skill-head">
              <FontAwesomeIcon icon={icons[group.icon]} className="accent" />
              <h3>{group.title}</h3>
            </div>
            <ul className="chips">
              {group.items.map((item) => (
                <li className="chip" key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Expertise;
