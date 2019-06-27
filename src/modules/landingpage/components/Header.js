import React from 'react';
import {NavBar} from './Navbar';

const Header = ({children}) => {
  return(
    <div className='container-fluid'>
      <NavBar />
      {children}
    </div>
  );
};

export {Header};
