import React, { useEffect, useState } from 'react' // Importing React and necessary hooks
import { projectsData } from './Date' // Importing the project data array
import { projectsNav } from './Date' // Importing the navigation categories for filtering projects
import WorkItmes from './WorkItmes' // Importing the component that displays individual project items

function Works() {
  const[items,setitems]=useState({name:'All'}); // State to store the selected category for filtering
  const [projects,setprojects]=useState([]); // State to store the filtered project list
  const [active ,setactive] =useState(0); // State to track the active category for styling

  useEffect(() => {
    // This effect runs whenever the `items` state changes
    if (items.name==="All") {
      // If the selected category is 'All', show all projects
      setprojects(projectsData)
    } else {
      // Otherwise, filter projects based on the selected category
      const newprojects = projectsData.filter((project) => {
        return project.category === items.name;
      })
      setprojects(newprojects) // Update the `projects` state with the filtered projects
    }
  }, [items]) // Dependency array means this effect runs when `items` changes
  
  const handleclick = (e, index) => {
    // This function is triggered when a filter option is clicked
    setitems({name:e.target.textContent}) // Update the selected category in state
    setactive(index) // Set the active category index for styling purposes
  }

  return (
    <>
      <div className="works_filters">
        {/* Render filter buttons based on the navigation categories */}
        {projectsNav.map((item, index) => {
          return (
            <span 
              onClick={(e) => { handleclick(e, index) }} // Trigger handleclick when a filter option is clicked
              className={`${active === index ? 'active-Work' : ""} work-item`} 
              key={index}>
              {item.name}
            </span>
          )
        })}
      </div>

      <div className="container grid work--container">
        {/* Render the filtered projects */}
        {projects.map((item, index) => {
          return (
            <WorkItmes item={item} key={item.id}></WorkItmes> // Pass each project to the WorkItmes component
          )
        })}
      </div>
    </>
  )
}

export default Works // Export the Works component to be used in other parts of the app
