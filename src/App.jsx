import React, { useState, useEffect } from 'react'; // Importing necessary React hooks
import './App.css'; // Importing the stylesheet for the App
import Header from './components/header/Header'; // Importing Header component
import Home from './components/Home/Home'; // Importing Home component
import About from './components/about/About'; // Importing About component
import Skills from './components/Skills/Skills'; // Importing Skills component
import Services from './components/services/Services'; // Importing Services component
import Work from './components/WORK/Work'; // Importing Work component
import Contact from './components/Contact/Contact'; // Importing Contact component
import Footer from './components/footer/Footer'; // Importing Footer component
import Scrollup from './components/scrollup/Scrollup'; // Importing Scrollup component

function App() {
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [text, setText] = useState(""); // State to store the text to be displayed character by character
  const name = `A-MESRAR`; // The text to be displayed (used for the loading animation)

  // Simulating the typing effect for the loading screen
  useEffect(() => {
    // Simulating a delay for the page loading
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds (page loaded)
    }, 4000); // 3 seconds delay

    let i = 0;
    const textTimer = setInterval(() => {
      if (i < name.length) {
        setText((prevText) => prevText + name[i]); // Adding one character at a time to the text
        i++;
      } else {
        clearInterval(textTimer); // Stop adding characters after the name is fully displayed
      }
    }, 500); // Delay of 500ms between each character

    return () => {
      clearTimeout(timer); // Cleanup the timer when the component unmounts
      clearInterval(textTimer); // Cleanup the text typing interval when the component unmounts
    };
  }, []); // Empty dependency array means this effect runs only once when the component is mounted

  // If the page is still loading, show the loading screen
  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div> {/* Spinner animation for loading */}
        <p>{text}</p> {/* Display the text being typed */}
      </div>
    );
  }

  // Once loading is complete, render the rest of the components
  return (
    <>
      <Header /> {/* Render the Header component */}
      <main className="main"> {/* Main content section */}
        <Home /> {/* Render the Home component */}
        <About /> {/* Render the About component */}
        <Skills /> {/* Render the Skills component */}
        <Services /> {/* Render the Services component */}
        <Work /> {/* Render the Work component */}
        <br />
        <br />
        <Contact /> {/* Render the Contact component */}
      </main>
      <Footer /> {/* Render the Footer component */}
      <Scrollup /> {/* Render the Scrollup component */}
    </>
  );
}

export default App; // Export the App component to be used in other parts of the application
