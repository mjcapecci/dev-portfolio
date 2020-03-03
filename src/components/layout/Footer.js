import React from 'react';

import { StyledFooter } from '../styles/footer';

const Footer = () => {
  return (
    <StyledFooter id='footer'>
      <p>{new Date().getFullYear()} | Email: michael@michaelcapecci.com</p>
    </StyledFooter>
  );
};

export default Footer;
