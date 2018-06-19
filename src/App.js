import React, { Component } from 'react';
import Main from "./component/Main";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { BrowserRouter, Route } from 'react-router-dom';
import Skirt from './component/Skirt';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <Route path='/skirt' component={Skirt}/>
          </BrowserRouter>
          <Header/>
          <Main/>
          <Footer/>
      </div>
    );
  }
}

export default App;
