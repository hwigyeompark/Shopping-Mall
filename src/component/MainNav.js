import React, {Component} from 'react';
import { Navbar } from 'reactstrap';
import { Nav } from 'reactstrap';
import { NavItem } from 'reactstrap';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class MainNav extends Component{
    render(){
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">ShoppingMall</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem href="#menu1">Menu1</NavItem>
                        <NavItem href="#menu2">Menu2</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <Button>LOGIN</Button>
                        <Button>REGISTER</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    };
}
export default MainNav;