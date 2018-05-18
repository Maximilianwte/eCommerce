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
    let ItemId = this.props.match.params.slug - 1;
    const Item = this.props.Name_Items[ItemId];
    return (
      <div className="StoreItems container">
        <div className="inletContainer">
          <div className="left StoreItem bigItem">
            <img
              src={require("../../Assets/StoreItems/" + Item.id + ".jpg")}
              alt={Item.name}
              title={Item.name}
            />
          </div>
          <div className="right">
            <div className="ItemName">
              <h4>{Item.name}</h4>
            </div>
            <div className="Price">
              <h5>{Item.price}</h5>
            </div>
            <div className="quantityButton">
              <button id="decrease" onClick={this.changeQuantity}>
                -
              </button>
              <p>{this.props.Cart_Items}</p>
              <button id="increase" onClick={this.changeQuantity}>
                +
              </button>
            </div>
            <div className="button">
              <Link to="/cart">In den Warenkorb</Link>
            </div>
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

export default connect(mapStateToProps, mapActionsToProps)(ItemPage);
