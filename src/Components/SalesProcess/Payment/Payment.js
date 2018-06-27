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
    var button = document.querySelector("#submit");
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
        <div className="row">
          <div className="col-12">
            <div id="dropin-container" />
            <h2>Bezahlverfahren</h2>
            <form action="your-server-side-code" method="POST">
              <script
                src="https://checkout.stripe.com/checkout.js"
                class="stripe-button"
                data-key="pk_test_n8r1i121UbCQEUWg1lUbcbN0"
                data-amount="999"
                data-name="Demo Site"
                data-description="Widget"
                data-zip-code="true"
                data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
                data-locale="auto"
                data-currency="eur"
              />
            </form>
            <div className="checkButton">
              <button id="submit" onClick={this.handleCheckout}>
                Bezahlen
              </button>
            </div>
          </div>
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
