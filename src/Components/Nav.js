import React from "react";
//Routing
import { Link } from "react-router-dom";
//Styles
import styled from "styled-components";
//Logo
import iblogBlackSmall from "../img/iblogBlackSmall.svg";
//react-redux
import { useSelector, useDispatch } from "react-redux";
//action
import SignOut from "../Store/actions/auth/signOut";
//location
import { useHistory } from "react-router-dom";

const Nav = () => {
  //dispatch
  const dispatch = useDispatch();
  //location
  const history = useHistory();

  const stateToken = useSelector((state) => state.auth.token);

  const stateUsername = useSelector((state) => state.auth.username);

  //handlers
  const signOutHandler = (e) => {
    e.preventDefault();
    dispatch(SignOut(history));
  };

  return (
    <StyledNav>
      <Link to="/">
        <img src={iblogBlackSmall} alt="" />
      </Link>

      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        {stateToken === "" ? (
          <ul>
            <Link to="/signIn2">
              <li>Sign In</li>
            </Link>
            <Link to="/signUp2">
              <li>Sign Up</li>
            </Link>
          </ul>
        ) : (
          <ul>
            {" "}
            <Link onClick={signOutHandler}>
              <li>Sign Out</li>
            </Link>
          </ul>
        )}
      </ul>
      {stateUsername}
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  background: white;
  margin: auto;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 5rem;
  min-height: 6rem;
  position: sticky;
  width: 100%;
  box-shadow: 6px 6px 12px 1px rgba(0, 0, 0, 0.1);
  #logo {
    color: #fb8122;
  }
  #letter {
    color: white;
  }
  a {
    text-decoration: none;
    color: black;
  }

  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 5rem;
  }
  img {
    height: 3rem;
  }
`;

export default Nav;
