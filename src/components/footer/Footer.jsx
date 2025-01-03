import React from 'react'; // Importing React library
import "./Footer.css"; // Importing the CSS file for styling

function Footer() {
  return (
    <div>
      <footer className='footer'> {/* Footer container */}
        <div className="container footer_container"> {/* Main container of the footer */}
          <h1 className='footer__title'>MESRAR</h1> {/* Footer title */}
          <ul className='footer-list'> {/* List of navigation links */}
            <li>
              <a href="#about" className='footer_link'>About</a> {/* About section link */}
            </li>
            <li>
              <a href="#Projects" className='footer_link'>Projects</a> {/* Projects section link */}
            </li>
            <li>
              <a href="#Services" className='footer_link'>Services</a> {/* Services section link */}
            </li>
          </ul>
          <div className='footer__social'> {/* Social media icons */}
            <a href="https://twitter.com/ABDESSAMAD51194" className='footer__social-link' target='_blank'>
              <i className="ri-twitter-x-fill"></i> {/* Twitter icon */}
            </a>
            <a href="https://www.instagram.com/abdessamad.mesrar__02/" className='footer__social-link' target='_blank'>
              <i className="ri-instagram-line"></i> {/* Instagram icon */}
            </a>
            <a href="https://www.linkedin.com/in/abdessamad-mesrar/" className='footer__social-link' target='_blank'>
              <i className="ri-linkedin-box-fill"></i> {/* LinkedIn icon */}
            </a>
            <a href="https://github.com/ABDESSAMADMESRAR" className='footer__social-link' target='_blank'>
              <i className="ri-github-fill"></i> {/* GitHub icon */}
            </a>
          </div>
          <span className='footer__copy'>&#169; All rights reserved to Masrar</span> {/* Copyright text */}
        </div>
      </footer>
    </div>
  );
}

export default Footer; // Exporting the Footer component
