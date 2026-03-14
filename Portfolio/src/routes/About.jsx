import React from 'react'
import { Outlet } from 'react-router-dom'
import HeroImage2 from '../components/HeroImage2'
import Aboutcontent from '../components/Aboutcontent'
import Aboutdetail from '../components/Aboutdetail'
import "./About.css"

const About = () => {
  return (
    <>
    <div className='About'>
      <HeroImage2  heading={<Aboutdetail/>} />
    <Aboutcontent/>
    
    </div>
    </>
  )
}

export default About