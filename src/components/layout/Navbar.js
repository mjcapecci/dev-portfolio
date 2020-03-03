import React from 'react';
import { StyledNavbar } from '../styles/navbar';
import myLogo from '../../img/myLogo.png';

const Navbar = () => {
  return (
    <StyledNavbar id='navbar'>
      <div className='logo'>
        <a href='#hero'>
          <img src={myLogo} alt='' />
        </a>
      </div>
      <div className='links'>
        <ul>
          <a href='#about'>
            <li>About</li>
          </a>
          <a href='#projects'>
            <li>Projects</li>
          </a>
          <a href='#contact'>
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
