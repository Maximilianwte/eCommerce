import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import $ from "jquery";

import ScrollToTop from "./ScrollToTop";

import "./App.css";

import Header from "./Components/Header/Header";
import Context from "./Components/Context/Context";
import Cart from "./Components/Cart/Cart";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="App">
          <Header />
            <Route exact path="/" component={Context} />
            <Route exact path="/Einkaufswagen" component={Cart} />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
