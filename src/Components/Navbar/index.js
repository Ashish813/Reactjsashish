import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElement';
import { useState,useEffect  } from 'react'; 

import Feedback from '../Feedback';
  
const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  function Toggle() {
    setIsOpened(isOpened => !isOpened);
    
  }
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/about' activeStyle >
            About
          </NavLink>
          <NavLink to='/events' activeStyle onClick={()=>Toggle()}>
            Events
          </NavLink>
          {/* <NavLink to='/annual' activeStyle>
            Annual Report
          </NavLink> */}
          <NavLink to='/team' activeStyle>
            Teams
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
      { isOpened?<Feedback />: null}
    </>
  );
};
  
export default Navbar;