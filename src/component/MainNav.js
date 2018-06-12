import React, {Component} from 'react';
import { Nav, NavItem, NavLink, Navbar, NavbarBrand, Collapse, NavbarToggler, Button } from 'reactstrap';
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
        const style={
            buttonGroup : {
              marginRight:'10px'
            },
            button : {
                marginLeft:'5px'
            }
        };
        return(
            <Navbar color="light" light expand="md">
                <NavbarBrand href="./Main">ShoppingMall</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/menu1">menu1</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/menu2">menu2</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto">
                        <NavItem style={style.buttonGroup}>
                            <Button style={style}>LOGIN</Button>
                            <Button style={style.button}>REGISTER</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    };
}
export default MainNav;