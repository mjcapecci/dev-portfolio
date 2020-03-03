import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5vh;
  color: ${props => props.theme.light};
  width: 100%;
  background: #333;
  position: fixed;
  z-index: 2;

  .logo {
    margin-left: 3rem;

    img {
      transform: translateY(1.5px);
      width: 50px;
    }
  }

  ul {
    display: flex;
    list-style: none;

    a {
      color: white;
      text-decoration: none;
      transition: all 0.1s;

      &:hover {
        color: #d1f7ff;
      }
    }

    li {
      margin-right: 3rem;
    }
  }

  @media ${props => props.theme.device.tablet} {
    justify-content: center;
    .logo {
      display: none;
    }
  }
`;
