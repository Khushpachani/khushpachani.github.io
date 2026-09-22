import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload, faEye } from '@fortawesome/free-solid-svg-icons';
import Section from './Section';
import TryHackMeIcon from './TryHackMeIcon';
import { profile } from '../data/portfolio';

function Footer() {
  return (
    <>
      <Section id="contact" index="08" title="Contact">
        <div className="contact card">
          <p className="mono accent">$ ./establish_connection.sh</p>
          <h3>Let's secure something together.</h3>
          <p>
            Open to full-time <span className="accent">Penetration Testing / VAPT</span> roles,
            security research collaborations, and responsible-disclosure conversations.
          </p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}><FontAwesomeIcon icon={faEnvelope} /> {profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
            <a href={profile.tryhackme} target="_blank" rel="noreferrer"><TryHackMeIcon /> TryHackMe</a>
          </div>
          <div className="hero-actions">
            <a className="btn" href={profile.resumeView} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEye} /> View Resume
            </a>
            <a className="btn btn-outline" href={profile.resumeDownload}>
              <FontAwesomeIcon icon={faDownload} /> Download Resume
            </a>
          </div>
        </div>
      </Section>

      <footer className="footer mono dim">
        <p>© {new Date().getFullYear()} {profile.name} · <span className="accent">{"/* stay curious, stay ethical */"}</span></p>
      </footer>
    </>
  );
}

export default Footer;
