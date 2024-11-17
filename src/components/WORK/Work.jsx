import React from "react";
import "./Work.css";
import Works from "./Works";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
function Work() {
  useEffect(() => {
    let sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 1000,
      delay: 400,
    });

    sr.reveal(`#Portfolio,#section__subtitle `, {
    
      origin: "left",
      interval:100
    });

  
  }, []);
  return (
    <div>
      <section className="section_work work" id="work">
        <br />
        <h2 className="section__title " id="Portfolio">
        Projects
        </h2>
        <span className="section__subtitle" id="section__subtitle">Most recent works</span>
    <Works></Works>
      </section>
    </div>
  );
}

export default Work;
