import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import DownloadIcon from '@mui/icons-material/Download';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div className="download-buttons" style={{marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
        <a 
          href="https://drive.google.com/file/d/1EJ02P89zJkypaIX5OUYA3pQ2BbvjT_h8/view?usp=sharing" 
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px 30px',
            width: '90%',
            maxWidth: '300px',
            backgroundColor: '#5000ca',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '25px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6a1adb'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#5000ca'}
        >
          <DownloadIcon style={{marginRight: '8px', fontSize: '20px'}}/>
          View Resume
        </a>
        <a 
          href="https://drive.google.com/uc?export=download&id=1EJ02P89zJkypaIX5OUYA3pQ2BbvjT_h8"
          className="download-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px 30px',
            width: '90%',
            maxWidth: '300px',
            backgroundColor: '#5000ca',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '25px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6a1adb'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#5000ca'}
        >
          <DownloadIcon style={{marginRight: '8px', fontSize: '20px'}}/>
          Download Resume
        </a>
      </div>
      <div>
        <a href="https://github.com/Khushpachani" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/khush-pachani" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Portfolio designed & built by Khush Pachani <CodeIcon style={{fontSize: '16px', verticalAlign: 'middle'}}/></p>
    </footer>
  );
}

export default Footer;
