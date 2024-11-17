import React from "react";
import "./Scrollup.css";
import ScrollToTop from "react-scroll-to-top";
function Scrollup() {
  window.addEventListener("scroll", function () {
    const scroll = document.querySelector(".scrollup");
    if (this.scrollY >= 560) {
      scroll.classList.add("show-up")
    }else{
      scroll.classList.remove("show-up")
    }
    scroll.onClick=function(){
      Window.scrollTo({
        top:0,
        behavior:"smooth",
      })
    }
  });
  return (
    <a href="" className="scrollup">
    <i class="ri-arrow-up-line scrollup-icon"></i>
    </a>
  );
}

export default Scrollup;
