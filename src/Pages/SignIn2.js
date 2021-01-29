import React, { useState } from "react";
//Styles
import styled from "styled-components";
//Images
import iblogBlackSmall from "../img/iblogBlackSmall.svg";
//Routing
import { Link } from "react-router-dom";
//dispatch
import { useDispatch } from "react-redux";
//Location
import { useHistory } from "react-router-dom";
//action
import SignIn from "../Store/actions/auth/signIn";

const SignIn2 = () => {
  //dispatch
  const dispatch = useDispatch();
  //location
  const history = useHistory();
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
    console.log(input);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(SignIn(input, history));
  };
  return (
    <StyledBody>
      <StyledImg>
        <div className="div"></div>
      </StyledImg>
      <StyledLogin>
        <div className="logo">
          <img src={iblogBlackSmall} alt="" />
        </div>
        <StyledForm>
          <h1>Log in</h1>
          <h4 id="enter">
            Enter your email and password to login our dashboard
          </h4>
          <h3>Email</h3>
          <input
            type="text"
            placeholder="Enter your Email"
            onChange={handler}
            value={input.email}
            name="email"
          />
          <h3>Password</h3>
          <input
            type="password"
            placeholder="Enter your Password"
            onChange={handler}
            value={input.password}
            name="password"
          />
          <br />
          <button onClick={submitHandler}>Sign in</button>
          <div id="signup">
            <h4>
              Don´t have an acount?{" "}
              <span>
                <Link to="/signUp2">Sign Up</Link>
              </span>
            </h4>
          </div>
        </StyledForm>
      </StyledLogin>
    </StyledBody>
  );
};

const StyledBody = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLogin = styled.div`
  padding: 6rem 5rem 5rem 8rem;
  width: 100vh;
  img {
    height: 4vh;
  }
  h1 {
    padding-bottom: 2rem;
    font-weight: 700;
  }
  h3 {
    padding: 0.8rem 0rem;
  }
  #enter {
    padding-bottom: 3rem;
  }
  input {
    padding: 0.8rem;
    width: 20vw;
    font-weight: 600;
    border-radius: 3px;
    border: 2px solid #adadad;
    outline: none;

    transition: 0.2s;
    &:focus {
      transition: 0.2s;
      outline: none;
      border: 2px solid rgb(100, 102, 251);
      box-shadow: 6px 6px 12px 1px rgba(0, 0, 0, 0.2);
    }
  }
  button {
    padding: 0.8rem;
    margin-top: 1rem;
    width: 20vw;
    background: rgb(100, 102, 251);
    color: white;
    font-weight: 700;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    outline: none;
    box-shadow: 6px 6px 12px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
    &:hover {
      transition: 0.2s;
      background: rgb(74, 76, 182);
    }
  }
  h4 {
    color: #adadad;
    padding-bottom: 0.8rem;
  }
  #signup {
    padding-top: 2rem;
  }
  span {
    color: rgb(124, 100, 251);
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      transition: 0.2s;
      color: rgb(74, 76, 182);
    }
    a {
      text-decoration: none;
      color: rgb(124, 100, 251);
      transition: 0.2s;
      &:hover {
        transition: 0.2s;
        color: rgb(74, 76, 182);
      }
    }
  }
`;

const StyledForm = styled.div`
  margin-top: 10rem;
`;

const StyledImg = styled.div`
  width: 100vh;
  height: 100vh;
  background-image: linear-gradient(rgb(46, 47, 198), rgb(155, 115, 255));
`;

export default SignIn2;
