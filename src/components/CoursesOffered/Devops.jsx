import React from 'react'
import { BiCalendar, BiTime } from "react-icons/bi"
import {GoLocation} from "react-icons/go"
import Coding from "../../assets/Coding5.jpg"
import {Link} from "react-router-dom"
import "../../styles/main.css"
import Footer from "../Footer/Footer"
import ProgrammeCard from '../CoursesComponents/ProgrammeCard'

const Devops = () => {
  return (
    <>
    <div className="data-container">
      <ProgrammeCard course="Devops" duration="12"/>
      <div className="course-description">
       <h1>
       Devops Training in Lagos Nigeria
      </h1> 
      <p>Unlock the power of seamless software development and deployment with our comprehensive DevOps course. Master the art of continuous integration, delivery, and automation, equipping yourself with the skills to streamline collaboration, enhance efficiency, and drive innovation across the software development lifecycle
      </p>
      <h2>Who Should attend</h2>
      <li>Software Developers</li>
      <li>System Administrators</li>
      <li>Quality Assurance Engineers</li>
      <li>DevOps Engineers</li>
      <h2>Technologies Covered</h2>
      <li>Git</li>
      <li> Jenkins</li>
      <li>CircleCi</li>
      <li>Docker</li>
      <li>Kubernetes </li>
      <li>Terraform</li>
      <li> Amazon Web Services (AWS)  and Many more</li>
      <Link to="/register">
      <button className="apply-button">Register Now</button>
      </Link>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Devops
