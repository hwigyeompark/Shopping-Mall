import React, {Component} from 'react';
import '../css/Header.css';
import logo from '../img/logo.png';


class Header extends Component{
    render(){
        return(
            <div id="header">
                <h1><a href="/"><img src={logo}/></a></h1>
                <ul>
                    <li><a href="./Login.js">로그인</a></li>
                    <li><a href="./Register.js">회원가입</a></li>
                </ul>
            </div>
        )
    }
}
export default Header;