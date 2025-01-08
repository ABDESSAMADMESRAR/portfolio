import React, { useState, useEffect, lazy, Suspense } from 'react'; // Importing necessary React hooks and functions
import './App.css'; // Importing the stylesheet for the App

// Lazy loading the components
const Header = lazy(() => import('./components/header/Header'));
const Home = lazy(() => import('./components/Home/Home'));
const About = lazy(() => import('./components/about/About'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Services = lazy(() => import('./components/services/Services'));
const Work = lazy(() => import('./components/WORK/Work'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/footer/Footer'));
const Scrollup = lazy(() => import('./components/scrollup/Scrollup'));

function App() {
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [text, setText] = useState(""); // State to store the text to be displayed character by character
  const name = `A-MESRAR`; // The text to be displayed (used for the loading animation)

  // Simulating the typing effect for the loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 4 seconds (page loaded)
    }, 4000);

    let i = 0;
    const textTimer = setInterval(() => {
      if (i < name.length) {
        setText((prevText) => prevText + name[i]); // Adding one character at a time to the text
        i++;
      } else {
        clearInterval(textTimer); // Stop adding characters after the name is fully displayed
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(textTimer);
    };
  }, []);

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
    <Suspense fallback={<div className="loading-screen">Loading...</div>}>
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
    </Suspense>
  );
}

export default App; // Export the App component
