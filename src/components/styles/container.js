import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;

  @media ${props => props.theme.device.tablet} {
    width: 90%;
  }
`;

export const ContainerBig = styled.div`
  width: 100%;
`;
