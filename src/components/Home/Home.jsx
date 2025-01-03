import React from "react"; // Importing React to use JSX and React functionality
import "./Home.css"; // Importing the CSS file for styling the Home component
import Socile from "../Home/Socile"; // Importing the Socile component (most likely for social media links or profile)
import Date from "../Home/Date"; // Importing the Date component (most likely for displaying a date)
import ScrollReveal from "scrollreveal"; // Importing the ScrollReveal library for animations when elements are scrolled into view
import { useEffect } from "react"; // Importing the useEffect hook to run side effects in function components
import abdessmad from '../../images/ABDESSAMAD .png' // Importing an image to be displayed in the Home component

function Home() {
  useEffect(() => { // useEffect hook to run an animation when the component mounts
    let sr = ScrollReveal({ // Initialize ScrollReveal with options
      origin: "top", // The animation will originate from the top of the screen
      distance: "60px", // The distance the element will move during the animation
      duration: 100, // Duration of the animation in milliseconds
      delay: 400, // Delay before the animation starts
    });

    sr.reveal(`.home__img`, { // Target the .home__img class for animation
      origin: "right", // The animation will originate from the right of the screen
    });

  }, []); // Empty dependency array to run this effect only once when the component is mounted
  
  return (
    <>
      <section className="home section " id="home"> {/* Home section with specific classes and an id */}
        <div className="container grid home__container"> {/* A container with grid layout */}
          <div className="grid home__content"> {/* Another grid for content inside the home section */}
            <Socile></Socile> {/* Rendering the Socile component */}
            <img className="home__img" src={abdessmad} alt="Abdessamad" /> {/* Rendering an image with a dynamic source */}
            <Date></Date> {/* Rendering the Date component */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home; // Exporting the Home component to use it in other parts of the application
