import React, {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button} from 'reactstrap';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return(
    <Navbar expand="lg" style={{padding: 0}}>
      <NavbarBrand className='mr-auto'>
        <Link to='/home' style={{color: '#B8C5D3'}}>LOGO</Link>
      </NavbarBrand>
      <NavbarToggler onClick={onToggle} className='ml-auto'/>
      <Collapse isOpen={toggle} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem className='mr-2 ml-3'>
            <NavLink to='/login' style={{color: '#B8C5D3'}}><span>LOG IN</span></NavLink>
          </NavItem>
          <NavItem className='mr-3 ml-3'>
            <Button className='btn pr-3 pl-3' style={{backgroundColor: '#B8C5D3', border: 'none'}}><Link to='/singup' style={{color: 'white'}}><span><b>SING UP</b></span></Link></Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export {NavBar};
