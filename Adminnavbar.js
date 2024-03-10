import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './admin.css'


import Adminhome from './Adminhome';
import ViewCustomers from './ViewCustomers';

export default function Adminnavbar() 
{
  return (
    <div>

    <nav>
     <ul>
     <Link to="/">Home</Link>
     <Link to="/viewcustomers">View Customers</Link>
     </ul>
     </nav>

         <Routes>
         <Route path="/" Component={Adminhome} exact/>
         <Route path="/viewcustomers" Component={ViewCustomers} exact/>
         
         
        </Routes>

    </div>
  )
}