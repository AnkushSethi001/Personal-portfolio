import React from 'react'
import HeroImage2 from '../components/HeroImage2'
import Resumeimg from "../assets/Ankush Resume.jpg"
import "./ResumeStyle.css"

const Resume = () => {
  return (
    <>
    <div className='Resume'>
    <HeroImage2 heading="Resume" 
    text=""/>
    </div>

<div className='Resume-container'>
<img  className='ResumeImg' src={Resumeimg} alt='Resume'/>
  <a  href= {Resumeimg}  download="Ankush Resume.pdf">
      <button className='btn'> Download PDF </button>
    </a>
</div>

    </>

  )

}

export default Resume