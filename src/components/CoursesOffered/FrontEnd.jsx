import React from "react"
import {BiCalendar,BiTime} from "react-icons/bi"
import Coding from "../../assets/Coding5.jpg"
import {GoLocation}  from "react-icons/go"
import {Link} from "react-router-dom"
import Footer from "../Footer/Footer"
import ProgrammeCard from "../CoursesComponents/ProgrammeCard"
import "../../styles/main.css"

const FrontEnd = () => {
  return (
    <>
    <div className="data-container">
       <ProgrammeCard course="Frontend Dev" duration="12"/>
      <div className="course-description">
       <h1>
       FrontEnd Development Training in Lagos Nigeria
      </h1> 
      <p>Embark on a journey of creativity and innovation with our Frontend Development course. Dive deep into the world of web technology, mastering the art of crafting captivating user interfaces and seamless user experiences. Gain proficiency in HTML, CSS, and JavaScript, along with popular frameworks like React and Vue.js.
      </p>
      <h2>Who Should attend</h2>
      <li>Aspiring Developers</li>
      <li>Software Enthusiasts</li>
      <li>Computer Science Students</li>
      <li>Designers</li>
      <h2>Technologies Covered</h2>
      <li>HTML</li>
      <li> CSS</li>
      <li>Javascript</li>
      <li>React</li>
      <li>CSS Flexbox</li>
      <li>CSS Grid</li>
      <li> React Context</li>
      <li>Fetch Api and Axios</li>
      <li>Git</li>
      <li>Webpack</li>
      <li>jest</li>
      <li>Netlify and Vercel</li>
      <Link to="/register">
      <button className="apply-button">Register Now</button>
      </Link>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default FrontEnd
