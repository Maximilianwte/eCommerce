import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./ItemPage.css";
import { cart_items, add_cart } from "../../Store/Actions";

class ItemPageBuddha extends Component {
  constructor(props) {
    super(props);

    this.changeQuantity = this.changeQuantity.bind(this);
  }
  changeQuantity = e => {
    if (e.target.id === "decrease" && this.props.AddToCart != 0) {
      this.props.onChangeQuantity(this.props.AddToCart - 1);
    } else if (e.target.id === "increase" && this.props.AddToCart != 9) {
      this.props.onChangeQuantity(this.props.AddToCart + 1);
    } else {
    }
  };
  addToCart = () => {
    if (this.props.AddToCart != 0) {
      this.props.onChangeChart(this.props.AddToCart + this.props.Cart_Items);
      this.props.onChangeQuantity(0);
    }
  }
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
            <p>{this.props.AddToCart}</p>
            <button id="increase" onClick={this.changeQuantity}>
              +
            </button>
          </div>
          <div className="checkButton">
            <button onClick={this.addToCart}>In den Einkaufswagen</button>
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
    Name_Items: state.Name_Items,
    AddToCart: state.AddToCart
  };
}

// We connect our components function (onSelectMood) to the actionCreator (selectMood)
const mapActionsToProps = {
  // onSelectMood: selectMood
  onChangeQuantity: add_cart,
  onChangeChart: cart_items,
};

export default connect(mapStateToProps, mapActionsToProps)(ItemPageBuddha);
