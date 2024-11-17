import React from 'react'
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

function WorkItmes({item}) {
  useEffect(() => {
    let sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 1000,
      delay: 400,
    });

    sr.reveal(`.work--cards `, {
    
      origin: "left",
      interval:100
    });

  
  }, []);
  return (
    <>
<div className="work--cards" key={item.id}>
<img src={item.image} className='work--img'></img>
<h3  className='work--title' id='work--title'>{item.title}</h3>
<a href={item.link}  target="_blank" className='work--button'>
  <i class="ri-arrow-right-circle-fill   work--button-icon ">  <b style={{  cursor: 'pointer'}}>Demo </b></i>
</a>
</div>
    </>
  )
}

export default WorkItmes