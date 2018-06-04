import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./Payment.css";

// Here we try to get the cdn imported script from index.html
const braintree = window.braintree;

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      braintreeClientId: ""
    };
  }
  // Ich glaube ich muss noch im getBraintreeCred unten die Payment Nonce Function einfügen.
  getBraintreeCred = async () => {
    const response = await fetch("/api/getBraintreeCred");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    braintree.dropin
      .create({
        authorization: body.braintreeClientId,
        container: "#dropin-container"
      })
      .then(function(instance) {
        /*  */
      });
    this.setState({ braintreeClientId: body.braintreeClientId });
  };
  handleCheckout() {
    var button = document.querySelector('#submit');
    braintree.dropin.create(
      {
        authorization: this.state.braintreeClientId,
        container: "#dropin-container"
      },
      function(createErr, instance) {
        button.addEventListener("click", function() {
          instance.requestPaymentMethod(function(err, payload) {
            // Submit payload.nonce to your server
          });
        });
      }
    );
  }
  /* Render am besten auch nochmal eine Zusammenfassung der Daten der Bestellung */
  render() {
    return (
      <div className="container cart">
        <div id="dropin-container" />
        <h2>Bezahlverfahren</h2>
        <div className="checkButton">
          <button id="submit" onClick={this.handleCheckout}>Bezahlen</button>
        </div>
      </div>
    );
  }
}

// Data from our Store gets passed into Props here.
function mapStateToProps(state) {
  return {
    Cart_Items: state.Cart_Items
  };
}

// We connect our components function (onSelectMood) to the actionCreator (selectMood)
const mapActionsToProps = {
  // onSelectMood: selectMood
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Payment);
