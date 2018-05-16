import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./Login.css";

class Login extends Component {
  handleRequest() {
    axios.get("/api/getOrders").then(response => console.log(response.data));
    axios
      .post("/api/processOrderX", {
        _itemId: ["001", "002", "005"],
        date: Date.now()
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="highlightCard">
        <h2>Login</h2>
        <div className="LoginWith">
          <div className="facebook">Facebook</div>
          <div className="Google">Google+</div>
        </div>
        <div className="Login BuyerInfo">
          <form action="">
            <div className="element" id="email">
              <label htmlFor="email">Email</label>
              <input id="email " type="text" />
            </div>
            <div className="element" id="password">
              <label htmlFor="password">Passwort</label>
              <input id="password " type="password" />
            </div>
          </form>
          <button onClick={this.handleRequest}>Request</button>
        </div>
      </div>
    );
  }
}

// Data from our Store gets passed into Props here.
function mapStateToProps(state) {
  return {};
}

// We connect our components function (onSelectMood) to the actionCreator (selectMood)
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Login);
