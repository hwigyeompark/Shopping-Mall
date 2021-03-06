import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from "./Component/Main";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Skirt from './Component/Category/Skirt';
import MainNav from "./Component/MainNav";
import Outer from "./Component/Category/Outer";
import Top from "./Component/Category/Top";
import Pants from "./Component/Category/Pants";
import Acc from "./Component/Category/Acc";
import Shoes from "./Component/Category/Shoes";
import PantsList from "./Component/Detail/PantsList";
import Cart from "./Component/Cart";
import Login from "./Component/Login";
import Join from "./Component/Join";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <MainNav/>
                <BrowserRouter>
                    <div>
                        <Route exact path='/' component={Main}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/join" component={Join}/>
                        <Route path='/category/outer' component={Outer}/>
                        <Route path='/category/top' component={Top}/>
                        <Route exact path='/category/pants' component={Pants}/>
                        <Route path='/category/skirt' component={Skirt}/>
                        <Route path='/category/acc' component={Acc}/>
                        <Route path='/category/shoes' component={Shoes}/>
                        <Route path='/category/pants/detailPants/:id' component={PantsList}/>
                        <Route path='/cart' component={Cart}/>
                    </div>
                </BrowserRouter>
                <Footer/>
            </div>
        );
    };
}

export default App;
