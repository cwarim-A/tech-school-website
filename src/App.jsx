import React from "react";
import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home"
import Courses from "./components/pages/Courses";
import About from "./components/pages/About";
import Contact from './components/pages/Contact'
import RootLayout from "./components/pages/RootLayout";
import DataAnalysis from "./components/CoursesOffered/DataAnalysis";
import SoftwareDev from "./components/CoursesOffered/SoftwareDev";
import Devops from "./components/CoursesOffered/Devops";
import MobileApp from "./components/CoursesOffered/MobileApp";
import DataScience from "./components/CoursesOffered/DataScience"
import UxDesign from "./components/CoursesOffered/UxDesign"
import FrontEnd from "./components/CoursesOffered/FrontEnd"
import BackEnd from "./components/CoursesOffered/BackEnd"
import WebDesign from "./components/CoursesOffered/WebDesign";
import Register from "./components/pages/Register";


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
      <Route index  element={<Home/>}/>
      <Route path="/courses" element={<Courses/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/dataanalysis" element={<DataAnalysis/>}/>
      <Route path="/softwaredev" element={<SoftwareDev/>}/>
      <Route path="/devops" element={<Devops/>}/>
      <Route path="/mobileapp" element={<MobileApp/>}/>
      <Route path="/Datascience" element={<DataScience/>}/>
      <Route path="/uxdesign" element={<UxDesign/>}/>
      <Route path="/frontend" element={<FrontEnd/>}/>
      <Route path="/backend" element={<BackEnd/>}/>
      <Route path="/webdesign" element={<WebDesign/>}/>
      <Route path="/register" element={<Register/>}/>
    </Route>
    )
  )

function App() {
  return (
    <>
     <RouterProvider router={router}/>
      
    </>
  );
}

export default App;
