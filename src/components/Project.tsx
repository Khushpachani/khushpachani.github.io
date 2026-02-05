import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Key Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <div className="project-placeholder">
                    <div className="project-icon">🛡️</div>
                </div>
                <h2>Hackzonestore - VAPT Lab</h2>
                <p>Designed and executed comprehensive VAPT on a vulnerable e-commerce application and lab network. Identified critical vulnerabilities including Auth Bypass (SQLi), RCE via .htaccess Upload, Privilege Escalation, SSTI, Anonymous FTP, and Insecure Samba. Methodology based on OWASP Testing Guide v4 and PTES.</p>
                <div className="project-tags">
                    <span className="tag">Penetration Testing</span>
                    <span className="tag">OWASP</span>
                    <span className="tag">Burp Suite</span>
                    <span className="tag">Metasploit</span>
                </div>
            </div>
            <div className="project">
                <div className="project-placeholder">
                    <div className="project-icon">🔍</div>
                </div>
                <h2>Network Security Assessment</h2>
                <p>Conducted extensive network penetration testing including vulnerability scanning, service enumeration, and exploitation. Utilized tools like Nmap, Nessus, and Wireshark to identify security gaps in network architecture and configuration.</p>
                <div className="project-tags">
                    <span className="tag">Network Security</span>
                    <span className="tag">Nmap</span>
                    <span className="tag">Nessus</span>
                    <span className="tag">Wireshark</span>
                </div>
            </div>
            <div className="project">
                <div className="project-placeholder">
                    <div className="project-icon">🌐</div>
                </div>
                <h2>Web Application Security Testing</h2>
                <p>Performed in-depth security testing targeting SQLi, XSS, SSTI, IDOR, and RCE vulnerabilities across multiple web applications. Authored detailed VAPT reports with CVSS scores, OWASP & CWE mapping, and comprehensive mitigation strategies.</p>
                <div className="project-tags">
                    <span className="tag">SQLi</span>
                    <span className="tag">XSS</span>
                    <span className="tag">IDOR</span>
                    <span className="tag">CVSS</span>
                </div>
            </div>
            <div className="project">
                <div className="project-placeholder">
                    <div className="project-icon">🎯</div>
                </div>
                <h2>CTF Challenges & Bug Bounty</h2>
                <p>Active participant in Capture The Flag (CTF) competitions and bug bounty programs. Continuously developing practical skills in vulnerability discovery, exploitation techniques, and security research.</p>
                <div className="project-tags">
                    <span className="tag">CTF</span>
                    <span className="tag">Bug Bounty</span>
                    <span className="tag">Security Research</span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;