import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import './style.css'
import CustomerLogin from './../customer/CustomerLogin';
import Registration from './../customer/Registration';
import Contact from './Contact';
import Adminlogin from './../admin/Adminlogin';


export default function MainNavBar() 
{
  return (
    <div>
       
       <nav>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/registration">Registration</Link>
            <Link to="/customerlogin">Customer Login</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/adminlogin">Admin Login</Link>
          
        </ul>
        </nav>


     <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        <Route path="/registration" element={<Registration/>} exact/>
        <Route path="/customerlogin" element={<CustomerLogin/>} exact/>
        <Route path="/contact" element={<Contact/>} exact/>
        <Route path="/adminlogin" element={<Adminlogin/>} exact/>
       
     </Routes>

    </div>
  )
}