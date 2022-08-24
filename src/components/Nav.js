import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/products/1"}>Luke</Link>
      <Link to={"/products/2"}>Brendan</Link>
      <Link to={"/products/3"}>Ben</Link>
    </nav>
  );
};

export default Nav;
