import React, {Fragment} from 'react';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Button, Col, Row} from 'reactstrap';
import {Link} from 'react-router-dom';

const Landing = () => {
  return(
    <Fragment>
      <Header>
        <div className='container-fluid' style={{paddingBottom: '2%'}}>
          <Row className='row justify-content-start align-items-center pt-2 pb-2'>
            <Col xs={12} md={6}>
              <p className='text-justify display-4'><b><strong>Lorem Ipsum</strong></b></p>
              <br />
              <p className='text-justify text-break pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique magna sit amet purus gravida quis blandit. Nec sagittis aliquam malesuada bibendum arcu vitae.</p>
              <br />
              <Button className='pr-6 pl-6'><span><b>EXPLORER</b></span></Button>
            </Col>
          </Row>
        </div>
      </Header>
      <div className='container-fluid'>
        <Row className='row justify-content-center align-items-center pt-2 pb-2' style={{paddingBottom: '2%'}}>
          <Col xs={6} md={6}>
            <p className='text-justify h2'><b><strong>Lorem Ipsum</strong></b></p>
            <p className='text-justify text-break pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col xs={6} md={6}>
          </Col>
          <Col xs={6} md={6}>
          </Col>
          <Col xs={6} md={6}>
            <p className='text-justify h2'><b><strong>Lorem Ipsum</strong></b></p>
            <p className='text-justify text-break pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col xs={6} md={6}>
            <p className='text-justify h2'><b><strong>Lorem Ipsum</strong></b></p>
            <p className='text-justify text-break pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col xs={6} md={6}>
          </Col>
        </Row>
      </div>
      <div className='container-fluid' style={{backgroundColor: '#000000'}}>
        <Row className='row justify-content-center align-items-center pt-2 pb-2'>
          <Col xs={7} md={8}>
            <p className='h3 text-center text-break pt-4' style={{color: 'white'}}><b><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong></b></p>
          </Col>
          <Col xs={4} md={3}  className='mb-auto mt-auto'>
            <Button className='pl-4 pr-4 pt-3 pb-3' style={{backgroundColor: '#B8C5D3', border: 'none'}}><Link to='singup'><span style={{color: '#000000'}}><b>SING UP</b></span></Link></Button>
          </Col>
        </Row>
      </div>
      <Footer />
    </Fragment>
  );

};

export default Landing;
