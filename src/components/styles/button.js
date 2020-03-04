import styled from 'styled-components';

export const StyledButton = styled.button`
  height: 4rem;
  min-height: 58px;
  width: 15rem;
  margin: 4rem;
  color: ${props => props.theme.light};
  font-size: 1.3rem;
  text-shadow: 0 0 5px black;
  background: ${props => props.theme.primaryDark};
  border: 1px solid ${props => props.theme.light};
  border-radius: 5px;
  transition: all 0.1s;

  &:hover {
    background: ${props => props.theme.h_primaryDark};
  }
`;
