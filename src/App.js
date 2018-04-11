import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import $ from "jquery";

import ScrollToTop from "./ScrollToTop";

import "./App.css";

import Context from "./Components/Context/Context";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="App">
            <Route exact path="/" component={Context} />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
