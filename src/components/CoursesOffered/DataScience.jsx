import React from 'react'
import Coding from "../../assets/Coding5.jpg"
import { BiTime,BiCalendar } from "react-icons/bi"
import {GoLocation} from "react-icons/go"
import Footer from "../Footer/Footer"
import {Link} from "react-router-dom"
import "../../styles/main.css"
import ProgrammeCard from '../CoursesComponents/ProgrammeCard'


const DataScience = () => {
  return (
    <>
    <div className="data-container">
      <ProgrammeCard course="Data Science" duration="12"/>
      <div className="course-description">
       <h1>
       Data Science Training in Lagos Nigeria
      </h1> 
      <p>Dive into the dynamic world of Mobile App Development with our comprehensive course. Learn to craft seamless, user-centric mobile experiences across platforms. Gain hands-on expertise in app design, coding, and deployment using industry-leading tools and frameworks
      </p>
      <h2>Who Should attend</h2>
      <li>Aspiring Developers</li>
      <li>Software Enthusiasts</li>
      <li>Computer Science Students</li>
      <li>Career Changers</li>
      <h2>Technologies Covered</h2>
      <li>Java</li>
      <li> Swift</li>
      <li>Android Studio</li>
      <li>Xcode</li>
      <li>Android </li>
      <li>iOS</li>
      <li> SQLite and Many More</li>
      <Link to="/register">
      <button className="apply-button">Register Now</button>
      </Link>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default DataScience
