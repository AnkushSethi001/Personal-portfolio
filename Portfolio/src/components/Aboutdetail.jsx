import React from 'react'
import "./AboutdetailStyle.css"
import { Link } from "react-router-dom"
import photo from "../assets/Photo.png"

const Aboutdetail = () => {
  return (

    <div className='main'>

    <div className='main-2'> 

   <div className='left-main'>

    <div  className='left1'>
    
      <h1>Hello, I'm</h1>
      <h2>Ankush Sethi</h2>
      <h3>Frontend / React Js Developer </h3>
      
      <p>Aspiring web developer with skills in HTML, CSS, Tailwind CSS , JavaScript, React, React-Redux and Python. Passionate about building practical 
      web applications and starting a career in the 
      IT industry. </p>
    <div><Link to="/project" className="btn">Projects </Link></div> 
    </div>

    </div>

    
    <div className='center'>
       <img src={photo}  className="img1" alt="image"/>
    </div>
    


    <div className='right-main'>
    
<div className='right2'>

      <div className='container-right'>
      <h1>HTML,CSS</h1>
      <p>6 Month Experience</p>
       </div>

       <div className='container-right'>
      <h1>Tailwind CSS</h1>
      <p>6 Month Experience</p>
       </div>

       <div className='container-right'>
      <h1>JavaScript</h1>
      <p>6 Month Experience</p>
       </div>

       <div className='container-right'>
      <h1>React JS </h1>
      <p>6 Month Experience</p>
       </div>

       
       <div className='container-right'>
      <h1>React-Redux </h1>
      <p>6 Month Experience</p>
       </div>

    <div className='container-right'>
      <h1>Python(Basic) </h1>
      <p> </p>
       </div>

       <div className='container-right'>
      <h1>Tools</h1>
      <p>GIt & GitHub</p>
      <p>VS Code / Pycharm</p>
       </div>
    </div>
    </div>
    </div>
    </div>

  
  )
}

export default Aboutdetail