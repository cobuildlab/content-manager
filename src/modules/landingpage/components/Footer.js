import React from 'react';
import { PropTypes } from 'prop-types';


const Tittle = ({ children }) => {
  return(
    <div style={{width: 'max-content', borderBottom: '1px solid white', marginBottom: '3%'}}>
      <p className='h5 text-center' style={{color: 'white'}}><b><strong>{children}</strong></b></p>
    </div>
  );

};

const FooterInfo = (
  <div className='container-fluid' style={{backgroundColor: '#B8C5D3', paddingTop: '2%', paddingBottom: '2%'}}>
    <div className='row'>
      <div className='col-2 col-sm-3 py-2'>
        <Tittle>ABOUT THE BLOG</Tittle>
        <p className='text-left text-break' style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className='col-4 col-sm-3 py-2'>
        <Tittle>POPULAR POSTS</Tittle>
      </div>
      <div className='col-6 col-sm-6 py-2'>
        <Tittle>SUBSCRIBE TO OUR NEWS LETTER</Tittle>

        <Tittle>FOLLOW US ON</Tittle>
      </div>
    </div>
  </div>
);


const FooterReserved = (
  <div className='container-fluid' style={{backgroundColor: '#2F2F2F'}}>
    <p style={{color:   '#B8C5D3'}}>Copyright@loremipsum-2019-AllRights Reserved.</p>
  </div>
);


const Footer = () => {
  return(
    <div>
      {FooterInfo}
      {FooterReserved}
    </div>
  );
};

Tittle.prototype = {
  children : PropTypes.string.isRequired
};

export {Footer};
