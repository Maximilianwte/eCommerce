import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./Context.css";

import ItemPreview from "../ItemPage/ItemPreview";

class Context extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const loopItems = this.props.Name_Items.map((item, i) => (
      <ItemPreview id={i} key={i} item={item} />
    ));
    return (
      <div className="container">
        <div className="StoreItems">{loopItems}</div>
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
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Context);
