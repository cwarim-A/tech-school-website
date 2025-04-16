import React from 'react'
import Coding from "../../assets/Coding5.jpg"
import { BiCalendar, BiTime } from 'react-icons/bi'
import { GoLocation } from 'react-icons/go'
import "./ProgrammeCard.css"


const ProgrammeCard = ({ course, duration }) => {
    return (
        <div className="card-container">

            <img src={Coding} alt="Image" className='image' />

            <div className='text-container'>
                <div className="course-title">
                    <h2>Introduction to {course}.</h2>
                </div>
                <div className="duration">
                    <BiCalendar size={25} />
                    <p>Duration: {duration}weeks</p>
                </div>
                <div className="Time">
                    <BiTime size={25} />
                    <div className="session">
                        <div className='afternoon'>
                            <p>Afternoon (2pm to 5pm) </p>
                            <span>(Mon,wed and Fri)</span>
                        </div>
                        <div className='morning'>
                            <p>Morning (10am to 1pm) </p>
                            <span>(Tue & Thur)</span>
                        </div>
                    </div>
                </div>
                <div className="address">
                    <GoLocation size={30} />
                    <p>115 ezeagu street off ojo Road Ajegunle Lagos State.</p>
                </div>
            </div>

        </div>

    )
}

export default ProgrammeCard