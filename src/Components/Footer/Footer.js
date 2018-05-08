import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerItem" id="left">
          <ul>
            <li>Light Store</li>
            <li>Hamburg, Germany</li>
          </ul>
        </div>
        <div className="footerItem" id="middle">
          <ul>
            <li>Home</li>
            <li>Login</li>
            <li>Cart</li>
            <li>Imprint</li>
          </ul>
        </div>
        <div className="footerItem" id="right">
          <ul>
            <li>
              <a
                href="https://www.lightstrategies.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={require("../../Assets/DevelopedByLight.svg")}
                  alt="Developed By Light"
                  title="Developed by Light"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
