import React, { Component } from 'react';
import MainNav from './MainNav';
import Content from "./Content";
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends Component {
    render() {
        return (
            <div>
                <MainNav/>
                <Content/>
            </div>
        );
    }
}
export default Main;