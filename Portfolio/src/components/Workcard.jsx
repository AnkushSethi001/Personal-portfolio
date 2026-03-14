import "./WorkcardStyle.css" ;
import {NavLink} from "react-router-dom"


const Workcard = (props) => {

  return (

     <div className='project-card'> 
    <img src={props.imgsrc} alt="image"/>
    <h2 className="project-title">{props.title} </h2>
    <div className="pro-details"> 
    <p>{props.text}</p>
    <div className="pro-btns"> 
    <NavLink to={props.view} target="_main" className="btn"> 
    View </NavLink>

    <NavLink to={props.source} target="_main" className="btn"> 
    Source </NavLink>
    </div>
    </div>
    </div>
  )
}

export default Workcard