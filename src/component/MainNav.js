import React, {Component} from 'react';
import { Nav, NavItem, NavLink, Navbar, NavbarBrand, Collapse, NavbarToggler } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class MainNav extends Component{
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle(){
        this.setState({
            isOpen : !this.state.isOpen
        });
    }
    render(){
        return(
            <Navbar color="light" light expand="md">
                <NavbarBrand href="./Main">ShoppingMall</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/menu1">menu1</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/menu2">menu2</NavLink>
                        </NavItem>
                        <NavItem>

                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    };
}
export default MainNav;