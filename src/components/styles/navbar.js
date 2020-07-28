import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5vh;
  min-height: 48px;
  color: ${props => props.theme.light};
  width: 100%;
  background: none;
  position: fixed;
  transition: all 1s ease;
  z-index: 2;

  .off-top {
    color: gray;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #68b9c8;
    &:hover {
      color: #111;
    }
  }

  .logo {
    margin-left: 3rem;

    img {
      transform: translateY(1.5px);
      width: 108px;
      height: 28px;
      transition: all 0.2s;

      &:hover {
        filter: brightness(50%);
      }
    }
  }

  ul {
    display: flex;
    list-style: none;

    .logo {
      transition: all 0.5s ease;
    }

    a {
      color: white;
      text-decoration: none;
      transition: all 0.1s;

      &:hover {
        color: #5d847f;
      }
    }

    li {
      margin-right: 3rem;
      transition: all 0.1s ease;
    }
  }

  @media ${props => props.theme.device.tablet} {
    justify-content: center;
    ul {
      margin-left: 1.5rem;
    }
    .logo {
      display: none;
    }
  }

  @media ${props => props.theme.device.mobileL} {
    .contact {
      display: none;
    }
  }
`;
