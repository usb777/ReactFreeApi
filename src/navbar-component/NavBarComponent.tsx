import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap'

import { Link } from 'react-router-dom';


//this is a function component
const NavBarComponent = (props:any) => {
    // useState is a hook
    // hooks are special functions provided by react for doing specific things
    // useState allows us to build a varibale that react keeps track of like state
    // hooks are only available in functions
   



  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Menu</NavbarBrand>
        <Link to="/"> homepage</Link>    &nbsp;   
   
        <Link to="/users"> all users Redux </Link>&nbsp;
       
        &nbsp;
              <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>

              <DropdownItem>
              <Link to="/"> homepage</Link>
              </DropdownItem>

                <DropdownItem>
                <Link to="/first-project"> first</Link>
               </DropdownItem> 

               <DropdownItem>
                 <Link to="/dan-project"> second </Link>
                </DropdownItem> 

                <DropdownItem>
                    <Link to="/allusers"> all users</Link>
               </DropdownItem> 

                    <DropdownItem>
                        <Link to="/croco"> croco </Link>
                        </DropdownItem> 
                 

                <DropdownItem divider />
                <DropdownItem>
                <Link to='/logout'>Logout</Link>
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
         </Navbar>
    </div>
  );
}

export default NavBarComponent;