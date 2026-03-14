import "./WorkcardStyle.css" ;
import Workcard from "./Workcard";
import WorkcardData from "./WorkcardData"



const Work = () => {
  return (
    <div className='work-container'>
    <h1 className='project-heading'> Projects</h1>
    <div className='project-container'>

    {WorkcardData.map((val,index)=>{
        return (
            <Workcard 
                key={index}
                imgsrc={val.imgsrc}
                title= {val.title}
                text={val.text}
                view={val.view}
                source={val.source}
            />
        )
    })}
     </div>
    </div>
  )
}

export default Work