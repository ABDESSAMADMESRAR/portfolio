import React from 'react'
import "./Skills.css";
import Front_end from "./Front_end"
import Design from './Design';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

function Skills() {
  useEffect(() => {
    let sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 1000,
      delay: 400,
    });

    sr.reveal(`#Skills ,#section__subtitle`, {
    
      origin: "bottom",
    });
  

  
  }, []);
  return (
    <>
    <section className="Skills section" id="Skills">
    <h2 className='section__title ' id='Skills'>Skills </h2>
  <span className='section__subtitle' id='section__subtitle'>My technical level</span>
  <div className="container grid skills_container">
    <Front_end></Front_end>
    <Design></Design>
    
  </div>
    </section>
    </>
  )
}

export default Skills