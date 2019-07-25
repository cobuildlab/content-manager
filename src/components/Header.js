import React, {Fragment} from 'react';
import {
  Navbar,
  NavbarBrand,
  Col,
  Row,
} from 'reactstrap';

const Header = () => {

  return(
    <Fragment>
      <Navbar  expand="lg">
        <Row>
          <Col>
            <NavbarBrand className='mr-auto'>
              <p >LOGO</p>
            </NavbarBrand>
          </Col>
          <Col>
            <NavbarBrand>
              <p className='display-5'>Lorem<b>Ipsum</b></p>
            </NavbarBrand>
          </Col>
          <Col>

          </Col>
        </Row>
      </Navbar>
    </Fragment>
  );

};

export default Header;
