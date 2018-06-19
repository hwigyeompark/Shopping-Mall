import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import '../css/SubNav.css';

class SubNav extends Component{
    render(){
        return(
          <div id="subNav">
              <Nav vertical>
                  <NavItem>
                      <NavLink href="#">일자팬츠</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink href="#">스키니</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink href="#">슬랙스</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink href="#">반바지</NavLink>
                  </NavItem>
              </Nav>
          </div>
        );
    }
}
export default SubNav;