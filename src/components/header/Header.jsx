import React, { useState } from "react";
import "./Header.css";

function Header() {
  // Adding scroll event listener to toggle header visibility
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header'); // Selects the header element
    if(this.scrollY >= 80) header.classList.add("show-header"); // Adds class when scroll is greater than 80px
    else header.classList.remove("show-header"); // Removes class if scroll is less than 80px
  });

  // useState hook for controlling the menu toggle state and active navigation link
  const [toggle, settoggle] = useState(false); // toggle for opening and closing the menu
  const [activeNav, setactiveNav] = useState("#Home"); // activeNav to track the current active section

  return (
    <header className="fixed z-30 header">
      <nav className="container nav">
        {/* Logo link */}
        <a href="/index.html" className="nav_logo">
          MESRAR
        </a>

        {/* Navigation menu */}
        <div className={toggle ? "nav_Meun show-meun" : "nav_Meun"}>
          <ul className="nav_list">
            {/* Navigation links */}
            <li className="nav_item">
              <a href="#home"
                onClick={() => setactiveNav("#home")} // Sets the active section to #home
                className={activeNav === "#home" ? "nav_link active-link" : "nav_link"}>
                <i className="uil uil- nav_icon ri-home-4-fill Contact"></i>Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#about"
                onClick={() => setactiveNav("#about")} // Sets the active section to #about
                className={activeNav === "#about" ? "nav_link active-link" : "nav_link"}>
                <i className="uil uil- nav_icon ri-user-fill Contact"></i>About
              </a>
            </li>
            <li className="nav_item">
              <a href="#Skills"
                onClick={() => setactiveNav("#Skills")} // Sets the active section to #Skills
                className={activeNav === "#Skills" ? "nav_link active-link" : "nav_link"}>
                <i className="uil uil- nav_icon ri-file-fill Contact"></i>Skills
              </a>
            </li>
            <li className="nav_item">
              <a href="#Services"
                onClick={() => setactiveNav("#Services")} // Sets the active section to #Services
                className={activeNav === "#Services" ? "nav_link active-link" : "nav_link"}>
                <i className="uil uil- nav_icon ri-customer-service-fill Contact"></i>Services
              </a>
            </li>
            <li className="nav_item">
              <a href="#Portfolio"
                onClick={() => setactiveNav("#Portfolio")} // Sets the active section to #Portfolio
                className={activeNav === "#Portfolio" ? "nav_link active-link" : "nav_link"}>
                <i className="uil uil- nav_icon ri-image-2-fill Contact"></i>Projects
              </a>
            </li>
            <li className="nav_item">
              <a href="#Contact"
                onClick={() => setactiveNav("#Contact")} // Sets the active section to #Contact
                className={activeNav === "#Contact" ? "nav_link active-link" : "nav_link"}>
                <i className="uil uil- nav_icon ri-chat-1-fill Contact"></i>Contact
              </a>
            </li>
          </ul>

          {/* Close button for mobile menu */}
          <i className="ri-close-large-line" onClick={() => settoggle(!toggle)}></i>
        </div>

        {/* Toggle button for opening/closing the mobile menu */}
        <div className="nav__toggle">
          <i className="ri-apps-2-line" onClick={() => settoggle(!toggle)}></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
