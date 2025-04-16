import React from 'react'
import {BiCalendar,BiTime} from "react-icons/bi"
import Coding from "../../assets/Coding5.jpg"
import {GoLocation}  from "react-icons/go"
import {Link} from "react-router-dom"
import Footer from "../Footer/Footer"
import "../../styles/main.css"
import ProgrammeCard from '../CoursesComponents/ProgrammeCard'



const BackEnd = () => {
  return (
    <>
    <div className="data-container">
    <ProgrammeCard course="Backend Development" duration="12"/>
   <div className="course-description">
    <h1>
    BackEnd Development Training in Lagos Nigeria
   </h1> 
   <p>Unlock the world of Backend Development with our comprehensive course. Dive into the heart of web applications, mastering the art of server-side programming and database management. Learn to create robust, efficient, and scalable backend systems using industry-leading technologies such as Node.js or Django.
   </p>
   <h2>Who Should attend</h2>
   <li>Aspiring Backend Developers</li>
   <li>Full Stack Developers</li>
   <li>Web Developers</li>
   <li>Computer Science Graduates</li>
   <h2>Technologies Covered</h2>
   <li>Node.js Fundamentals</li>
   <li> Express.js</li>
   <li>Database Integration</li>
   <li>API Development</li>
   <li>Authentication and Security</li>
   <li>Real-time Communication</li>
   <li> Deployment</li>
  <Link to="/register">
  <button className="apply-button">Register Now</button>
  </Link>
   </div>
 </div>
 <Footer/>
 </>
  )
}

export default BackEnd
