import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";

import "./App.css";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Context from "./Components/Context/Context";
/* import ItemPage from "./Components/ItemPage/ItemPage"; */
import ItemPageBuddha from "./Components/ItemPage/ItemPageBuddha";
import Login from "./Components/Login/Login";
import Cart from "./Components/SalesProcess/Cart/Cart";
import BuyerInfo from "./Components/SalesProcess/BuyerInfo/BuyerInfo";
import OrderSummary from "./Components/SalesProcess/OrderSummary/OrderSummary";
import Payment from "./Components/SalesProcess/Payment/Payment";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="App">
            <Header />
            {/* <Route path="/Item/:slug" component={ItemPage} /> */}
            <Route exact path="/" component={Context} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/info" component={BuyerInfo} />
            <Route exact path="/checkorder" component={OrderSummary} />
            <Route exact path="/payment" component={Payment} />
            <Route path="/Buddha" component={ItemPageBuddha} />
            <Footer />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
