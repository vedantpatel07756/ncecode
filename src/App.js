import { Routes, Route } from "react-router-dom"
import Navbar from "./Component/Navbar/Navbar"
import Home from "./Component/Home/Home"
import Contact from "./Component/Contact/Contact"
import React from 'react';
import Blog from './Component/Blog/Blog';
import Support from './Component/Support/Support';
import Footer  from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/home" element={ <Home/> } />
        <Route   path="/" element={ <Home/> } />
        <Route  exact path="blog" element={ <Blog/> } />
        <Route  exact path="support" element={ <Support/> } />
        <Route exact path="contact" element={ <Contact/> } />
      </Routes>
    <Footer/>

    </div>
  )
}

export default App