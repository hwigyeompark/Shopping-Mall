import React, {Component} from 'react';
import '../css/Header.css';
import logo from '../img/logo.png';


class Header extends Component{
    render(){
        return(
            <div id="header">
                <h1><img src={logo}/></h1>
            </div>
        )
    }
}
export default Header;