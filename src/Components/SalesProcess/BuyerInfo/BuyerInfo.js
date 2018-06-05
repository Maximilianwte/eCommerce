import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./BuyerInfo.css";

class BuyerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      street: "",
      zip: "",
      city: "",
      country: ""
    };
  }
  handleInfo = () => {
    const id = this.props.Login_State;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const street = this.state.street;
    const zip = this.state.zip;
    const city = this.state.city;
    const country = this.state.country;

    axios
      .post("/api/confirmInfo", {
        id,
        firstName,
        lastName,
        street,
        zip,
        city,
        country
      })
      .then(res => {
        console.log(res);
        window.location.href = "/payment";
      });
    console.log("Req Send");
  };
  onFormChange_firstName = event => {
    this.setState({ firstName: event.target.value });
  };
  onFormChange_lastName = event => {
    this.setState({ lastName: event.target.value });
  };
  onFormChange_Street = event => {
    this.setState({ street: event.target.value });
  };
  onFormChange_Zip = event => {
    this.setState({ zip: event.target.value });
  };
  onFormChange_City = event => {
    this.setState({ city: event.target.value });
  };
  onFormChange_Country = event => {
    this.setState({ country: event.target.value });
  };
  render() {
    /* TEST MODE! */
    if (this.props.Cart_Items.Id.length === 1) {
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
                  <input
                    id="firstName "
                    type="text"
                    placeholder="Vorname"
                    onChange={this.onFormChange_firstName}
                  />
                </div>
                <div className="element" id="lastName">
                  <input
                    id="lastName "
                    type="text"
                    placeholder="Nachname"
                    onChange={this.onFormChange_lastName}
                  />
                </div>
                <div className="element" id="Street">
                  <input
                    id="street"
                    type="text"
                    placeholder="Straße & Hausnummer"
                    onChange={this.onFormChange_Street}
                  />
                </div>
                <div className="element" id="ZipCode">
                  <input
                    id="zip"
                    type="text"
                    placeholder="Postleitzahl"
                    onChange={this.onFormChange_Zip}
                  />
                </div>
                <div className="element" id="Town">
                  <input
                    id="city"
                    type="text"
                    placeholder="Stadt"
                    onChange={this.onFormChange_City}
                  />
                </div>
                <div className="element" id="country">
                  <input
                    id="country"
                    type="text"
                    placeholder="Land"
                    onChange={this.onFormChange_Country}
                  />
                </div>
              </form>
              <div className="checkButton" id="belowForm">
                <button onClick={this.handleInfo}>Bestätigen</button>
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
    Cart_Items: state.Cart_Items,
    Login_State: state.Login_State
  };
}

// We connect our components function (onSelectMood) to the actionCreator (selectMood)
const mapActionsToProps = {
  // onSelectMood: selectMood
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(BuyerInfo);
