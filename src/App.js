import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";
import Navbar from './component/Navbar';



function App() {
  return (
    <Login/>,
    <Router>
      
      {/* <Signup/> */}
      <Navbar></Navbar>
      <Routes>
        <Route exact path ="/Login" element={<Login/>}></Route>
        <Route exact path="/Signup" element={<Signup/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
