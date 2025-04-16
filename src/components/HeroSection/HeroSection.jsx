// import React from "react"
// import "./HeroSection.css"
// import Coding from "../../assets/Coding.png"

// const HeroSection = () => {
//   return (
//     <div className="hero-section">
//       <div className="hero-content">
//       <h1>Empower Your Future with GoDev Tech Institute</h1>
//         <p>Unlock your potential in the world of technology through hands-on learning and expert guidance.</p>
//         <p>Join us and embark on a journey of innovation, creativity, and growth.</p>
//         <a href="/courses" className="cta-button">
//           Explore Courses
//         </a>
//       </div>
//       <img src={Coding} alt="Student pic"/>
//     </div>
//   )
// }

// export default HeroSection

import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";
import Coding from "../../assets/Coding.png";

const HeroSection = () => {
  return (
    <motion.div 
      className="hero-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="hero-content"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <h1>Empower Your Future with GoDev Tech Institute</h1>
        <p>Unlock your potential in the world of technology through hands-on learning and expert guidance.</p>
        <p>Join us and embark on a journey of innovation, creativity, and growth.</p>
        <a href="/courses" className="cta-button">
          Explore Courses
        </a>
      </motion.div>

      <motion.img 
        src={Coding} 
        alt="Student pic"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default HeroSection;

