import React from 'react';
import {NavBar} from './Navbar';
import './assets/header.css';

const Header = ({children}) => {
  return(
    <div className='container-fluid header-logo'>
      <NavBar />
      {children}
    </div>
  );
};

export {Header};
