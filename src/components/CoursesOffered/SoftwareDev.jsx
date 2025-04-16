import React from "react"
import { BiCalendar, BiTime } from "react-icons/bi"

import { GoLocation } from "react-icons/go"
import {Link} from "react-router-dom"
import Footer from "../Footer/Footer"
import ProgrammeCard from "../CoursesComponents/ProgrammeCard"

const SoftwareDev = () => {
  return (
    <>
    <div className="data-container">
       <ProgrammeCard course="Software development" duration="12"/>
      <div className="course-description">
       <h1>
       Software Development Training in Lagos Nigeria
      </h1> 
      <p>Unlock your potential with our software development program. Acquire industry-leading skills, hands-on experience, and mentorship, propelling you towards a successful and fulfilling career.
      </p>
      <h2>Who Should attend</h2>
      <li>Aspiring developers</li>
      <li>Coding enthusiasts,</li>
      <li>Anyone eager to excel in the world of programming</li>
      <li>Whether you're a beginner or seeking to enhance your skills, this program is tailored to guide you on your journey."</li>
      <h2>Technologies Covered</h2>
      <li>JavaScript</li>
      <li> Python</li>
      <li>Java</li>
      <li>Databases (SQL, NoSQL)</li>
      <li>Version control (Git), </li>
      <li>web frameworks (React, Angular)</li>
      <li> Server-side development.</li>
      <Link to="/register">
      <button className="apply-button">Register Now</button>
      </Link>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default SoftwareDev
