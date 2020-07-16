import styled from 'styled-components';
import stars from '../../img/devHero.jpg';

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  text-shadow: 0 0 5px black;
  color: ${props => props.theme.light};
  background: #373e4b;
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url(${stars}) center no-repeat;
  background-size: cover;
  h1 {
    margin: 0;
    font-size: 4rem;
  }
  h2 {
    margin: 4rem;
  }
  .social {
    font-size: 3rem;
    border-bottom: 3px solid ${props => props.theme.light};

    .fab {
      margin: 2rem;
      transition: all 0.2s;
    }

    .fab:hover {
      transform: translateY(-5px);
      color: #a6a6a6;
    }

    a {
      color: white;
    }
  }
  @media only screen and (max-height: 800px) {
    height: auto;
    min-height: 100vh;
    padding: 5rem;
  }

  @media ${props => props.theme.device.laptop} {
    h1 {
      font-size: 3.5rem;
    }
  }

  @media (max-height: 700px) {
    h1 {
      font-size: 2.3rem;
    }

    h2 {
      font-size: 1rem;
      margin: 2.3rem;
    }
  }

  @media ${props => props.theme.device.tabletS} {
    height: 100vh;

    h1 {
      font-size: 2.3rem;
      padding: 0 2rem;
    }

    h2 {
      font-size: 1rem;
      margin: 2.3rem;
    }
  }
`;
