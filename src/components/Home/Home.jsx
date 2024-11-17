import React from "react";
import "./Home.css";
import Socile from "../Home/Socile";
import Date from "../Home/Date";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import abdessmad from '../../images/ABDESSAMAD .png'
function Home() {
  useEffect(() => {
    let sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 100,
      delay: 400,
    });

    sr.reveal(`.home__img`, {
    
      origin: "right",
    });

  }, []);
  
  return (
    <>
      <section className="home section " id="home">
        <div className="container grid home__container">
          <div className="grid home__content">
            <Socile></Socile>
            <img className="home__img" src={abdessmad}></img>
            <Date></Date>
          </div>
          
        </div>

      </section>
    </>
  );
}

export default Home;
