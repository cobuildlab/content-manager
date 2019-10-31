import React from "react";
import { NavBar } from "./Navbar";
import "./assets/header.css";
import { PropTypes } from "prop-types";

const Header = ({ children }) => {
  return (
    <div className="container-fluid header-logo">
      <NavBar />
      {children}
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.object.isRequired
};

export { Header };
