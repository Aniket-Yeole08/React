import React from 'react'
import {Link }from 'react-router-dom'
import '../style/Navbar.css'
export const Navbar = () => {
  return (

    <div className='logsign'>
        <Link to='/Login'>Login </Link>
        <Link to='/Signup'>Signup</Link>
    </div>
  )
}
