//@flow

import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <nav>
      <Link to="/">HomePage</Link>
      <Link to="/pictures">Galeria zdjęć</Link>
    </nav>
  );
};

export default NavBar;
