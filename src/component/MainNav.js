import React, {Component} from 'react';
import { Redirect } from 'react-router';
import { Nav, NavItem, NavLink, Navbar, NavbarBrand, Collapse, NavbarToggler, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class MainNav extends Component{
    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
            loginModal:false,
            registerModal:false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState({
            isOpen : !this.state.isOpen,
            loginModal : !this.state.loginModal,
            registerModal : !this.state.registerModal
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
                                <Button onClick={this.toggle} style={style.button}>LOGIN</Button>
                                <Modal isOpen={this.state.loginModal} toggle={this.toggle} >
                                    <ModalHeader toggle={this.toggle}>LOGIN</ModalHeader>
                                    <ModalBody>
                                        <form>
                                            ID : <input type="text" name="id"/><br/><br/>
                                            PASSWORD : <input type="password" name="password"/>
                                        </form>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button onClick={this.toggle} color="primary">LOGIN</Button>
                                    </ModalFooter>
                                </Modal>

                                <Button onClick={this.toggle} style={style.button}>REGISTER</Button>
                                <Modal isOpen={this.state.registerModal} toggle={this.toggle} >
                                    <ModalHeader toggle={this.toggle}>REGISTER</ModalHeader>
                                    <ModalBody>
                                        <form>
                                            아이디 : <input type="text" name="id"/><br/><br/>
                                            패스워드 : <input type="password" name="password"/><br/><br/>
                                            패스워드 확인 : <input type="password" name="passwordC"/><br/><br/>
                                            성명 : <input type="text" name="name"/><br/><br/>
                                            전화번호 : <input type="text" name="phone"/><br/><br/>
                                            주소 : <input type="text" name="addr"/><br/><br/>
                                            이메일 : <input type="text" name="email"/>
                                        </form>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button onClick={this.toggle} color="primary">REGISTER</Button>
                                    </ModalFooter>
                                </Modal>
                            </NavItem>
                        </Nav>
                </Collapse>
            </Navbar>
        );
    };
}
export default MainNav;