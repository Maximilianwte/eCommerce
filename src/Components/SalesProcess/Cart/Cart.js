import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import axios from "axios";

import Login from "../../Login/Login";

import "./Cart.css";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_Name: [],
    };
  }
  getOrder = async () => {
    const response = await fetch("/api/getOrders");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    console.log(body);
    return body;
  };
  // POST ORDER FOR TESTING PURPOSES.
  postOrder = () => {
    const test_data = "Hallo";
    axios.post("/api/test_post", { test_data }).then(res => {
      console.log(res);
    });
  };
  
  componentDidMount = () => {
    var nextState = this.props.Cart_Items.Id.map((item, i) => {
      if (item === "001") {
        return "Buddha";
      } else {
      }
    });
    this.setState({ item_Name: nextState });
  }
  render() {
    if (this.props.Login_State != "0") {
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
                    {this.state.item_Name.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="amount cartChild">
                  <ul>
                    {this.props.Cart_Items.Amount.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="prices cartChild">
                  <ul>
                    {this.props.Cart_Items.Price.map((item, i) => (
                      <li key={i}>{item}€</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="checkButton" id="cart">
              <Link to="/info">Zur Kasse</Link>
            </div>
            <div className="checkButton">
              <button onClick={this.postOrder}>Test_postOrder</button>
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
    Cart_Items: state.Cart_Items,
    Login_State: state.Login_State
  };
}

// We connect our components function (onSelectMood) to the actionCreator (selectMood)
const mapActionsToProps = {
  // onSelectMood: selectMood
};

export default connect(mapStateToProps, mapActionsToProps)(Cart);
