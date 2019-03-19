import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { hot } from "react-hot-loader";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import GlobalStyle from "./components/styled/GlobalStyle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle computerFont />
        <nav>
          <Link to="/">Home</Link> <Link to="about">About</Link>
        </nav>
        <Router>
          <Home path="/" />
          <About path="about" />
        </Router>
      </div>
    );
  }
}

// export default App;
export default hot(module)(App);
