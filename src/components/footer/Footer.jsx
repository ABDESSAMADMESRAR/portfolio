import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div>  <footer className='footer'>
    <div className="container footer_container">
      <h1 className='footer__title'>MESRAR</h1>
      <ul className='footer-list '>
        <li className=''>
          <a href="#about" className='footer_link'>About</a>
        </li>
        <li className=''>
          <a href="#Projects" className='footer_link'>Projects</a>
        </li>
        <li className=''>
          <a href="#Services" className='footer_link'>Services</a>
        </li>
      </ul>
      <div className='footer__social'>
      <a href="https://twitter.com/ABDESSAMAD51194" className='footer__social-link' target='_blank'>
<i class="ri-twitter-x-fill"></i>
</a>
<a href="https://www.instagram.com/abdessamad.mesrar__02/" className='footer__social-link' target='_blank'>
<i class="ri-instagram-line"></i>
</a>

<a href="https://www.linkedin.com/in/abdessamad-mesrar/" className='footer__social-link' target='_blank'>
<i class="ri-linkedin-box-fill"></i>
</a>
<a href="https://github.com/ABDESSAMADMESRAR" className='footer__social-link' target='_blank'>
<i class="ri-github-fill"></i>
</a>
      </div>
      <span className='footer__copy'>&#169; All rights reserved to Masrar</span>
    </div>
  </footer>

    </div>
  )
}

export default Footer