import React from 'react';
import {NavBar} from './components/Navbar';
import {Footer} from './components/Footer';
import {Button} from 'reactstrap';

const Landing = () => {
  return(
    <div>
      <NavBar />
      <div className='container-fluid' style={{backgroundColor: '#000000'}}>
        <div className='row pt-2 pb-2'>
          <div className='col-11 col-md-10'>
            <p className='h3 text-center text-break pt-4' style={{color: 'white'}}><b><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong></b></p>
          </div>
          <div className='col-auto col-md-auto'>
            <Button className='py-3 my-3' style={{backgroundColor: '#B8C5D3'}}><span style={{color: '#000000'}}><b>SING UP</b></span></Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

};

export default Landing;
