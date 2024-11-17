import React from "react";
import "./Services.css";
import ScrollReveal  from "scrollreveal";
import { useEffect } from "react";
function Services() {
  useEffect(() => {
    let sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 1500,
      delay: 400,
    });

    sr.reveal(`#services1 ,#section__subtitle1`, {
    
      origin: "bottom",
    });
    sr.reveal(`#services-content1`, {delay: 700,origin:'left'});
    sr.reveal(`#services-content2`, {delay: 700,origin:'top'});
    sr.reveal(`#services-content3`, {delay: 700,origin:'right'});
  
  }, []);
  return (
    <>
      <section className="Services section" id="Services">
        <h2 className="section__title " id="services1">Services </h2>
        <span className="section__subtitle" id="section__subtitle1">What i offer</span>

        <div className="container grid services-container" id="services">
          <div className="services-content" id="services-content1">
            <div>
              <i class="ri-dashboard-fill icon"></i>
              <h2 className="services_title"><b>  ui ux <br/>design</b> </h2>
            </div>

            <span className="services_button">
              view More <i class="ri-arrow-right-circle-fill services_button-icon "></i>
            </span>
        
          </div>

          <div className="services-content" id="services-content2">
            <div>
            <i class="ri-code-s-slash-line icon"></i>
              <h2 className="services_title"><b>front end <br/> developer</b></h2>
            </div>

            <span className="services_button">
              view More <i class="ri-arrow-right-circle-fill services_button-icon"></i>
            </span>
      
          </div>

          <div className="services-content" id="services-content3">
            <div>
            <i class="ri-reserved-fill icon"></i>
              <h2 className="services_title">  <b> Edit<br/>  videos</b></h2>
            </div>

            <span className="services_button">
              view More <i class="ri-arrow-right-circle-fill services_button-icon"></i>
            </span>
          
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
