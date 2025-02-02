import React from "react";
import "./Home.css";
import Typical from "react-typical"; // For displaying animated text
import ScrollReveal from "scrollreveal"; // For revealing elements with scroll animations
import { useEffect } from "react"; // To run side effects in functional components

function Date() {
  useEffect(() => {
    // Initializing ScrollReveal for scroll animations
    let sr = ScrollReveal({
      origin: "top", // Set the animation origin to top
      distance: "60px", // Set the distance for the animation effect
      duration: 1000, // Duration of the animation in milliseconds
      delay: 400, // Delay before the animation starts
    });

    // Defining the elements to reveal when scrolled
    sr.reveal(`.home__title, .home__description`, {
      origin: "bottom", // Set the animation origin to bottom for these elements
      interval: 100, // Stagger the reveal of multiple elements by 100ms
    });
    sr.reveal(`.home__subtitle`, { origin: "left" }); // Reveal subtitle from the left
    sr.reveal(`#cv`, { origin: "left" }); // Reveal CV button from the left

  }, []); // Empty dependency array means this effect runs only once when the component mounts
  
  return (
    <div className="home__Date">
      {/* Main title */}
      <h1 className="font-bold home__title">
        ABDESSAMAD MESRAR ✌
      </h1>

      {/* Subtitle with dynamic typing animation */}
      <h3 className="home__subtitle">
        I'm a {''}
        <Typical 
          loop={Infinity} // Infinite loop of text change
          wrapper="b" // Wrap the text in a <b> tag
          steps={[
            ' UI/UX Designer 🎨',
            1000, // Duration for the first text
            'Front-end Developer💻',
            1000,
             // Duration for the second text
            'graphic Designer 🎨',
            1000, // Duration for the second text
            'video editor 🎥',
            1000,
            'wordpress developer 💻',
            1000, // Duration for the second text
          ]}
        />
      </h3>

      {/* Description text */}
      <p className="home__description">
        I am a front-end developer | UX/UI designer | graphic designer| Video Editor based in Safi , Morocco
        and I am very passionate and dedicated to my work.
      </p>
    
      {/* Button to say hello with an SVG icon */}
      <a  href="https://api.whatsapp.com/send/?phone=2120626249432&text&type=phone_number&app_absent=0" target="_blank">
      <button className="button" id="cv">
      Say hello
    
        <svg
          className="button__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          {/* Path for the button icon */}
          <path
            d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
            fill="#fff"
          ></path>
          {/* Second path for the arrow icon */}
          <path
            d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
            fill="#000"
          ></path>
        </svg>
      </button>
      </a>
    </div>
  );
}

export default Date;
