import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Login from "../../Login/Login";

import "./Cart.css";

class Cart extends Component {
  render() {
    if (this.props.Login_State === 1) {
      if (this.props.Cart_Items === 0) {
        return (
          <div className="highlightCard cart">
            <div className="cartItems">
              <div className="items">
                <h3>Dein Einkaufswagen ist noch leer.</h3>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="highlightCard">
            <h2>Einkaufswagen</h2>
            <div className="cartItemsOuter">
              <div className="cartItems">
                <div className="items cartChild">
                  <ul>
                    <li>Buddha</li>
                  </ul>
                </div>
                <div className="amount cartChild">
                  <ul>
                    <li>2</li>
                  </ul>
                </div>
                <div className="prices cartChild">
                  <ul>
                    <li>18.99€</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="checkButton" id="cart">
              <Link to="/info">Zur Kasse</Link>
            </div>
          </div>
        );
      }
    } else {
      return <Login />;
    }
  }
}

// Data from our Store gets passed into Props here.
function mapStateToProps(state) {
  return {
    Purchase_State: state.Purchase_State,
    Cart_Items: state.Cart_Items,
    Name_Items: state.Name_Items,
    Price_Items: state.Price_Items,
    Login_State: state.Login_State
  };
}

// We connect our components function (onSelectMood) to the actionCreator (selectMood)
const mapActionsToProps = {
  // onSelectMood: selectMood
};

export default connect(mapStateToProps, mapActionsToProps)(Cart);
