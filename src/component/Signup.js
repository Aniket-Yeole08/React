import React from 'react'
// import {  useNavigate } from 'react-router'
import "../style/Signup.css"
import {Link} from 'react-router-dom'


const Signup = () => {
  // const navigate=useNavigate;
  return (
    <div className="center">
    <h1>Sign Up</h1>
    <form method="post">
      <div className="txt_field">
        <input type="text" placeholder="Name" required/>
        <span className="eye"><i className="fa fa-lg fa-user"></i></span>
        
      </div>
      <div className="txt_field">
        <input type="email" placeholder="E-mail" required/>
        <span className="eye"><i className="fa fa-sm  fa-envelope-open"></i></span>
        
      </div>
      <div className="txt_field">
        <input type="password" placeholder="Password" required/>
        <span className="eye"><i className="fa fa-lg fa-lock"></i></span>

      </div>
      <div className="cpr">
        <input type="checkbox" id="chk" name="chk" value="term" checked/>
        <label for="chk"> I read and agree to </label><Link to="" > Terms & Conditions</Link><br/>
      </div>
      <input type="submit" value="CREATE ACCOUNT"/>
      
      <div className="cpr">
         
          <div className="signup_link">
            Already have an account? <Link  to="/Login">Sign in</Link>
          </div>
          
      </div>
    </form>
  </div>
  )
  
}

export default Signup