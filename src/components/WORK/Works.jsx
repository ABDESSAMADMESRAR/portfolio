import React, { useEffect, useState } from 'react'
import { projectsData } from './Date'
import { projectsNav } from './Date'
import WorkItmes from './WorkItmes'
function Works() {
  const[items,setitems]=useState({name:'All'});
  const [projects,setprojects]=useState([]);
  const [active ,setactive] =useState(0);
  useEffect(() => {
  if (items.name==="All") {
    setprojects(projectsData)
  }else{
    const newprojects =projectsData.filter((project)=>{
      return project.category=== items.name;
    })
    setprojects(newprojects)
  }
  }, [items])
  
  const   handleclick = (e,index) => {
    setitems({name:e.target.textContent})
    setactive(index)
  }
  return (
    <>
    <div className="works_filters">
{projectsNav.map((item,index)=>{
  return(
    <span onClick={(e)=>{
      handleclick(e,index)
    }} className={`${active===index ? 'active-Work' :""}
    work-item` } key={index}>{item.name}</span>
  )
})}
    </div>
    <div className="container grid work--container">
    {projects.map((item,index)=>{
  return(<WorkItmes item={item} key={item.id}></WorkItmes>
    
  )
})}
    </div>
    </>

  )
}

export default Works