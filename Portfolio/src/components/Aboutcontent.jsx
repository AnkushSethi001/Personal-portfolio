import { Link } from "react-router-dom"
import "./AboutcontentStyle.css"
import React1 from "../assets/react 1.jpg"
import React2 from "../assets/react 2.jpg"
import React3 from "../assets/react.png"

import React from 'react'

const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1> Who Am I?</h1>
            <p> I'm a React front-end developer. I create responsive secure website for my clients.</p>
        <Link to="/contact"> <button className="btn"> Contact</button></Link>
        </div>
        <div className="right">
            <div className="img-container"> 

            <div className="img-stack top">
            <img src={React3}  className="img" alt="image"/> 
            </div>

             <div className="img-stack bottom"> 
             <img src={React1}  className="img" alt="image"/> 
            </div>

            </div>
        </div>
    </div>
  )
}

export default Aboutcontent