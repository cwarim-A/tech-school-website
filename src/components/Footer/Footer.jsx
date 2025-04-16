import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram,FaLinkedin} from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="logo">
           <h1>GoDev</h1>
        </div>
      <div className="contact-details">
        <h3>Contact Us</h3>
        {/* <p>For more info on our courses contact:</p> */}
        <p>Email: akoladequam@gmail.com</p>
        <p>Phone: +2348167743967</p>
        <p>Address: 115 ezeagu street off ojo road ajegunle Lagos Nigeria</p>
      </div>
      <div className="links">
        <h2>Links</h2>
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/courses">Courses</a>
        <a href="/about">About Us</a>
      </div>
      <div className="social-media">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://web.facebook.com/akolade.quam/"><FaFacebook size={25} /></a>
          <a href="https://twitter.com/LanreQuam"><FaTwitter size={25} /></a>
          <a href="/"><FaInstagram size={25} /></a>
          <a href="/"><FaLinkedin size={25} /></a>
        </div>
        <p>&copy;Website by DevLanrey 💙 2023 </p>
      </div>
     
    </footer>
  )
}

export default Footer
