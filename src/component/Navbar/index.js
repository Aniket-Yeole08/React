
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import "E:/Blastoserve/TASK/React/src/style/Navbar.css";
const Navbar = () => {
  return (
    <>
      <Nav className='colorchange'>
        <NavLink to='/'>
          {/* <img src={require('../../images/logo.svg')} alt='logo' /> */}
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/Home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/About' activeStyle>
            About
          </NavLink>

          <NavLink to='/Signup' activeStyle>
            Signup
          </NavLink>
          <NavLink to='/Login' activeStyle>
            SignIn
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Login'>Log In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;