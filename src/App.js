import React, { Component } from 'react';
import Main from "./component/Main";
import MainNav from "./component/MainNav";
import Header from "./component/Header";
class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
            <MainNav/>
            <Main/>
      </div>
    );
  }
}

export default App;
