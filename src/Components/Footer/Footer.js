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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/imprint">Imprint</Link></li>
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
