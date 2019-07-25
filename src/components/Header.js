import React, {Fragment, useState} from 'react';
import {
  Navbar,
  NavbarBrand,
  Col,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };
  const onToggleTwo = () => {
    setToggleTwo(!toggleTwo);
  };
  return(
    <Fragment>
      <Navbar  expand="lg">
        <NavbarBrand className='mr-auto'>
          <p >LOGO</p>
        </NavbarBrand>
          <Col xs='auto' xm='auto' className='mx-auto'>
            <NavbarBrand>
              <p className='h4'>Lorem<b>Ipsum</b></p>
            </NavbarBrand>
          </Col>
          <Col xs='auto' xm='auto'>
            <Dropdown isOpen={toggle} toggle={onToggle}>
            <DropdownToggle caret
               tag="span"
               onClick={onToggle}
               data-toggle="dropdown"
               aria-expanded={toggle}
             >
               Account
               <DropdownMenu>
                <DropdownItem></DropdownItem>
               </DropdownMenu>
             </DropdownToggle>
            </Dropdown>
            <Dropdown isOpen={toggleTwo} toggle={onToggleTwo}>
            <DropdownToggle caret
               tag="span"
               onClick={onToggleTwo}
               data-toggle="dropdown"
               aria-expanded={toggleTwo}
             >
               Lorem Ispum
               <DropdownMenu>
                <DropdownItem></DropdownItem>
               </DropdownMenu>
             </DropdownToggle>
            </Dropdown>
          </Col>
      </Navbar>
    </Fragment>
  );

};

export default Header;
