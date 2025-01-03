import React from 'react'; // Importing React to use JSX and React functionality
import "./Home.css"; // Importing the CSS file for styling the Socile component
import ScrollReveal from 'scrollreveal'; // Importing ScrollReveal for animations
import { useEffect } from 'react'; // Importing useEffect hook to run side effects in function components

function Socile() {
  useEffect(() => { // useEffect hook to trigger the animation when the component mounts
    let sr = ScrollReveal({ // Initialize ScrollReveal with options
      origin: "top", // The animation will start from the top of the screen
      distance: "60px", // The distance the element will move during the animation
      duration: 100, // Duration of the animation in milliseconds
      delay: 400, // Delay before the animation starts
    });

    sr.reveal(`.home__social`, { // Target the .home__social class for animation
      origin: "bottom", // The animation will start from the bottom of the screen
    });
  
  }, []); // Empty dependency array to ensure this effect runs only once when the component mounts

  return (
    <>
    <div className=' home__social'> {/* Container div for social media links */}
      <a href="https://twitter.com/ABDESSAMAD51194" className='home__social-icon' target='_blank'> {/* Twitter link */}
        <i class="ri-twitter-x-fill"></i> {/* Twitter icon */}
      </a>
      <a href="https://www.instagram.com/abdessamad.mesrar__02/" className='home__social-icon' target='_blank'> {/* Instagram link */}
        <i class="ri-instagram-line"></i> {/* Instagram icon */}
      </a>
      <a href="https://www.linkedin.com/in/abdessamad-mesrar/" className='home__social-icon' target='_blank'> {/* LinkedIn link */}
        <i class="ri-linkedin-box-fill"></i> {/* LinkedIn icon */}
      </a>
      <a href="https://github.com/ABDESSAMADMESRAR" className='home__social-icon' target='_blank'> {/* GitHub link */}
        <i class="ri-github-fill"></i> {/* GitHub icon */}
      </a>
    </div>
    </>
  )
}

export default Socile; // Exporting the Socile component for use in other parts of the app
