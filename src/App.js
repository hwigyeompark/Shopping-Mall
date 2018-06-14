import React, { Component } from 'react';
import Main from "./component/Main";
import MainNav from "./component/MainNav";
class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav/>
        <Main/>
      </div>
    );
  }
}

export default App;
