import React, {Fragment} from 'react';
import {
  Navbar,
  NavbarBrand,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = () => {
  return(
    <Fragment>
      <Navbar  expand="lg">
        <NavbarBrand className='mr-auto'>
          <p >LOGO</p>
        </NavbarBrand>
            <NavbarBrand className='mx-auto'>
              <p className='h4'>Lorem<b>Ipsum</b></p>
            </NavbarBrand>
          <Nav className='ml-auto' navbar>
           <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                 Account
                 <DropdownMenu>
                  <DropdownItem></DropdownItem>
                 </DropdownMenu>
               </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                   <DropdownToggle nav caret>
               Lorem Ispum
               <DropdownMenu>
                <DropdownItem></DropdownItem>
               </DropdownMenu>
             </DropdownToggle>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink><i className="fa fa-bell"></i></NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </Fragment>
  );

};

export default Header;
