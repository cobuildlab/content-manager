import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from "reactstrap";
import { AuthLogin, createUserWithToken } from "../../auth/auth.actions";
import { useFluxStore } from "@cobuildlab/react-flux-state";
import { authStore, On_CREATE_USER } from "../../auth/authStore";

const NavBar = props => {
  console.log("PROPS FRON NAVBAR", props);
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  // const genere = useFluxStore(authStore, On_CREATE_USER, {}, async TOKEN => {
  //   await createUserWithToken(TOKEN);
  // });
  useEffect(async () => {
    const TOKEN = localStorage.getItem("auth") || "no contiene";
    console.log("TOKEN", TOKEN);

    // genere(Toke)
  }, []);

  return (
    <Navbar expand="lg" style={{ padding: 0 }}>
      <NavbarBrand className="mr-auto">
        <Link to="/home" style={{ color: "#B8C5D3" }}>
          LOGO
        </Link>
      </NavbarBrand>
      <NavbarToggler onClick={onToggle} className="ml-auto" />
      <Collapse isOpen={toggle} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem className="mr-2 ml-3">
            <NavLink
              to="#"
              onClick={e => {
                AuthLogin();
              }}
              style={{ color: "#B8C5D3" }}
            >
              <span>LOG IN</span>
            </NavLink>
          </NavItem>
          <NavItem className="mr-3 ml-3">
            <Button
              className="btn pr-3 pl-3"
              style={{ backgroundColor: "#B8C5D3", border: "none" }}
            >
              <Link to="/singup" style={{ color: "white" }}>
                <span>
                  <b>SING UP</b>
                </span>
              </Link>
            </Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export { NavBar };
