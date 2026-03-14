import React from "react"
import "./index.css"

import Contact from "./routes/Contact"
import About from "./routes/About"
import Home from "./routes/Home"
import Project from "./routes/Project"
import Resume from "./routes/Resume"
import{createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom"
import LayoutOutlet from "./components/LayoutOutlet"


const App=()=> {

  const router = createBrowserRouter([
    
    {
      path: "/" ,
      element: <LayoutOutlet/>,
      children:[

          {
      path: "/" ,
      element:<Home/>,
    },

    {
      path: "/project" ,
      element:<Project/>,
    },

    {
      path: "/about" ,
      element:<About/>,
    },

    {
      path: "/Contact" ,
      element:<Contact/>,
    },
    {
      path: "/resume" ,
      element:<Resume/>,
    },

      ]
    },
    
    
  ])

  
  return <RouterProvider router={router}/>
}
export default App ;

