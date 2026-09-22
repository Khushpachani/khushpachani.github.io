import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { profile } from '../data/portfolio';

const navItems = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['achievements', 'Awards'],
  ['projects', 'Projects'],
  ['certifications', 'Certs'],
  ['contact', 'Contact'],
];

function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <button className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className="accent">{profile.handle}@sec</span>:<span className="dim">~</span>$<span className="cursor">_</span>
      </button>

      <button
        className="nav-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon icon={open ? faXmark : faBars} />
      </button>

      <nav className={`nav-links${open ? ' open' : ''}`}>
        {navItems.map(([id, label], i) => (
          <button key={id} onClick={() => go(id)}>
            <span className="accent">0{i + 1}.</span> {label}
          </button>
        ))}
        <a className="btn btn-outline btn-sm" href={profile.resumeView} target="_blank" rel="noreferrer">
          Resume
        </a>
      </nav>
    </header>
  );
}

export default Navigation;
