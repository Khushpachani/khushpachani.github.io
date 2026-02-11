import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Khushpachani" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/khush-pachani-7128a5248/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Portfolio designed & built by Khush Pachani <CodeIcon style={{fontSize: '16px', verticalAlign: 'middle'}}/></p>
    </footer>
  );
}

export default Footer;
