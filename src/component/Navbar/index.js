
import React from 'react';
import "E:/Blastoserve/TASK/React/src/style/Navbar.css";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
  
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav className='colorchange'>
        <NavLink to='/'>
          <img  src={require('../../images/blsdtlogo.png')} alt='logo' />
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