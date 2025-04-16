import React from "react"
import {Link} from "react-router-dom"

import "../../styles/main.css"
import Footer from "../Footer/Footer"
import ProgrammeCard from "../CoursesComponents/ProgrammeCard"


const UxDesign = () => {
  return (
    <>
    <div className="data-container">
    <ProgrammeCard course="Ux Design" duration="12"/>
   <div className="course-description">
    <h1>
    UX Design Training in Lagos Nigeria
   </h1> 
   <p>Step into the world of User Experience (UX) Design with our comprehensive course. Immerse yourself in the art of crafting seamless digital interactions that delight users. Learn to empathize with users, conduct meaningful research, create intuitive wireframes, and design captivating interfaces.
   </p>
   <h2>Who Should attend</h2>
   <li>Aspiring UX Designers</li>
   <li>Graphic Designers</li>
   <li>Web Designers</li>
   <li>Product Managers</li>
   <li>UI Designers</li>
   <h2>Technologies Covered</h2>
   <li>Figma</li>
   <li> Adobe XD</li>
   <li>Axure</li>
   <li>Lucid Chart</li>
   <li>Miro</li>
   <li>Google Analytics</li>
   <li> Hotjar</li>
   <li>Slack and Many more</li>
  <Link to="/register">
   <button className="apply-button">Register Now</button>
   </Link>
   </div>
 </div>
 <Footer/>
   </>
  )
}

export default UxDesign
