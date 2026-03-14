import "./Heroimagestyle.css"

import React from 'react'
import herosection from "../assets/herosection.png"
import { Link } from "react-router-dom"

const Heroimage = () => {
  return (
    <div className="hero">
    <div className="mask"> 
    <img className="intro-img" src={herosection} alt="intro-ing"/>

    </div>

    <div className="content"> 
    <p>HI, I'M A FREELANCER</p>
    <h1>React JS Developer.</h1>
    <div>
      <Link to="/project" className="btn">Projects </Link>
        <Link to="/contact" className="btn-light">Contact </Link>
    </div>
    </div>
    </div>
  )
}

export default Heroimage