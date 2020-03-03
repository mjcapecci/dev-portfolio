import React from 'react';
import { StyledProjects, ProjectsGrid, ProjectsCard } from '../styles/projects';
import { Container } from '../styles/container';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import jediLogo from '../../img/jediLogo.png';
import learnLogo from '../../img/learnLogo.png';
import parkAveLogo from '../../img/parkAveLogo.png';
import contractrLogo from '../../img/contractrLogo.png';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true
  });
  // Animations
  const grow = {
    scale: inView ? 1 : 0
  };
  return (
    <StyledProjects id='projects'>
      <Container>
        <div className='projects-header'>
          <motion.h2 animate={grow}>Projects</motion.h2>
        </div>
        <div className='projects-main'>
          <ProjectsGrid>
            <ProjectsCard style={{ gridArea: 'head' }} ref={ref}>
              <div className='project project1'>
                <div className='project-showcase'>
                  <img
                    src={learnLogo}
                    alt=''
                    srcset=''
                    className='project-logo'
                    style={{ transform: 'translateY(-15px)' }}
                  />
                </div>
                <div className='project-info'>
                  <p>
                    Learnalysis is a web app that helps its users to analyze
                    their learning progress. Sign in with Google, enter learning
                    categories and entries, and filter your results with fuzzy
                    search and pagination. Built with React, Express and
                    MongoDB.
                  </p>
                </div>
                <div className='project-links'>
                  <div className='source'>
                    <p>
                      <a
                        href='https://github.com/mjcapecci/learnalysis-redesign'
                        target='_blank'
                      >
                        <i class='fab fa-github-alt'></i> Source
                      </a>
                    </p>
                  </div>
                  <div className='live'>
                    <p>
                      <a href='http://learnalysis.com/' target='_blank'>
                        <i class='far fa-hand-point-right'></i> Live
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </ProjectsCard>
            <ProjectsCard>
              <div className='project project2'>
                <div className='project-showcase'>
                  <img
                    src={jediLogo}
                    alt=''
                    srcset=''
                    className='project-logo'
                  />
                </div>
                <div className='project-info'>
                  <p>
                    Star Wars: Training Dummy is a browser game built with
                    vanilla JavaScript. Defeat the training dummy in as few
                    turns as possible.
                  </p>
                </div>
                <div className='project-links'>
                  <div className='source'>
                    <p>
                      <a
                        href='https://github.com/mjcapecci/JS_Jedi'
                        target='_blank'
                      >
                        <i class='fab fa-github-alt'></i> Source
                      </a>
                    </p>
                  </div>
                  <div className='live'>
                    <p>
                      <a href='https://brave-euclid-31a9af.netlify.com/'>
                        <i class='far fa-hand-point-right'></i> Live
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </ProjectsCard>
            <ProjectsCard style={{ gridArea: 'third' }}>
              <div className='project project3'>
                <div className='project-showcase'>
                  <img
                    src={parkAveLogo}
                    alt=''
                    srcset=''
                    className='project-logo'
                  />
                </div>
                <div className='project-info'>
                  <p style={{ color: '#1c1c1c' }}>
                    <a href='https://www.parkavedentalcare.com' target='_blank'>
                      ParkAveDentalCare.com
                    </a>{' '}
                    is a website for a local dental office. Built with HTML, CSS
                    and JavaScript, and hosted on Netlify.
                  </p>
                </div>
                <div className='project-links'>
                  <div className='live'>
                    <p>
                      <a
                        href='https://www.parkavedentalcare.com'
                        target='_blank'
                      >
                        {' '}
                        <i class='far fa-hand-point-right'></i> Live
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </ProjectsCard>
            <ProjectsCard style={{ gridArea: 'fourth' }}>
              {' '}
              <div className='project project4'>
                <div className='project-showcase'>
                  <img
                    src={contractrLogo}
                    alt=''
                    srcset=''
                    className='project-logo'
                  />
                </div>
                <div className='project-info'>
                  <p>
                    Contractr.io is a lightweight solution for connecting people
                    with local contractors for hire. In-development with React,
                    Express, and mySQL.
                  </p>
                  <p>
                    <em>★ In-development ★</em>
                  </p>
                </div>
                <div className='project-links'>
                  <div className='source'>
                    <p>
                      <i class='fab fa-github-alt'></i> Source
                    </p>
                  </div>
                </div>
              </div>
            </ProjectsCard>
          </ProjectsGrid>
        </div>
        <p style={{ textAlign: 'center', transform: 'translateY(-50px)' }}>
          Portfolio: <i class='fab fa-github-alt'></i> Source
        </p>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
