import React from "react"
import {useState} from "react"
import "../../styles/Register.css"

const Register = () => {

    const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { fullName, email, phone, course, message });
  };

  return (
    <div className="form-container">
      <h1>Fill out this form to register for our training</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="course">Course of Interest:</label>
        <select
          id="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select a course</option>
          <option value="web_design">Web Design</option>
          <option value="data_analysis">Data Analysis</option>
          <option value="backend_development">Backend Development</option>
          <option value="ux_design">UX Design</option>
          <option value="Software_development">Software Development</option>
          <option value="dev_ops">Devops</option>
          <option value="mobile_app">Mobile App</option>
          <option value="data_science">Data Science</option>
          <option value="frontend_development">Front-end Development</option>
          <option value="web_design">Web Design</option>
        </select><br /><br />

        <label htmlFor="message">Message (optional):</label><br />
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          cols="50"
        ></textarea><br /><br />

        <button type="submit">Submit form</button>
      </form>
    </div>
  )
}

export default Register
