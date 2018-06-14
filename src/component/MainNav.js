import React, {Component} from 'react';
import { Router, Link } from 'react-router-dom';
import { Nav, NavItem, NavLink, Navbar, NavbarBrand, Collapse, NavbarToggler, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class MainNav extends Component{
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
        this.state = {
            modal:false
        };
    }
    toggle(){
        this.setState({
            isOpen : !this.state.isOpen,
            modal : !this.state.modal
        });
    }
    render(){
        const style={
            buttonGroup : {
              marginRight:'10px'
            },
            button : {
                margin:'5px',
                opacity:'.7',
                fontSize:'0.9em'
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
                                <Button style={style.button} onClick={this.toggle}>LOGIN</Button>
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                    <ModalHeader toggle={this.toggle}>LOGIN</ModalHeader>
                                    <ModalBody>
                                        <form>
                                            ID : <input type="text" name="id"/><br/><br/>
                                            PASSWORD : <input type="password" name="password"/>
                                        </form>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.toggle}>LOGIN</Button>
                                    </ModalFooter>
                                </Modal>
                                <Button style={style.button}>REGISTER</Button>
                            </NavItem>
                        </Nav>

                </Collapse>
            </Navbar>
        );
    };
}
export default MainNav;