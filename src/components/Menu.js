import React, {Fragment} from 'react';
import './menu.css'
import { Nav, NavItem, NavLink } from 'reactstrap';
const Menu = () => {

  return(
    <Fragment>
      <div className='sidebar'>
          <Nav vertical className='menu mt-auto'>
            <NavItem className='item-menu'>
              <NavLink className='link-menu' href="#"><i className="fa fa-home"></i></NavLink>
            </NavItem>
            <NavItem className='item-menu'>
              <NavLink className='link-menu' href="#"><i className="fa fa-calendar"></i></NavLink>
            </NavItem>
            <NavItem className='item-menu'>
              <NavLink className='link-menu' href="#"><i className="fa fa-chart-bar"></i></NavLink>
            </NavItem>
            <NavItem className='item-menu'>
              <NavLink className='link-menu' href="#"><i className="fa fa-film"></i></NavLink>
            </NavItem>
            <NavItem className='item-menu'>
              <NavLink className='link-menu' href="#"><i className="fa fa-cog"></i></NavLink>
            </NavItem>
         </Nav>
         <Nav className='menu-end mb-auto'>
           <NavItem className='item-menu'>
             <NavLink className='link-menu' href="#"><i className="fa fa-home"></i></NavLink>
           </NavItem>
         </Nav>

      </div>
    </Fragment>
  );
};

export default Menu;
