import React from 'react'
import "../../styles/courses.css"
import Computer from "../../assets/computer.png"
import DataScience from "../../assets/data-science.png"
import DataAnalysis from "../../assets/data.png"
import DevOps from "../../assets/devops.png"
import MobileApp from "../../assets/app-development.png"
import Design from "../../assets/design.png"
import FrontEnd from "../../assets/front-end.png"
import BackEnd from "../../assets/backend.png"
import Footer from "../Footer/Footer"
import { FaGreaterThan } from "react-icons/fa"
import { Link } from 'react-router-dom'


const Data = [
  {   id:1,
      courseName: "Data Analysis",
      icon: DataAnalysis,
      desc:"Studying Data Analysis in our tech school offers a multitude of advantages that can greatly enhance your React app development skills. As you delve into the world of data, you'll gain the ability to harness the power of data-driven decision-making within your app projects.",
      path:"/dataanalysis"
  },
  {   id:2,
      courseName:"Software Development",
      icon: Computer,
      desc:"Studying Software Development in our tech school presents a multitude of advantages that can significantly amplify your React app development capabilities. Immersing yourself in the world of software engineering equips you with the skills and knowledge necessary to craft robust, efficient, and feature-rich applications.",
      path:"/softwaredev"
  },
  {   id:3,
      courseName:"DevOps",
      icon: DevOps,
      desc: "Studying DevOps in our tech school offers a range of advantages that can significantly elevate your React app development endeavors. Embracing the DevOps philosophy equips you with the tools and mindset to streamline and optimize your app development lifecycle.",
      path:"/devops"
  },
  {   id:4,
      courseName:'Mobile App',
      icon: MobileApp,
      desc:"By delving into Mobile App Development, you'll seamlessly extend your React app projects to mobile platforms, catering to users on smartphones and tablets. This expansion increases your app's reach and potential impact, allowing you to connect with a diverse user base.",
      path:"/mobileapp"
  },
  {   id:5,
      courseName:"Data Science",
      icon: DataScience,
      desc: "Studying Data Analysis in our tech school presents a range of advantages that can greatly enhance your React app development skills. Delving into the world of data empowers you to create data-driven and user-focused applications that stand out in today's competitive landscape.",
      path: "/Datascience"
  },
  {
    id:6,
    courseName: "UX Design",
    icon: Design,
    desc:"Studying UI/UX (User Interface/User Experience) Design in our tech school offers a spectrum of advantages that can greatly amplify your skills in React app development. Immerse yourself in the world of design, and you'll seamlessly infuse your React app projects with visually appealing aesthetics and user-centric experiences.",
    path:"/uxdesign"
  },
  {
    id:7,
    courseName:"FrontEnd Development",
    icon: FrontEnd,
    desc: "By immersing yourself in crafting compelling descriptions, you'll seamlessly enhance the presentation of your React apps. Your ability to convey the essence of your apps through clear and engaging language will capture the attention of users and potential stakeholders.",
    path:"/frontend"
  },{
    id:8,
    courseName:"Back End Development",
    icon: BackEnd,
    desc:"Mastering Backend Development empowers you to design and implement APIs, enabling seamless communication between your frontend and backend systems. This proficiency ensures that your React apps can retrieve and manipulate data, providing users with dynamic and interactive experiences.",
    path:"/backend"
  },
  {
    id:9,
    courseName:'Web Design',
    icon:Design,
    desc:"Studying web design in our school offers a multitude of advantages that can significantly enrich your skillset and open doors to exciting opportunities. Immerse yourself in the world of web design, and you'll embark on a creative journey that blends artistic expression with technical mastery.",
    path:"/webdesign"
  }
]

const Courses = () => {
  
  return (
    <>
    <div className="courses">
      <h3 className="location">Home <FaGreaterThan size={12}/> courses</h3>
      <h1>Our Training in Lagos</h1>
      <p className="bootcamp-description">Our Bootcamp Training is a rigorous and immersive program designed to accelerate your learning journey. With a focus on practical skills and hands-on experience, you will dive deep into cutting-edge technologies and industry best practices.</p>
      <div className="course-list-available">
        {Data.map((item)=>(
          <div key={item.id} className="course-card-available">
            <Link to={item.path}>
              <img className="course-icon" src={item.icon} alt={item.courseName} />
              <h2 className="course-name">{item.courseName}</h2>
              <p>{item.desc}</p>
              <span className="course-link" >Read More</span>
             </Link>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Courses
