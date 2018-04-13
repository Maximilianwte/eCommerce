import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./Cart.css";

class Cart extends Component {
  render() {
    if (this.props.Name_Items[0] === "None") {
      return (
        <div className="wrapper">
          <div className="container cart">
            <div className="cartItems">
              <div className="items">
                <h3>Dein Einkaufswagen ist noch leer.</h3>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="wrapper">
          <div className="container cart">
            <h2>Einkaufswagen</h2>
            <div className="cartItems">
              <div className="items">
                <p>{this.props.Name_Items[0]}</p>
              </div>
              <div className="amount">
                <p>{this.props.Cart_Items}</p>
              </div>
              <div className="prices">
                <p>{this.props.Name_Items[1]}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

// Data from our Store gets passed into Props here.
function mapStateToProps(state) {
  return {
    Purchase_State: state.Purchase_State,
    Cart_Items: state.Cart_Items,
    Name_Items: state.Name_Items,
    Price_Items: state.Price_Items
  };
}

// We connect our components function (onSelectMood) to the actionCreator (selectMood)
const mapActionsToProps = {
  // onSelectMood: selectMood
};

export default connect(mapStateToProps, mapActionsToProps)(Cart);
