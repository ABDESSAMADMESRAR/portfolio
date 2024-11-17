import React from 'react'
import "./Home.css";
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
function Socile() {
  useEffect(() => {
    let sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 100,
      delay: 400,
    });

    sr.reveal(`.home__social`, {
    
      origin: "bottom",
    });
  
  }, []);

  return (
    <>
    <div className=' home__social'>
<a href="https://twitter.com/ABDESSAMAD51194" className='home__social-icon' target='_blank'>
<i class="ri-twitter-x-fill"></i>
</a>
<a href="https://www.instagram.com/abdessamad.mesrar__02/" className='home__social-icon' target='_blank'>
<i class="ri-instagram-line"></i>
</a>

<a href="https://www.linkedin.com/in/abdessamad-mesrar/" className='home__social-icon' target='_blank'>
<i class="ri-linkedin-box-fill"></i>
</a>
<a href="https://github.com/ABDESSAMADMESRAR" className='home__social-icon' target='_blank'>
<i class="ri-github-fill"></i>
</a>

    </div>
    </>
  )
}

export default Socile