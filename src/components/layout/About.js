import React, { useRef } from 'react';
import { StyledAbout, AboutCard, AboutGrid } from '../styles/about';
import { ContainerBig } from '../styles/container';
import me from '../../img/me.jpg';
import reactLogo from '../../img/reactLogo.svg';
import nodeLogo from '../../img/nodeLogo.svg';
import frontEndImg from '../../img/form.svg';
import backEndImg from '../../img/development.svg';
import toolsImg from '../../img/tools.svg';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true
  });
  // Animations
  const grow = {
    scale: inView ? 1 : 0
  };

  const rotate = {
    rotate: 360
  };

  return (
    <StyledAbout id='about'>
      <ContainerBig>
        <div className='about-header'>
          <motion.h2 animate={grow}>About</motion.h2>
        </div>
        <div className='about-main'>
          <AboutGrid>
            <AboutCard>
              <div className='me'>
                <img
                  className='picOfMe'
                  src={me}
                  alt='A picture of Michael Capecci'
                  ref={ref}
                ></img>
              </div>
              <div className='icons'>
                <img className='node logos' src={nodeLogo} alt='Node logo' />
                <motion.img
                  animate={rotate}
                  transition={{
                    delay: 0.2,
                    loop: Infinity,
                    ease: 'linear',
                    duration: 10
                  }}
                  className='react logos'
                  src={reactLogo}
                  alt='React logo'
                />
              </div>
              <p>
                This will be a sample paragraph about me. There will be text
                here. I want this to be a few sentences. Perhaps the same
                sentences that will appear in the about me on my resume; but
                then again, perhaps not.
              </p>
            </AboutCard>
            <AboutCard>
              <div className='skills'>
                <h2>Front End</h2>
                <object
                  type='image/svg+xml'
                  data={frontEndImg}
                  class='skillsLogo e-mar'
                ></object>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3 | SASS</li>
                  <li>Bootstrap | Materialize</li>
                  <li>JavaScript</li>
                  <li>React | Redux</li>
                </ul>
              </div>
            </AboutCard>
            <AboutCard>
              <div className='skills'>
                <h2>Back End</h2>
                <ul className='e-mar e-e-mar'>
                  <li>NodeJS</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>MariaDB | mySQL</li>
                </ul>
                <object
                  type='image/svg+xml'
                  data={backEndImg}
                  class='skillsLogo'
                ></object>
              </div>
            </AboutCard>
            <AboutCard>
              <div className='skills'>
                <h2>Tooling</h2>
                <object
                  type='image/svg+xml'
                  data={toolsImg}
                  className='skillsLogo e-mar'
                ></object>
                <ul>
                  <li>NPM</li>
                  <li>Git</li>
                  <li>Webpack</li>
                  <li>Babel</li>
                </ul>
              </div>
            </AboutCard>
          </AboutGrid>
        </div>
      </ContainerBig>
    </StyledAbout>
  );
};

export default About;
