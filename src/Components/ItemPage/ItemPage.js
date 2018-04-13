import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./ItemPage.css";

import { cart_items } from "../../Store/Actions";

class ItemPage extends Component {
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
          <div className="left StoreItems">{/* Img needs to change accordingly. */}
          <img
              src={require("../../Assets/StoreItems/1.jpg")}
              alt="React.js"
              title="React.js"
            /> </div>
          <div className="right">
            <div className="ItemName">
              <h4>{this.props.Name_Items[0]}</h4>
            </div>
            <div className="Price">
              <h5>{this.props.Name_Items[1]}</h5>
            </div>
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
    Cart_Items: state.Cart_Items,
    Name_Items: state.Name_Items,
  };
}

// We connect our components function (onSelectMood) to the actionCreator (selectMood)
const mapActionsToProps = {
  // onSelectMood: selectMood
  onChangeQuantity: cart_items
};

export default connect(mapStateToProps, mapActionsToProps)(ItemPage);
