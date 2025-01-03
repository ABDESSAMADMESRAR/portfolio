import React from "react";  // Importing React to build the component
import "./Work.css";  // Importing the CSS file for styling the component
import Works from "./Works";  // Importing a component that presumably displays the list of works
import ScrollReveal from "scrollreveal";  // Importing the ScrollReveal library to create scroll animations
import { useEffect } from "react";  // Importing useEffect hook from React to handle side effects in the component

function Work() {  // Defining the functional component named 'Work'
  
  useEffect(() => {  // The useEffect hook runs the provided code when the component mounts (similar to componentDidMount in class components)
    let sr = ScrollReveal({  // Creating a new instance of ScrollReveal with custom configuration
      origin: "top",  // The animation will start from the top of the page
      distance: "60px",  // The content will move 60px during the animation
      duration: 1000,  // The animation will last 1000ms (1 second)
      delay: 400,  // The animation will have a 400ms delay before starting
    });

    sr.reveal(`#Portfolio,#section__subtitle `, {  // Revealing the elements with IDs 'Portfolio' and 'section__subtitle'
      origin: "left",  // The animation will come from the left side
      interval:100  // Each element will animate with a 100ms delay between them
    });

  }, []);  // Empty dependency array, ensuring that the useEffect runs only once when the component mounts

  return (  // JSX syntax to render the component
    <div>  // A wrapper div to contain the section
      <section className="section_work work" id="work">  // A section element with classes and id for styling and targeting
        <br />  // A line break for spacing
        <h2 className="section__title " id="Portfolio">  // A title for the section, with a specific ID and class for styling
        Projects  // The content of the title
        </h2>
        <span className="section__subtitle" id="section__subtitle">Most recent works</span>  // A subtitle for the section
    <Works></Works>  // Rendering the 'Works' component inside this section
      </section>
    </div>
  );
}

export default Work;  // Exporting the 'Work' component to be used in other parts of the app
