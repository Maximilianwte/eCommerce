import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./ItemPage.css";
import { cart_items } from "../../Store/Actions";

class ItemPageBuddha extends Component {
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
    return (
      <div className="ItemPage" id="Buddha">
        <div className="top" id="Buddha" />
        <div className="left">
          <img
            src={require("../../Assets/StoreItems/Buddha.png")}
            alt=""
            title=""
          />
        </div>
        <div className="right">
          <h2>Unser</h2>
          <h3>Buddha.</h3>
          <div className="quantityButton">
            <button id="decrease" onClick={this.changeQuantity}>
              -
            </button>
            <p>{this.props.Cart_Items}</p>
            <button id="increase" onClick={this.changeQuantity}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// Data from our Store gets passed into Props here.
function mapStateToProps(state) {
  return {
    Purchase_State: state.Purchase_State,
    Cart_Items: state.Cart_Items,
    Name_Items: state.Name_Items
  };
}

// We connect our components function (onSelectMood) to the actionCreator (selectMood)
const mapActionsToProps = {
  // onSelectMood: selectMood
  onChangeQuantity: cart_items
};

export default connect(mapStateToProps, mapActionsToProps)(ItemPageBuddha);
