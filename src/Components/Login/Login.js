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
        <div id="fb-root" />
        {(function(d, s, id) {
          var js,
            fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s);
          js.id = id;
          js.src =
            "https://connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v3.0&appId=788257268037093&autoLogAppEvents=1";
          fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk")}
        <h2>Login</h2>
        
        <div className="LoginPage BuyerInfo">
        <div className="LoginWith">
          <div className="facebook">
            <div
              class="fb-login-button"
              data-max-rows="1"
              data-size="large"
              data-button-type="login_with"
              data-show-faces="false"
              data-auto-logout-link="false"
              data-use-continue-as="true"
            />
          </div>
          <div className="Google">
            <a href="/auth/google">
              <img
                src={require("../../Assets/Google_Signin.png")}
                alt="Signin with Google"
                title="Signin with Google"
              />
            </a>
          </div>
        </div>
          <form action="">
            <div className="element" id="email">
              <input id="email " type="text" placeholder="email" />
            </div>

            <div className="element" id="password">
              <input id="password " type="password" placeholder="password" />
            </div>
            <div className="button element">
              <input
                type="button"
                onClick={this.handleRequest}
                value="Submit"
              />
            </div>
          </form>
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
