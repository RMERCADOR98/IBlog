import React, { useState } from "react";
//Styles
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
//Routing
import { Link } from "react-router-dom";

const SignIn = () => {
  //State
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  //Handler Form
  const handler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
    console.log(input);
  };

  return (
    <StyledContainer>
      <StyledBox>
        <StyledIcon>
          <FaUserAlt size="3em" />
        </StyledIcon>
        <StyledForm>
          <input
            type="text"
            placeholder="Email"
            onChange={handler}
            value={input.email}
            name="email"
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={handler}
            value={input.password}
            name="password"
          />
          <br />
          <button>Entrar</button>
          <Link to="/signup">
            <h2>Regista-te!</h2>
          </Link>
        </StyledForm>
      </StyledBox>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  min-height: 80vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledBox = styled.div`
  background: white;
  color: black;
  min-height: 30vh;
  width: 40vh;
  border-radius: 10px;
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 6px 6px 12px 1px rgba(0, 0, 0, 0.2);
`;

const StyledForm = styled.div`
  transition: 0.5s;
  a {
    text-decoration: none;
    color: black;
  }
  h2 {
    margin-top: 3rem;
  }
  input {
    font-family: "Raleway";
    padding: 0.75rem;
    margin: 0rem 0rem 0.25rem 0rem;
    width: 45%;
    background: transparent;
    outline: 0;
    border: none;
    border-bottom: 1px solid black;
  }
  button {
    border-radius: 3px;
    font-family: "Raleway";
    border-color: #00adb5;
    padding: 0.5rem 1.5rem;
    margin-top: 0.8rem;
    background: transparent;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background: #00adb5;
      color: white;
      transition: 0.3s;
    }
  }
`;

const StyledIcon = styled.div`
  padding: 6rem 3rem 3rem 3rem;
`;

export default SignIn;
