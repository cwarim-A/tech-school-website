import React from 'react'
import "./AvailableCourse.css"
import Computer from "../../assets/computer.png"
import DataScience from "../../assets/data-science.png"
import DataAnalysis from "../../assets/data.png"
import DevOps from "../../assets/devops.png"
import MobileApp from "../../assets/app-development.png"
import { Link, NavLink } from 'react-router-dom'
import {motion} from "framer-motion"


const Data = [
    {   id:1,
        courseName: "Data Analysis",
        icon: DataAnalysis ,
        path: "/dataanalysis"
    },
    {   id:2,
        courseName:"Software Development",
        icon: Computer,
        path:"/softwaredev"
    },
    {   id:3,
        courseName:"DevOps Engineering",
        icon: DevOps,
        path:"/devops"
    },
    {   id:4,
        courseName:'Mobile App',
        icon: MobileApp,
        path:"/mobileapp"
    },
    {   id:5,
        courseName:"Data Science",
        icon: DataScience,
        path:"/Datascience"

    }
]

const AvailableCourse = () => {
  return (
    <motion.div 
    className="available-course"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true, amount: 0.2 }}
>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        >Available Courses</motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        >Explore our wide range of courses designed to enhance your skills and knowledge in the field of technology. Whether you are a beginner or an experienced professional, we have something for everyone.</motion.p>
      <div className="course-list">
        {Data.map((item,index) => (
          
          <motion.div
          key={item.id}
          className="course-card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          >
            
            <img className="course-icon" src={item.icon} alt={item.courseName} />
            <p className="course-name">{item.courseName}</p>
           
          </motion.div>
          
        ))}
      </div>
    </motion.div>
  )
}

export default AvailableCourse
