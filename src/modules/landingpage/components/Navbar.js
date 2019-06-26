import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button} from 'reactstrap';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return(
    <Navbar expand="lg">
      <NavbarBrand className='mr-auto'>
        LOGO
      </NavbarBrand>
      <NavbarToggler onClick={onToggle} className='ml-auto'/>
      <Collapse isopen={toggle.toString()} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem className='mr-2 ml-3'>
            <NavLink href='#' style={{color: '#B8C5D3'}}><span>LOG IN</span></NavLink>
          </NavItem>
          <NavItem className='mr-2 ml-3'>
            <Button style={{backgroundColor: '#B8C5D3'}}><span><b>SING UP</b></span></Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export {NavBar};
