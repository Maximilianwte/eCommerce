import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./BuyerInfo.css";

class BuyerInfo extends Component {
  render() {
    /* Switch === 0 back */
    /* !TESTMODE! */
    if (this.props.Cart_Items === 1) {
      return (
        <div className="container cart">
          <div className="cartItems">
            <div className="items">
              <h3>Dein Einkaufswagen ist noch leer.</h3>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="inletContainer">
            <h2>Deine Kundendaten</h2>
            <div className="BuyerInfo">
              <form action="">
                <div className="element" id="firstName">
                  <label htmlFor="firstName">Vorname</label>
                  <input id="firstName " type="text" />
                </div>
                <div className="element" id="lastName">
                  <label htmlFor="lastName">Nachname</label>
                  <input id="lastName " type="text" />
                </div>
                <div className="element" id="email">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="text" />
                </div>
                <div className="element" id="Street">
                  <label htmlFor="Street">Straße & Hausnummer</label>
                  <input id="Street" type="text" />
                </div>
                <div className="element" id="ZipCode">
                  <label htmlFor="ZipCode">Postleitzahl</label>
                  <input id="ZipCode" type="text" />
                </div>
                <div className="element" id="Town">
                  <label htmlFor="Town">Stadt</label>
                  <input id="Town" type="text" />
                </div>
                <div className="button">
                  <Link to="/checkorder">Bestätigen</Link>
                </div>
              </form>
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

export default connect(mapStateToProps, mapActionsToProps)(BuyerInfo);
