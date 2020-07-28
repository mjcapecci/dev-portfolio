import React from 'react';
import { StyledNavbar } from '../styles/navbar';
import myLogo from '../../img/dark-logo.png';

import resume from '../../resume.pdf';

import useScrollPosition from '@react-hook/window-scroll';

const Navbar = () => {
  const scrollY = useScrollPosition(60);
  console.log(scrollY);
  return (
    <StyledNavbar
      id='navbar'
      style={
        scrollY > 0
          ? {
              background: 'white',
              color: '#333',
              height: '7vh',
              boxShadow: '0 0 15px 2px #555'
            }
          : {}
      }
    >
      <div className='logo'>
        <a href='#hero'>
          <img
            src={myLogo}
            alt=''
            style={scrollY > 0 ? { filter: 'invert(1)' } : {}}
          />
        </a>
      </div>
      <div className='links' style={scrollY > 0 ? { color: '#333' } : {}}>
        <ul>
          <a href='#about'>
            <li className={scrollY > 0 && 'off-top'}>About</li>
          </a>
          <a href='#projects'>
            <li className={scrollY > 0 && 'off-top'}>Projects</li>
          </a>
          <a href='#contact' className='contact'>
            <li className={scrollY > 0 ? 'contact off-top' : 'contact'}>
              Contact
            </li>
          </a>
          <a
            href={resume}
            target='_blank'
            rel='noopener noreferrer'
            className={scrollY > 0 ? 'contact off-top' : 'contact'}
          >
            <li>Resume</li>
          </a>
        </ul>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
