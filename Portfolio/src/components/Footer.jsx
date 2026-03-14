import "./Footerstyle.css"
import { FaLocationDot  } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container">

    <div className="left"> 

    <div className="location">
   
    <a href="https://tinyurl.com/hamirpur-location" target="_main"> <FaLocationDot className="icon" size={20} style={{color:"#fff", marginRight:"2rem"}}/>  Hamirpur Himachal Pardesh </a></div>

    <div className="phone">
    <h4> 
    <FaWhatsapp className="icon" size={20} style={{color:"#fff", marginRight:"2rem"}}/> 9418390039
    </h4>
     </div>

    <div className="mail">
    <h4>
     <a href="https://tinyurl.com/send-mail-to-ankush" target="_main">  <IoMdMail className="icon"   size={20} style={{color:"#fff", marginRight:"2rem" }} />Yourankushsethi@gmail.com </a>
    </h4>
    </div>

    </div>

    <div className="right">
    <h4 > About Me </h4>
    <p> Passionate developer with experience in </p> 
        <p>JavaScript, React, HTML , Tailwind Css, </p>
        <p>building projects that solve real-world problems.</p>
    
     

    <div className="social">
    <a  href="https://www.instagram.com/imankushsethi/?hl=en" target="_main">
    <FaInstagram className="icon" size={30} style={{color:"#fff", marginRight:"1rem"}} />  </a>

    <a  href="https://www.linkedin.com/in/ankushsethi001/" target="_main">
    <FaLinkedin className="icon" size={30} style={{color:"#fff", marginRight:"1rem"}} />  </a>

    <a  href=" https://www.facebook.com/AnkushSethi001/" target="_main">
    <FaFacebookSquare className="icon" size={30} style={{color:"#fff", marginRight:"1rem"}} />  </a>
    </div>
    
     </div>


    </div>
    </div>
  )
}

export default Footer