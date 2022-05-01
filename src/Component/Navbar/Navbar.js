import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar() {
  

  return (
    <>
      {/* <h1>This is the NavBar page</h1> */}
      <div className="navbar active">
      <ul >
      {/* <li><img src={'./assest/logo.svg'} alt="" srcset="" /></li> */}
      {/* <img src={'./assest/Favicon.png'} alt="" srcset="" /> */}
         <div className="logo"> <li> New Coding Era</li></div>
         <div className="right">
       
          <li> <Link to="home">Home </Link></li>
          <li> <Link to="blog"> Blog </Link></li>
          <li> <Link to="support"> Support </Link></li>
          <li> <Link to="contact"> Contact </Link></li>
       
          </div> 
          <input type="checkbox" id="check" />
          
          <label  for="check" class="checkbtn" > <i id='1' class="fa-solid fa-bars " ></i></label>
      </ul>
      </div>
    </>
  );
}

export default Navbar;
