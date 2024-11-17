import React, { useEffect } from "react";
import "./About.css";

import ScrollReveal from "scrollreveal";

export default function Info() {
  useEffect(() => {
    let sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 1500,
      delay: 400,
    });

    sr.reveal(`#about_box1 `, { delay: 700, origin: "bottom" });
    sr.reveal(`#about_box2 `, { delay: 700, origin: "top" });
    sr.reveal(`#about_box3 `, { delay: 700, origin: "bottom" });
  }, []);
  return (
    <>
      <div className="grid about_info">
        <div className="about_box" id="about_box1">
          <i class="ri-award-fill about_icon"></i>
          <h3 className="about_title">Experience</h3>
          <span className="about_subtitle">1 - 2Years</span>
        </div>
        <div className="about_box" id="about_box2">
          <i class="ri-briefcase-line about_icon"></i>
          <h3 className="about_title">Completed</h3>
          <span className="about_subtitle">+20 Projects</span>
        </div>

        <div className="about_box" id="about_box3">
          <i class="ri-customer-service-fill about_icon"></i>
          <h3 className="about_title">Support</h3>
          <span className="about_subtitle">Online 24/7</span>
        </div>
      </div>
    </>
  );
}
