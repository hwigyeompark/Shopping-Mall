import React, { Component } from 'react';
import Slide from "./Slide";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from "./MainNav";
import Content from "./Content";

class Main extends Component {
    render() {
        return (
            <div>
                <MainNav/>
                <Slide/>
                <Content/>
            </div>
        );
    }
}
export default Main;