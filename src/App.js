import React, { Component } from 'react';
import Main from "./component/Main";
import Header from "./component/Header";
import Footer from "./component/Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
            <Main/>
          <Footer/>
      </div>
    );
  }
}

export default App;
