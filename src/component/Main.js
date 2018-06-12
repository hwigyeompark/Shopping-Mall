import React, { Component } from 'react';
import MainNav from './MainNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from "./Content";

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