import React from 'react'
import {Link }from 'react-router-dom'
export const Navbar = () => {
  return (

    <div>
        <Link to='/Login'>Login</Link>
        <Link to='/Signup'>Signup</Link>
    </div>
  )
}
