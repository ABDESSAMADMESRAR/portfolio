import React from "react";
import "./Scrollup.css"; // Import the CSS for scroll-up button styles
import ScrollToTop from "react-scroll-to-top"; // Import a library for scroll-to-top functionality

function Scrollup() {
  // Event listener for the scroll event to detect when the page is scrolled
  window.addEventListener("scroll", function () {
    const scroll = document.querySelector(".scrollup"); // Select the scroll-up button element

    // If the scroll position is greater than or equal to 560px, show the scroll-up button
    if (this.scrollY >= 560) {
      scroll.classList.add("show-up"); // Add the 'show-up' class to make the button visible
    } else {
      scroll.classList.remove("show-up"); // Remove the 'show-up' class to hide the button
    }

    // Add a click event listener to the scroll-up button to scroll the page to the top
    scroll.onClick = function () {
      window.scrollTo({
        top: 0, // Scroll to the top of the page
        behavior: "smooth", // Use smooth scrolling
      });
    };
  });

  return (
    // Render the scroll-up button with an up arrow icon
    <a href="" className="scrollup">
      <i class="ri-arrow-up-line scrollup-icon"></i>
    </a>
  );
}

export default Scrollup;
