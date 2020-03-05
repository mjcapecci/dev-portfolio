import styled from 'styled-components';
import learnalysis from '../../img/learnalysis.png';
import jedi from '../../img/jedi.jpg';
import parkAve from '../../img/parkAve.jpg';
import contractr from '../../img/contractr.jpg';

export const StyledProjects = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100%;
  color: ${props => props.theme.light};
  background: ${props => props.theme.spaceColor};

  .projects-header {
    color: ${props => props.theme.light};
    text-align: center;
    margin: 4rem;

    h2 {
      font-size: 3rem;
    }
  }

  .projects-main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-bottom: 8rem;
  }

  .portfolio-link {
    a {
      color: white;
      text-decoration: none;
      transition: all 0.1s;

      &:hover {
        color: #a6a6a6;
      }
    }
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 4rem;
  grid-template-areas:
    'head second'
    'third fourth';
  width: 100%;

  @media ${props => props.theme.device.tablet} {
    grid-template-areas:
      'head'
      'second'
      'third'
      'fourth';
  }
`;

export const ProjectsCard = styled.div`
  overflow: hidden;
  display: flex;
  border-radius: 5px;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.88);
  padding: 0;
  height: 30rem;
  position: relative;
  border: 1px solid #f7d731;

  .project {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .project-showcase {
    display: flex;
    justify-content: center;
    width: 100%;
    flex: 1;
    img {
    }
  }

  .project-logo {
    width: 15rem;
    margin-top: 1rem;
  }

  .project-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 2;
    width: 100%;

    p {
      margin: 2rem;
    }
  }

  .project-links {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;

    a {
      color: white;
      text-decoration: none;
      transition: all 0.1s;

      &:hover {
        color: #a6a6a6;
      }
    }

    .source {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    }
    .live {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    }
    .demo {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    }
  }

  /* CSS Project Backgrounds */
  .project1 {
    width: 100%;
    background: url(${learnalysis}) center center;
    background-size: cover;
  }

  .project2 {
    width: 100%;
    background: url(${jedi}) center center;
    background-size: cover;
  }

  .project3 {
    width: 100%;
    background: url(${parkAve}) center center;
    background-size: cover;

    a {
      text-decoration: none;
    }
    .live {
      a:hover {
        color: #ededed;
      }
    }
  }

  .project4 {
    width: 100%;
    background: url(${contractr}) center center;
    background-size: cover;
  }

  @media ${props => props.theme.device.tablet} {
    max-width: 100%;
  }
`;
