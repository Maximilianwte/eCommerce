import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Context.css";

class Context extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="card"></div>
        <div className="button">
        <Link to="/Buy">Kaufen</Link>
        </div>
      </div>
    );
  }
}

export default Context;
