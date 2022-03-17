import React from 'react';
import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './component/Navbar/';
import About from './Pages/About';



function App() {
  return (
   
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Signup" element={<Signup/>}/>
        <Route exact path='/Login' element={<Login/>}/>
      </Routes>
    </Router>

  );
}

export default App;
