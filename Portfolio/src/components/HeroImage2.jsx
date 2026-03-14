import "./HeroImage2style.css"

import React from 'react'

const HeroImage2 = (props) => {
  return (
    <div className="hero-img" >
    <div className="heading">
         {props.heading}
        <p className="text">{props.text}</p>
       
    </div>
    </div>
  )
}

export default HeroImage2