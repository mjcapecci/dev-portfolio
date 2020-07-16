import styled from 'styled-components';

export const StyledContact = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  color: ${props => props.theme.spaceColor};
  background: #b3c7d6;

  .contact-header {
    color: ${props => props.theme.spaceColor};
    text-align: center;
    margin-top: 4rem;
    margin-bottom: 2rem;

    h2 {
      font-size: 3rem;
    }
  }

  .contact-main {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;

    .error {
      display: flex;
    }
  }
`;

export const ContactForm = styled.form`
  background: ${props => props.theme.spaceColor};
  width: 100%;
  border-radius: 5px;
  position: relative;
  padding: 1rem;
  margin-bottom: 8rem;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.68);

  input {
    color: #b3c7d6;
    width: 100%;
    background: none;
    outline: none;
    resize: none;
    border: 0;
    font-family: 'Montserrat', sans-serif;
    transition: all 0.1s;
    border-bottom: 2px solid #78788c;
  }
  input:focus {
    border-bottom: 2px solid #b3c7d6;
  }
  p:before {
    content: attr(type);
    display: block;
    margin: 28px 0 0;
    font-size: 14px;
    color: #b3c7d6;
  }
  button {
    padding: 8px 12px;
    margin: 8px 0 0;
    font-family: 'Montserrat', sans-serif;
    border: 2px solid #78788c;
    border-radius: 5px;
    background: ${props => props.theme.spaceColor};
    color: ${props => props.theme.light};
    cursor: pointer;
    transition: all 0.3s;
  }
  button:hover {
    background: #78788c;
    color: #fff;
  }

  @media only screen and (max-width: 450px) {
    width: 90%;
  }
`;
