import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./Context.css";

import { cart_items } from "../../Store/Actions";

class Context extends Component {
  constructor(props) {
    super(props);

    this.changeQuantity = this.changeQuantity.bind(this);
  }
  changeQuantity = e => {
    if (e.target.id === "decrease" && this.props.Cart_Items != 0) {
      this.props.onChangeQuantity(this.props.Cart_Items - 1);
    } else if (e.target.id === "increase" && this.props.Cart_Items != 9) {
      this.props.onChangeQuantity(this.props.Cart_Items + 1);
    } else {
    }
  };
  render() {
    console.log(this.props.Purchase_State);
    return (
      <div className="wrapper">
        <div className="container">
          <div className="StoreItems">
          <Link to="/Item/1">
            <img
              src={require("../../Assets/StoreItems/1.jpg")}
              alt="React.js"
              title="React.js"
            />
          </Link>
          <Link to="/Item/2">
            <img
              src={require("../../Assets/StoreItems/3.jpg")}
              alt="React.js"
              title="React.js"
            />
          </Link>
          <Link to="/Item/3">
            <img
              src={require("../../Assets/StoreItems/2.jpg")}
              alt="React.js"
              title="React.js"
            />
          </Link>
          </div>
        </div>
        {/* <div className="quantityButton">
          <button id="decrease" onClick={this.changeQuantity}>
            -
          </button>
          <p>{this.props.Cart_Items}</p>
          <button id="increase" onClick={this.changeQuantity}>
            +
          </button>
        </div>
        <div className="button">
          <Link to="/Buy">Bestellen</Link>
        </div> */}
      </div>
    );
  }
}

// Data from our Store gets passed into Props here.
function mapStateToProps(state) {
  return {
    Purchase_State: state.Purchase_State,
    Cart_Items: state.Cart_Items
  };
}

// We connect our components function (onSelectMood) to the actionCreator (selectMood)
const mapActionsToProps = {
  // onSelectMood: selectMood
  onChangeQuantity: cart_items
};

export default connect(mapStateToProps, mapActionsToProps)(Context);
