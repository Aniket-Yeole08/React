import React from 'react'
import "../style/Login.css"
const Login = () => {
  return (
    <div className="center">
    <h1>Welcome</h1>
    <img src="blsdtlogo.png" alt="logo"/>
    <form method="post">
      <div className="txt_field">
        <input type="text" required/>
        <span className="befre"></span>
        <label>LoginID</label>
      </div>
      <div className="txt_field">
        <input type="password" required/>
        
        <span className="eye"><i className="fa fa-eye" aria-hidden="true"></i></span>
        <span className="befre"></span><label>Password</label>
      </div>
      <input type="submit" value="LOGIN"/>
      <div className="signup_link">
        Don't have an account? <Link to="/Login">Sign Up</Link>
      </div>
      <div className="cpr">
          <p>&#169 BlastoServe</p>
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