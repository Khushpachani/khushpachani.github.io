// All portfolio content lives here. Edit this file to update the website.

const RESUME_ID = '1Lle8NXNMA7cOo9ffSA1EZwdeuBIFyM9C';

export const profile = {
  name: 'Khush Pachani',
  handle: 'khush',
  title: 'Cybersecurity Analyst',
  roles: [
    'Penetration Tester',
    'OT / ICS Security',
    'VAPT Specialist',
    'Security Researcher',
    'Malware Analyst',
  ],
  location: 'Ahmedabad, Gujarat, India',
  email: 'khush.b.pachani@gmail.com',
  github: 'https://github.com/Khushpachani',
  linkedin: 'https://www.linkedin.com/in/khush-pachani-7128a5248/',
  tryhackme: 'https://tryhackme.com/p/Ultra.instinct',
  resumeView: `https://drive.google.com/file/d/${RESUME_ID}/view`,
  resumeDownload: `https://drive.google.com/uc?export=download&id=${RESUME_ID}`,
  avatar: 'https://avatars.githubusercontent.com/Khushpachani?s=400',
  summary:
    'Offensive security researcher and penetration tester specializing in web application, network, and OT/ICS penetration testing following PTES and OWASP standards. Experienced in discovering high-severity flaws (RCE, authentication bypass, SSTI), conducting binary reverse engineering and malware dissection (njRAT, WannaCry), and hardening production systems supporting 100,000+ active users. National podium finisher (2nd Runner-Up) at the Adani OT Cybersecurity CTF, with practical exposure to enterprise risk governance, financial regulatory frameworks (SEBI), and vulnerability disclosure workflows. Seeking to leverage deep exploitation expertise and automation capabilities in a dedicated Penetration Testing / VAPT role.',
};

export const stats = [
  { value: '100K+', label: 'End users protected' },
  { value: 'Podium', label: 'Adani OT CTF · 2nd Runner-Up' },
  { value: '5', label: 'Security certifications' },
  { value: 'Top 3', label: 'B.Sc. class rank' },
];

export const skills = [
  {
    icon: 'tools',
    title: 'Offensive Tooling',
    items: ['Nmap', 'Burp Suite Pro', 'Metasploit', 'Nessus', 'Nikto', 'Dirb / Gobuster', 'SQLMap', 'Hydra', 'Wireshark', 'Shodan', 'John the Ripper', 'Hashcat'],
  },
  {
    icon: 'bug',
    title: 'Testing Focus',
    items: ['SQLi', 'XSS', 'SSTI', 'IDOR', 'RCE', 'Auth Bypass', 'Privilege Escalation', 'Network Misconfigurations', 'OT / ICS & SCADA'],
  },
  {
    icon: 'sitemap',
    title: 'Frameworks & Standards',
    items: ['OWASP Testing Guide v4', 'PTES', 'MITRE ATT&CK', 'NVD', 'CVSS', 'ISO/IEC 27001', 'ISO/IEC 42001'],
  },
  {
    icon: 'terminal',
    title: 'Systems',
    items: ['Kali Linux', 'Parrot OS', 'Ubuntu', 'Red Hat', 'Windows Server'],
  },
  {
    icon: 'shield',
    title: 'Security Operations',
    items: ['VA & PT', 'Risk Auditing', 'System Hardening', 'Web / Network App Testing', 'VAPT Reporting'],
  },
  {
    icon: 'virus',
    title: 'Malware Analysis',
    items: ['Reverse Engineering', 'Static Analysis', 'FLARE VM', 'dnSpy', 'PE Studio', 'Detect It Easy', 'IOC Extraction', 'C2 Patterns'],
  },
];

export const experience = [
  {
    role: 'Software Development Intern',
    org: 'Security and Scientific Technical Research Association (SASTRA), RRU',
    period: 'Jun 2026 – Present',
    location: 'Gandhinagar, Gujarat',
    points: [
      'Though scoped as a development role, work has centered on the security side of an in-progress client engagement (a job portal platform - details withheld per NDA): vulnerability assessment, penetration testing, system hardening, and security auditing.',
      'Supported system management and hardening for the platform environment, applying secure-configuration baselines alongside development work.',
      'Led VAPT, system hardening, and risk auditing for production applications serving roughly 100,000 (1 lakh+) end users, reducing exposure across critical business workflows.',
    ],
  },
  {
    role: 'Security Analyst Intern (VAPT)',
    org: 'TechDefence Labs',
    period: 'Jan 2025 – Aug 2025',
    location: 'Ahmedabad, Gujarat',
    points: [
      'Chained low-signal findings (anonymous FTP access, exposed SSH keys) into full attack paths, flagging exploitable footholds that automated scanners missed.',
      'Reviewed server configurations and network architecture against hardening baselines, cutting attack surface across client environments.',
      'Performed risk auditing to prioritize remediation by business impact, not just CVSS score.',
      'Tested SQLi, XSS, SSTI, IDOR, and RCE vectors using Burp Suite, SQLMap, and Metasploit as part of a repeatable, methodology-driven process.',
    ],
  },
];

export type Severity = 'critical' | 'high' | 'medium';

export const projects = [
  {
    title: 'Hackzonestore - Full-Scope VAPT',
    subtitle: 'Simulated e-commerce environment',
    date: 'May 2025',
    description:
      'Designed and ran an independent VAPT engagement against a vulnerable e-commerce app and its supporting network, covering authentication, injection points, role permissions, APIs, and network misconfigurations. Followed OWASP Testing Guide v4 and PTES throughout.',
    findings: [
      { label: 'SQLi Auth Bypass', severity: 'critical' as Severity },
      { label: 'Remote Code Execution', severity: 'critical' as Severity },
      { label: 'Privilege Escalation', severity: 'critical' as Severity },
      { label: 'Key Exposure', severity: 'critical' as Severity },
      { label: 'SSTI', severity: 'critical' as Severity },
      { label: 'Anonymous FTP', severity: 'high' as Severity },
      { label: 'Insecure Samba', severity: 'high' as Severity },
      { label: 'LFI', severity: 'high' as Severity },
      { label: 'Stored XSS', severity: 'medium' as Severity },
      { label: 'Open Redirect', severity: 'medium' as Severity },
    ],
    tags: ['Nmap', 'Nikto', 'Dirb', 'SQLMap', 'Burp Suite Pro', 'Hydra', 'ZAP', 'Wireshark', 'Metasploit'],
  },
  {
    title: 'Reverse Engineering and Malware Analysis',
    subtitle: 'njRAT (Bladabindi) static analysis · with Nand Gajera',
    date: 'Mar 2026',
    description:
      'Static analysis of a live njRAT (Bladabindi) sample from MalwareBazaar inside an isolated FLARE VM lab - triaging, fingerprinting, and decompiling the .NET binary to map its full capability set and extract IOCs for detection and threat hunting.',
    highlights: [
      { value: '63/71', label: 'VirusTotal detections' },
      { value: '37 KB', label: 'PE32 · VB.NET' },
      { value: '5.574', label: 'Entropy · not packed' },
      { value: '22+', label: 'Malicious functions' },
    ],
    details: [
      'Triaged with VirusTotal, then fingerprinted with Detect It Easy and PE Studio (VB.NET, CLR v2.0, no packing) and inspected raw PE headers in HxD.',
      'Decompiled with dnSpy to trace execution flow: registry Run-key persistence, raw-TCP C2 over an ngrok tunnel, Base64-encoded traffic, GetAsyncKeyState keylogging, and webcam detection via avicap32.',
      'Documented anti-analysis and anti-removal tricks: svchost.exe masquerading, single-instance mutex, and a critical-process flag via NtSetInformationProcess that BSODs the host if killed.',
      'Extracted file, network, and host IOCs (hashes, C2 domain and port, mutex, registry keys), mapped behaviour to MITRE ATT&CK, and wrote defender-facing guidance.',
    ],
    findings: [],
    tags: ['FLARE VM', 'VirusTotal', 'Detect It Easy', 'PE Studio', 'HxD', 'dnSpy', 'MITRE ATT&CK', 'IOCs'],
  },
];

export const achievements = [
  {
    title: '2nd Runner-Up - Adani Innovation Mindstorm OT Cybersecurity Hackathon 2026',
    subtitle: 'Maya Jaal CTF Track',
    period: '2026',
    location: 'Gandhinagar, Gujarat',
    points: [
      'Ranked 2nd Runner-Up among competitive national teams, recognized on stage by Gautam Adani.',
      'Analyzed OT/ICS and SCADA protocols, identifying architectural weaknesses and simulating threat vectors across industrial control environments.',
      'Solved challenges across Cryptography, AI Security, and Web Exploitation, writing rapid triage scripts to bypass defensive controls.',
      'Worked in a cross-functional red-team workflow with evidence logging and triage under high-pressure conditions.',
    ],
  },
  {
    title: 'SEBI International Symposium on Cyber Defence',
    subtitle: 'Execution Team',
    period: '2026',
    location: 'Gandhinagar, Gujarat',
    points: [
      'Gained direct exposure to SEBI regulatory frameworks, market compliance standards, and investor protection mechanisms across Indian capital markets.',
      'Analyzed institutional risk management practices and governance strategies implemented by key market entities.',
      'Handled logistics, schedule execution, and stakeholder coordination as part of the core delivery team.',
    ],
  },
];

export const certifications = [
  {
    name: 'Certified Network Security Practitioner (CNSP)',
    issuer: 'The SecOps Group',
    url: 'https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXc6clG0dxKgQarFIAuhcLHTS5/jDDNXATho+KxYqaerCW82rEcB5u2cFiO5swiLwhMoqMvXuW1wK3Z76lB3hxb8=',
  },
  {
    name: 'Certified Social Engineering Defense Practitioner (CSEDP)',
    issuer: 'The SecOps Group',
    url: 'https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXVC3WNLdsCn5mdPcsDc7gNj8MSwGHyCSoKjy7pAj0gWfQkuQk6qnAXum2o9SAwaXfIQn86VzYbY4SY9hAScypDo=',
  },
  {
    name: 'Malware Analysis',
    issuer: 'IBM',
    url: 'https://coursera.org/share/c04a2922b43bce8c00df75e8ed9c5d3b',
  },
  {
    name: 'ISO/IEC 27001:2022 Lead Auditor',
    issuer: 'Mastermind',
    url: 'https://learn.mastermindassurance.com/certificates/eqxzrnxp0v',
  },
  {
    name: 'ISO/IEC 42001:2023 Lead Auditor',
    issuer: 'Mastermind',
    url: 'https://learn.mastermindassurance.com/certificates/9gz3yb2hnn',
  },
];

export const education = [
  {
    degree: 'M.Sc. Cyber Security & Digital Forensics',
    school: 'Rashtriya Raksha University',
    location: 'Gandhinagar, Gujarat',
    period: 'Aug 2025 – Expected Aug 2027',
    note: 'CGPA 8.50/10',
  },
  {
    degree: 'B.Sc. IT (Architecture & Network Security)',
    school: 'Gujarat University',
    location: 'Ahmedabad, Gujarat',
    period: 'Jul 2022 – May 2025',
    note: 'CGPA 8.46/10 - Ranked Top 3 of class',
  },
];
