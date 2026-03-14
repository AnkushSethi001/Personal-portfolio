import { Link } from "react-router-dom"
import "./Navbarstyle.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import React, { useState } from 'react'

const Navbar = () => {

    const [click , setClick] = useState(false);
    const handleClick = ()=>{
        setClick(!click)
    }

    const [color , setcolor ]= useState(false);
    const changeColor = ()=> {
        if(window.scrollY >= 100){
            setcolor(true);
        }else{
            setcolor(false);
        };
    };

window.addEventListener("scroll" , changeColor);
  return (
    <div className={ color? "header  header-bg" :
    "header"}> 

    <Link to={"/"}  className="hover-effect">
    <h1> Portfolio</h1>
     </Link>

        
     <ul className={click ? "nav-menu active" : "nav-menu"} onClick={() => setClick(false)} >
        <li  >
            <Link to={"/"} > Home </Link>
        </li>

        <li>
            <Link to={"/project"}> Project </Link>
        </li>

        <li>
            <Link to={"/about"}> About </Link>
        </li>

        <li>
            <Link to={"/resume"}> Resume </Link>
        </li>

        <li>
            <Link to={"/contact"}> Contact </Link>
        </li>
     </ul>

     <div className="hamburger" onClick={handleClick}>
     {click?(<IoMdClose  size={20} style={{color:"#fff"}}/>)
      :
      (<GiHamburgerMenu  size={20} style={{color:"#fff"}}/>)}  
     </div>
    </div>
  );
};

export default Navbar