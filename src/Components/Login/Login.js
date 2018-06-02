import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";

import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  tryLogin = () => {
    const email = this.state.email;
    const password = this.state.password;
    axios.post("/auth/try_login", { email, password }).then(res => {
      console.log(res);
      // Die response enthält die Customer Id. Speicher die in einem Redux Reducer um später zu wissen wer gerade drin ist.
    });
  };
  onFormChange_Email = event => {
    this.setState({ email: event.target.value });
  };
  onFormChange_Password = event => {
    this.setState({ password: event.target.value });
  };
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
              <input
                id="email "
                type="text"
                placeholder="email"
                onChange={this.onFormChange_Email}
              />
            </div>

            <div className="element" id="password">
              <input
                id="password "
                type="password"
                placeholder="password"
                onChange={this.onFormChange_Password}
              />
            </div>
            <div className="button element">
              <input type="button" onClick={this.tryLogin} value="Submit" />
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
