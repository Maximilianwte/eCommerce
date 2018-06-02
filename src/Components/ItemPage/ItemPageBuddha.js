import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./ItemPage.css";
import { cart_count, cart_items } from "../../Store/Actions";

class ItemPageBuddha extends Component {
  constructor(props) {
    super(props);

    this.changeQuantity = this.changeQuantity.bind(this);
    this.state = {
      thisItemId: "001",
      thisItemValue: 19.99,
      addToCart: 0
    };
  }
  changeQuantity = e => {
    if (e.target.id === "decrease" && this.state.addToCart !== 0) {
      this.setState({
        addToCart: this.state.addToCart - 1
      });
    } else if (e.target.id === "increase" && this.state.addToCart !== 9) {
      this.setState({
        addToCart: this.state.addToCart + 1
      });
    } else {
    }
  };
  addToCart = () => {
    if (this.state.addToCart != 0) {
      this.props.onChangeCart(this.state.addToCart + this.props.Cart_Count);
      const itemTimesValue = this.state.thisItemValue * this.state.addToCart;
      this.props.onChangeCartItems([
        this.state.thisItemId,
        this.state.addToCart,
        itemTimesValue
      ]);
      this.setState({
        addToCart: 0
      });
    }
    console.log(this.props.Cart_Items);
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
            <p>{this.state.addToCart}</p>
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
    Cart_Count: state.Cart_Count,
    Cart_Items: state.Cart_Items
  };
}

// We connect our components function (onSelectMood) to the actionCreator (selectMood)
const mapActionsToProps = {
  // onSelectMood: selectMood
  onChangeCart: cart_count,
  onChangeCartItems: cart_items
};

export default connect(mapStateToProps, mapActionsToProps)(ItemPageBuddha);
