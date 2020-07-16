import React from 'react';
import { StyledNavbar } from '../styles/navbar';
import myLogo from '../../img/dark-logo.png';

import resume from '../../resume.pdf';

import useScrollPosition from '@react-hook/window-scroll';

const Navbar = () => {
  const scrollY = useScrollPosition(60);
  return (
    <StyledNavbar
      id='navbar'
      style={{ background: `rgba(38, 37, 37, ${scrollY / 100})` }}
    >
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
          <a href='#contact' className='contact'>
            <li className='contact'>Contact</li>
          </a>
          <a href={resume} target='_blank' rel='noopener noreferrer'>
            <li>Resume</li>
          </a>
        </ul>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
