import React from 'react';
import { StyledHero } from '../styles/hero';
import { StyledButton } from '../styles/button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <StyledHero id='hero'>
      <motion.h1>Michael Capecci</motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: -360 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Full-stack Web Developer
      </motion.h2>
      <div className='social'>
        <a
          href='https://github.com/mjcapecci'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i class='fab fa-github-square'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/michaelcapecci/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i class='fab fa-linkedin'></i>
        </a>
      </div>
      <a href='#projects'>
        <StyledButton>
          <i class='fas fa-arrow-alt-circle-down'></i> See Projects
        </StyledButton>
      </a>
    </StyledHero>
  );
};

export default Hero;
