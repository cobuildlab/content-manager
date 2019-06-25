import React from 'react';
import { Row, Button } from '@8base/boost';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const NavBar = () => {
  return(
    <Navbar expand="lg">
      <div className='mr-auto'>
      <NavbarBrand>

      </NavbarBrand>
      </div>
        <div className='ml-auto'>
           <NavbarToggler aria-controls="navbarNav"/>
        </div>
        <Collapse id="navbarNav" navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className='mr-2 ml-3'>
              <NavLink href='#'><span>LOG IN</span></NavLink>
            </NavItem>
            <NavItem className='mr-2 ml-3'>
              <button><span><b>SING UP</b></span></button>
            </NavItem>
          </Nav>
      </Collapse>
    </Navbar>
  )
};

export {NavBar};
