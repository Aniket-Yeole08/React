import React from 'react'
import "../style/Login.css";
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="container">
    <h1>Welcome</h1>
    <img src="blsdtlogo.png" alt="logo"/>
    <form method="post">
      <div className="txt_field">
        <input type="text" required placeholder='LoginId'/>
        <span className="befre"></span>
      
      </div>
      <div className="txt_field">
        <input placeholder='password' type="password" required/>
        
        <span className="passicon"><i className="fa fa-eye" aria-hidden="true"></i></span>
        <span className="befre"></span>
      </div>
      <div className='loginbut'><input type="submit" value="LOGIN" /></div>
      <div className="signup_link">
        Don't have an account? <Link to="/Signup">Sign Up</Link>
      </div>
      <div className="cpr">
          <p> BlastoServe</p>
          <br/>
          <div className="blck">
              <p>Designed & Developed By :<img src="blsdtlogo.png"/></p>
          </div>
          
      </div>
    </form>
  </div>
  )
}

export default Login