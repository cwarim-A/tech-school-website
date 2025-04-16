import React from 'react'
import "../../styles/main.css"
import Footer from "../Footer/Footer"
import {Link} from "react-router-dom"
import ProgrammeCard from '../CoursesComponents/ProgrammeCard'

const DataAnalysis = () => {
  return (
    <>
    <div className="data-container">
      <ProgrammeCard course="Data Analysis" duration="12"/>
      <div className="course-description">
       <h1>
       Data Analysis Training in Lagos Nigeria
      </h1> 
      <p>Dive into the world of data with our Data Analysis course. Uncover the insights hidden within datasets and harness the power of data-driven decision-making. Learn to clean, visualize, and analyze data using industry-standard tools like Python and Excel. Join us to master the skills that transform raw information into actionable insights, driving success in today's data-driven landscape.
      </p>
      <h2>Who Should attend</h2>
      <li>Those who are switching career to tech industry</li>
      <li>Aspiring Data Analysts</li>
      <li>Business Professionals</li>
      <li>Data Enthusiasts</li>
      <li>Entry-Level Analysts</li>
      <li>Graduates and Students</li>
      <h2>Topics Covered</h2>
      <li>Introduction to Data Analysis</li>
      <li>Data Exploration and Cleaning</li>
      <li>Data Visualization</li>
      <li>Descriptive Statistics</li>
      <li>Inferential Statistics</li>
      <li>Exploratory Data Analysis (EDA)</li>
      <li>Regression Analysis</li>
      <li>Data Transformation and Manipulation</li>
      <li>Statistical Software and Tools</li>
      <li>Time Series Analysis</li>
      <li>Data Interpretation and Reporting</li>
      <li>Real-World Case Studies</li>
      <Link to="/register">
      <button className="apply-button">Register Now</button>
      </Link>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default DataAnalysis
