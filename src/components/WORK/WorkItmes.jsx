import React from 'react'  // Importing React to build the component
import { useEffect } from 'react'  // Importing the useEffect hook from React to handle side effects
import ScrollReveal from 'scrollreveal'  // Importing the ScrollReveal library to create scroll animations

function WorkItmes({item}) {  // Defining the functional component 'WorkItmes' that accepts a prop 'item'
  useEffect(() => {  // The useEffect hook will run once when the component mounts
    let sr = ScrollReveal({  // Initializing ScrollReveal with configuration for animation
      origin: "top",  // The animation will start from the top of the page
      distance: "60px",  // The content will move 60px during the animation
      duration: 1000,  // The animation will last for 1000ms (1 second)
      delay: 400,  // The animation will start after a 400ms delay
    });

    sr.reveal(`.work--cards `, {  // Revealing elements with the class '.work--cards'
      origin: "left",  // The animation will come from the left side
      interval:100  // The elements will animate with a 100ms interval between them
    });

  }, []);  // Empty dependency array ensures that this effect runs only once when the component mounts

  return (  // JSX syntax to render the component
    <>
      <a href={item.link} target="_blank" className='work--button'> 

    <div className="work--cards" key={item.id}> 
      <img src={item.image} className='work--img'></img>  
      <h3 className='work--title' id='work--title'>{item.title}</h3> 
 
        <i class="ri-arrow-right-circle-fill   work--button-icon ">  <b style={{ cursor: 'pointer'}}>Demo </b></i>  
    </div>
    </a>

    </>
  )
}

export default WorkItmes  // Exporting the 'WorkItmes' component to be used in other parts of the app
