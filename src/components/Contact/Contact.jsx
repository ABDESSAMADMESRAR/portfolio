import React, { useRef } from 'react'; // Importing necessary dependencies from React
import emailjs from '@emailjs/browser'; // Importing emailjs for sending emails directly from the form
import "./Contact.css"; // Importing CSS for styling
import ScrollReveal from 'scrollreveal'; // Importing ScrollReveal for animations when elements come into view
import { useEffect } from 'react'; // Importing useEffect for executing code on component mount

function Contact() {

  useEffect(() => {
    // Initializing ScrollReveal with custom configuration
    let sr = ScrollReveal({
      origin: "top", // Animations start from the top
      distance: "60px", // Distance the elements will move
      duration: 1000, // Duration of the animation in milliseconds
      delay: 400, // Delay before the animation starts
    });

    // Revealing different sections with animations from different directions
    sr.reveal(`.Portfolio2`, { origin: "bottom" }); // Revealing Portfolio2 from bottom
    sr.reveal(`#Me`, { origin: "left" }); // Revealing Me section from left
    sr.reveal(`#contact__card1`, { origin: "top" }); // Revealing contact__card1 from top
    sr.reveal(`#contact__card2`, { origin: "top" }); // Revealing contact__card2 from top
    sr.reveal(`#contact__card3`, { origin: "bottom" }); // Revealing contact__card3 from bottom
    sr.reveal(`#Talk`, { origin: "top" }); // Revealing Talk section from top
    sr.reveal(`#Write`, { origin: "top" }); // Revealing Write section from top
    sr.reveal(`.contact__form`, { origin: "top" }); // Revealing the contact form from top
  
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Reference to the form element
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Preventing default form submission

    // Sending the form data using emailjs service
    emailjs.sendForm('service_o7we0yb', 'template_17ia9rf', form.current, {
      publicKey: 'bWyW3cn3EIGZosUfq', // Emailjs public key for authentication
    })
    e.target.reset(); // Reset the form after submission
  };

  return (
    <section className="section_ContactMe ContactMe" id="Contact">
      <h2 className="section__title Portfolio2" id="Portfolio">
        Get in touch
      </h2>
      <span className="section__subtitle" id="Me">Contact Me</span>
      <div className="container grid Contact_container">
        <div className="contact_content">
          <h3 className="contact__title" id="Talk">Talk to me</h3>
          <div className="contact__info">
            {/* First contact card for Email */}
            <div className="contact__card" id="contact__card1">
              <i className="ri-mail-line contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-date">abdsamad.mesrar.9@gmail.com</span>
              <a href="mailto:abdsamad.mesrar.9@gmail.com" target="_blank" className="contact__button">Write me <i className="ri-arrow-right-circle-fill contact_button-icon"></i></a>
            </div>

            {/* Second contact card for WhatsApp */}
            <div className="contact__card" id="contact__card3">
              <i className="ri-whatsapp-line contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-date">+212 0626249432</span>
              <a href="https://api.whatsapp.com/send/?phone=2120626249432&text&type=phone_number&app_absent=0" target="_blank" className="contact__button">Write me <i className="ri-arrow-right-circle-fill contact_button-icon"></i></a>
            </div>

            {/* Third contact card for Twitter */}
            <div className="contact__card" id="contact__card3">
              <i className="ri-twitter-x-line contact__card-icon"></i>
              <h3 className="contact__card-title">twitter</h3>
              <span className="contact__card-date">@ABDESSAMAD51194</span>
              <a href="https://twitter.com/ABDESSAMAD51194" target="_blank" className="contact__button">Write me <i className="ri-arrow-right-circle-fill contact_button-icon"></i></a>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="contact_content">
          <h3 className="contact__title" id="Write">Write me your project</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact_form-div">
              <label htmlFor="" className="contact_form-tag">Name</label>
              <input type="text" name="name" className="contact_form-input" placeholder="Insert your Name" />
            </div>

            {/* Email input */}
            <div className="contact_form-div">
              <label htmlFor="" className="contact_form-tag">Mail</label>
              <input type="email" name="email" className="contact_form-input" placeholder="Insert your email" />
            </div>

            {/* Subject input */}
            <div className="contact_form-div">
              <label htmlFor="" className="contact_form-tag">Subject</label>
              <input type="text" name="Subject" className="contact_form-input" placeholder="Insert your Subject" />
            </div>

            {/* Message input */}
            <div className="contact_form-div contact_form-are">
              <label htmlFor="" className="contact_form-tag">Message</label>
              <textarea name="message" className="contact_form-input" placeholder="Insert Your message"></textarea>
            </div>

            {/* Submit button */}
            <button className="button">
              Send Message
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="#fff"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="#000"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
