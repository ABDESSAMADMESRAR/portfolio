import React, { useEffect } from "react"; // Import React and useEffect hook
import "./About.css"; // Import the CSS for styling

import ScrollReveal from "scrollreveal"; // Import ScrollReveal for animations

export default function Info() {
  useEffect(() => {
    // Initialize ScrollReveal for animations
    let sr = ScrollReveal({
      origin: "top", // Set origin of the animation to top
      distance: "60px", // Set the distance of the animation movement
      duration: 1500, // Set the animation duration to 1500ms
      delay: 400, // Set a delay of 400ms before starting the animation
    });

    // Add ScrollReveal animations for each "about box"
    sr.reveal(`#about_box1`, { delay: 700, origin: "bottom" }); // Reveal box 1 from bottom with a 700ms delay
    sr.reveal(`#about_box2`, { delay: 700, origin: "top" }); // Reveal box 2 from top with a 700ms delay
    sr.reveal(`#about_box3`, { delay: 700, origin: "bottom" }); // Reveal box 3 from bottom with a 700ms delay
  }, []); // Empty dependency array ensures this effect runs once on component mount

  return (
    <>
      <div className="grid about_info"> {/* Grid container for the information boxes */}
        
        {/* Information box 1: Experience */}
        <div className="about_box" id="about_box1">
          <i className="ri-award-fill about_icon"></i> {/* Icon for experience */}
          <h3 className="about_title">Experience</h3> {/* Title for the box */}
          <span className="about_subtitle">1 - 2Years</span> {/* Subtitle for experience duration */}
        </div>

        {/* Information box 2: Completed Projects */}
        <div className="about_box" id="about_box2">
          <i className="ri-briefcase-line about_icon"></i> {/* Icon for completed projects */}
          <h3 className="about_title">Completed</h3> {/* Title for the box */}
          <span className="about_subtitle">+20 Projects</span> {/* Subtitle for completed projects count */}
        </div>

        {/* Information box 3: Support */}
        <div className="about_box" id="about_box3">
          <i className="ri-customer-service-fill about_icon"></i> {/* Icon for customer support */}
          <h3 className="about_title">Support</h3> {/* Title for the box */}
          <span className="about_subtitle">Online 24/7</span> {/* Subtitle for support availability */}
        </div>

      </div>
    </>
  );
}
