//@flow

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";
import styled from "styled-components";
import theme from "../theme";

import { signOut } from "../core/auth/actions";

const NavBar = props => {
  return (
    <NavBarStyled className="shadow-2">
      <div>
        <Link to="/pictures">Galeria zdjęć</Link>
        <Link to="/canvas">Canvas</Link>
      </div>
      <Button onClick={props.signOut}>Wyloguj</Button>
    </NavBarStyled>
  );
};

const NavBarStyled = styled.div`
  position: fixed;
  top: 0;
  height: 64px;
  background: #000;

  opacity: 0.8;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  button {
    margin: unset;
    margin-right: 2rem;
  }

  > div {
    display: flex;
    align-items: center;
  }
  a {
    opacity: 1;
    color: #fff;
    height: 64px;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    transition: ${theme.transition};
    text-decoration: none;
    &:hover {
      background: rgba(0, 0, 0, 0.5);
    }
  }
`;

export default connect(null, { signOut })(NavBar);
