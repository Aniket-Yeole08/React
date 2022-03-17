// import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  signup_link
} from "react-router-dom";
import { Navbar } from './component/Navbar';



function App() {
  return (
    // <Login/>
    // <Signup/>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
