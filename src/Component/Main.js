import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide from "./Slide";
import Content from "./Content";

class Main extends Component {
    render() {
        return (
            <div>
                <Slide/>
                <Content/>
            </div>
        );
    }
}
export default Main;