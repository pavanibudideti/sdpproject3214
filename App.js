//import logo from './logo.svg';
//import './App.css';

import {BrowserRouter as Router} from 'react-router-dom'
import MainNavBar from './mainpage/MainNavBar';
import Adminnavbar from './admin/Adminnavbar';
function App() {
  return (
    <div className="App">

      <h3 align="center">PET ADAPTION AND ACCESSORIES MANAGEMENT SYSTEM </h3>

       <Router>
        <MainNavBar/>
        {/* <Adminnavbar/> */}
       </Router>

    </div>
  );
}

export default App;