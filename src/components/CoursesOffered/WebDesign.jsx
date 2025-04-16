import React from "react"
import {Link} from "react-router-dom"
import Footer from "../Footer/Footer"
import ProgrammeCard from "../CoursesComponents/ProgrammeCard"
import "../../styles/main.css"



const WebDesign = () => {
  return (
    <>
    <div className="data-container">
   <ProgrammeCard course="Web Design" duration="12"/>
   <div className="course-description">
    <h1>
    Web Design Training in Lagos Nigeria
   </h1> 
   <p>Unleash your creativity with our WordPress Web Design course. Immerse yourself in the world of designing stunning websites using the powerful WordPress platform. Learn to customize themes, optimize user experience, and harness the full potential of WordPress plugins.
   </p>
   <h2>Who Should attend</h2>
   <li>Aspiring Web Designers</li>
   <li>Beginner Designers</li>
   <li>Content Creators</li>
   <li>Small Business Owners</li>
   <li>Freelancers</li>
   <h2>Technologies Covered</h2>
   <li>WordPress Basics</li>
   <li> Theme Customization</li>
   <li>Page Builders</li>
   <li>Content Creation</li>
   <li>Plugins and Widgets</li>
   <li>Responsive Design</li>
   <li> Optimization</li>
   <li>E-Commerce Integration</li>
   <li>User Experience (UX)</li>
   <li>Media Management</li>
   <li>Customization with CSS</li>
   <li>Deployment and Hosting</li>
   <Link to="/register">
   <button className="apply-button">Register Now</button>
   </Link>
   </div>
 </div>
 <Footer/>
   </>
  )
}

export default WebDesign
