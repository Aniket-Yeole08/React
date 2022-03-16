import React from 'react'
import { Router, useNavigate } from 'react-router'
import "../style/Signup.css"
// import { BrowserRouter
// as Router
// } from 'react-router-dom'
const Signup = () => {
  // const navigate=useNavigate();
  return (
    <div className="center">
    <h1>Sign Up</h1>
    <form method="post">
      <div className="txt_field">
        <input type="text" required/>
        <span className="eye"><i className="fa fa-lg fa-user"></i></span>
        <label>Name</label>
      </div>
      <div className="txt_field">
        <input type="email"/>
        <span className="eye"><i className="fa fa-lg fa-envelope-open"></i></span>
        <label>E-mail</label>
      </div>
      <div className="txt_field">
        <input type="password" required/>
        <span className="eye"><i className="fa fa-lg fa-lock"></i></span>
      
        <label>Password</label>
      </div>
      <div className="cpr">
        <input type="checkbox" id="chk" name="chk" value="term" checked/>
        <label for="chk"> I read and agree to </label><a href="" > Terms & Conditions</a><br/>
      </div>
      <input type="submit" value="CREATE ACCOUNT"/>
      
      <div className="cpr">
          <Router>
          <div className="signup_link">
            Already have an account? <a onClick={()=>{
              navigate('/Login')
            }} href="#">Sign in</a>
          </div>
          </Router>
      </div>
    </form>
  </div>
  )
  
}

export default Signup