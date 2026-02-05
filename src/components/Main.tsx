import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://avatars.githubusercontent.com/Khushpachani?s=400" alt="Khush Pachani" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Khushpachani" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/khush-pachani-7128a5248/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:khush.b.pachani@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>Khush Pachani</h1>
          <p>Security Analyst | Cybersecurity Specialist</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Khushpachani" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/khush-pachani" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:khush.b.pachani@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
