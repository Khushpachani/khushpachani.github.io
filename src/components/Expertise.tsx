import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faNetworkWired, faCode } from '@fortawesome/free-solid-svg-icons';
import { faLinux } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Nmap",
    "Burp Suite",
    "Metasploit",
    "Nessus",
    "Nikto",
    "SQLMap",
    "Hydra",
    "Wireshark",
    "Shodan",
    "John the Ripper",
    "Hashcat"
];

const labelsSecond = [
    "Kali Linux",
    "Parrot OS",
    "Ubuntu",
    "Red Hat",
    "Windows Server",
    "OWASP",
    "PTES",
    "MITRE ATT&CK",
    "CVSS"
];

const labelsThird = [
    "SQLi",
    "XSS",
    "SSTI",
    "IDOR",
    "RCE",
    "LFI",
    "CSRF",
    "Auth Bypass",
    "Privilege Escalation"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faShieldAlt} size="3x"/>
                    <h3>Penetration Testing & VAPT</h3>
                    <p>Experienced in conducting comprehensive vulnerability assessments and penetration testing across web applications and network infrastructure. Proficient in identifying, exploiting, and documenting security vulnerabilities with detailed remediation strategies.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faLinux} size="3x"/>
                    <h3>Security Frameworks & Methodologies</h3>
                    <p>Well-versed in industry-standard security frameworks and methodologies. Experienced in implementing security best practices and compliance standards for enterprise environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Frameworks:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faNetworkWired} size="3x"/>
                    <h3>Vulnerability Research</h3>
                    <p>Specialized in identifying and exploiting common web application vulnerabilities. Passionate about bug bounty hunting and participating in CTF challenges to continuously enhance security research skills.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Vulnerabilities:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;