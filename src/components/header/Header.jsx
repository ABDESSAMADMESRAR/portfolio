import React, { useState } from "react";
import "./Header.css";

function Header() {









  
  /*=============== toggle meun ===============*/

    window.addEventListener('scroll',function(){
      const  header= document.querySelector('.header');
      if(this.scrollY>=80) header.classList.add("show-header")
      else header.classList.remove("show-header")
    })










  
  const[toggle,settoggle]=useState(false)
  const[activeNav,setactiveNav]=useState("#Home")
  
  return (
    <header className="fixed z-30 header">
      <nav className="container nav">
        <a href="/index.html" className="nav_logo">
    
          MESRAR
        </a>
        <div className={toggle ? "nav_Meun show-meun" : "nav_Meun"}>
          <ul className="nav_list ">
            <li className="nav_item">
              <a href="#home"
               onClick={()=>setactiveNav("#home")}
                className={activeNav==="#home"?
              "nav_link active-link":"nav_link"}>
                <i className="uil uil- nav_icon ri-home-4-fill Contact"></i>Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" 
                onClick={()=>setactiveNav("#about" )}
                className={activeNav==="#about" ?
               "nav_link active-link":"nav_link"}>
                <i className="uil uil- nav_icon ri-user-fill Contact"></i>About
              </a>
            </li>

            <li className="nav_item">
              <a href="#Skills" 
              onClick={()=>setactiveNav("#Skills")}
               className={activeNav==="#Skills"?
              "nav_link active-link":"nav_link"}
              >
                <i className="uil uil- nav_icon ri-file-fill Contact"></i>Skills
              </a>
            </li>

            <li className="nav_item">
              <a href="#Services" onClick={()=>setactiveNav("#Services")} className={activeNav==="#Services"?
              "nav_link active-link":"nav_link"}>
              <i className="uil uil- nav_icon ri-customer-service-fill Contact"></i>Services
              </a>
            </li>

            <li className="nav_item">
              <a href="#Portfolio" onClick={()=>setactiveNav("#Portfolio")} className={activeNav==="#Portfolio"?
              "nav_link active-link":"nav_link"}>
                <i class="uil uil- nav_icon   ri-image-2-fill  Contact"></i>Projects
              </a>
            </li>

            <li className="nav_item">
              <a href="#Contact" 
              onClick={()=>setactiveNav("#Contact")} className={activeNav==="#Contact"?
              "nav_link active-link":"nav_link"}>
            
                <i className="uil uil- nav_icon ri-chat-1-fill Contact"></i>Contact
              </a>
            </li>

          </ul>
          <i class="ri-close-large-line" onClick={()=>settoggle(!toggle)}></i>
        </div>
        <div className="nav__toggle">
      
        <i class="ri-apps-2-line"  onClick={()=>settoggle(!toggle)}></i>
        </div>
      
      </nav>
    </header>
  );
}

export default Header;
