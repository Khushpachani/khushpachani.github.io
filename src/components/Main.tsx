import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload, faEye, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { profile } from '../data/portfolio';

// Cycles through profile.roles with a type/delete animation.
function useTypewriter(words: string[]) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    let delay = deleting ? 40 : 90;
    if (!deleting && text === word) delay = 1600;
    if (deleting && text === '') delay = 300;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setWordIndex((i) => i + 1);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words]);

  return text;
}

function Main() {
  const role = useTypewriter(profile.roles);

  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="mono accent hero-greeting">&gt; Hello, world. I am</p>
        <h1 className="glitch" data-text={profile.name}>{profile.name}</h1>
        <p className="hero-role mono">
          <span className="dim">[</span>{role}<span className="cursor">|</span><span className="dim">]</span>
        </p>
        <p className="hero-tagline">
          {profile.title} focused on <span className="accent">penetration testing &amp; VAPT</span> -
          finding the flaws before the adversaries do.
        </p>
        <p className="hero-location mono dim">
          <FontAwesomeIcon icon={faLocationDot} /> {profile.location}
        </p>

        <div className="hero-actions">
          <a className="btn" href={profile.resumeView} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEye} /> View Resume
          </a>
          <a className="btn btn-outline" href={profile.resumeDownload}>
            <FontAwesomeIcon icon={faDownload} /> Download Resume
          </a>
        </div>

        <div className="social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
      </div>

      <div className="terminal hero-terminal">
        <div className="terminal-bar">
          <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
          <span className="terminal-title">{profile.handle}@kali: ~</span>
        </div>
        <div className="terminal-body mono">
          <p><span className="accent">$</span> whoami</p>
          <p className="out">{profile.name.toLowerCase().replace(' ', '_')}</p>
          <p><span className="accent">$</span> cat focus.txt</p>
          <p className="out">VAPT · Web &amp; Network PT · Malware RE</p>
          <p><span className="accent">$</span> nmap -sV khush.skills</p>
          <p className="out"><span className="accent">PORT</span>    <span className="accent">STATE</span>  SERVICE</p>
          <p className="out">443/tcp <span className="ok">open</span>   burp-suite-pro</p>
          <p className="out">4444/tcp <span className="ok">open</span>  metasploit</p>
          <p className="out">31337/tcp <span className="ok">open</span> reverse-engineering</p>
          <p><span className="accent">$</span> <span className="cursor">█</span></p>
        </div>
      </div>
    </section>
  );
}

export default Main;
