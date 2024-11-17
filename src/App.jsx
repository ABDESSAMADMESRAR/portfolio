import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/Home/Home'
import About from './components/about/About'
import Skills from './components/Skills/Skills'
import Services from './components/services/Services'
import Work from './components/WORK/Work'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/Footer'
import Scrollup from './components/scrollup/Scrollup'




function App() {


  return (
    <>
<Header></Header>
<main className='main'>
<Home></Home>
<About></About>
<Skills></Skills>
<Services></Services>
<Work></Work> <br /><br />
<Contact></Contact>
</main>
<Footer></Footer>
<Scrollup></Scrollup>



    </>
  )
}

export default App
