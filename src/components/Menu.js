import React, {Fragment} from 'react';
import './menu.css'
const Menu = () => {

  return(
    <Fragment>
      <div className='sidebar'>
      <i className="fa fa-download"></i>
 <a href="#services"><i class="fa fa-wrench"></i></a>
 <a href="#clients"><i class="fa fa-user"></i></a>
 <a href="#contact"><i class="fa fa-envelope"></i></a>
      </div>
    </Fragment>
  );
};

export default Menu;
