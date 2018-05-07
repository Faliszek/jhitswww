//@flow

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from '../theme'


const NavBar = props => {
  return (
    <NavBarStyled className="shadow-2">
      <Link to="/pictures">Galeria zdjęć</Link>
      <Link to="/canvas">Canvas</Link>
    </NavBarStyled>
  );
};

const NavBarStyled = styled.div`
  position:fixed;
  top:0;
  height:64px;
  background:#000;


  opacity:0.8;
  width:100%;
  display:flex;
  align-items:center;
  z-index:999;
  a {
    opacity:1;
    color:#fff;
    height:64px;
    display:flex;  
    align-items:center;
    padding:0 2rem;
    transition:${theme.transition};
    text-decoration:none;
    &:hover{
      background:rgba(0,0,0,0.5);
    }
   
  }
`

export default NavBar;
