import styled from 'styled-components';
import aboutPattern from '../../img/geometry.png';

export const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100%;
  color: ${props => props.theme.light};
  background: url(${aboutPattern}) center center;

  .about-header {
    color: ${props => props.theme.spaceColor};
    text-align: center;
    margin: 4rem;

    h2 {
      font-size: 3rem;
    }
  }

  .about-main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-bottom: 8rem;

    @media ${props => props.theme.device.mobileL} {
      margin-bottom: 0;
    }
  }
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(4, 1fr);

  @media ${props => props.theme.device.desktop} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${props => props.theme.device.laptop} {
    grid-gap: 4rem;
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${props => props.theme.device.mobileL} {
    grid-gap: 0rem;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const AboutCard = styled.div`
  overflow: hidden;
  max-width: 390px;
  border-radius: 5px;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.68);
  padding: 1rem;
  max-height: 38rem;
  min-height: 38rem;
  text-align: center;
  position: relative;

  &:nth-child(even) {
    color: ${props => props.theme.spaceColor};
    background: #b3c7d6;
  }

  &:nth-child(odd) {
    background: rgba(15, 30, 59, 1);
  }

  .me {
    position: relative;
  }

  .icons {
    position: absolute;
    top: 350px;
    left: 265px;
    .logos {
      width: 70px;
      margin: 0;
    }
    .node {
      transform: translateX(15px) translateY(-3px);
    }
  }

  .picOfMe {
    width: 100%;
    /* height: 20rem; */
    box-shadow: 0 0 5px 1px black;
    clip-path: polygon(0 0, 100% 0%, 100% 90%, 0 100%);
  }

  .skills {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .skillsLogo {
      width: 150px;
    }

    .e-mar {
      margin: 7rem;
    }

    .e-e-mar {
      margin: 7rem;
    }

    ul,
    li {
      margin: 0;
      padding: 0;
      border: none;
      list-style-type: none;
    }
  }

  @media ${props => props.theme.device.mobileL} {
    border-radius: 0px;
    box-shadow: none;

    .icons {
      display: none;
`;
