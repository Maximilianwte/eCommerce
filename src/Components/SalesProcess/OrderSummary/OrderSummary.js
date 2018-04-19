import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./OrderSummary.css";

class OrderSummary extends Component {
    /* Hier sollen alle Daten noch einmal aufgelistet werden. */
  render() {
      return (
        <div className="container cart">
          <h2>Bestellübersicht</h2>
          <div className="cartItems">
            <div className="items">
              <p />
            </div>
            <div className="amount">
              <p />
            </div>
            <div className="prices">
              <p />
            </div>
          </div>
          <div className="button">
            <Link to="/payment">Kostenpflichtig Bestellen</Link>
          </div>
        </div>
      );
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

export default connect(mapStateToProps, mapActionsToProps)(OrderSummary);
