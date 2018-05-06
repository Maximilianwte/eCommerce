import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./Context.css";

/* import ItemPreview from "../ItemPage/ItemPreview"; */

class Context extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    /*  const loopItems = this.props.Name_Items.map((item, i) => (
      <ItemPreview id={i} key={i} item={item} />
    ));
    return <div className="StoreItems">{loopItems}</div>; */
    return (
      <div className="Store">
        <div className="highlightCard">
          <Link to={"/Buddha"}>
            <h2>Accessoire</h2>
          </Link>
          <Link to={"/Buddha"}>
            <h3>Der neue Buddha</h3>
          </Link>
          <Link to={"/Buddha"}>
            <img
              src={require("../../Assets/StoreItems/Buddha.png")}
              alt=""
              title=""
            />
          </Link>
        </div>
        <div className="banner">
          <h4>Ohhm.. Dein Einkauf ist immer Versandkostenfrei!</h4>
        </div>
        <div className="itemsFront">
          <ul>
            <li>
              <div className="item" id="Matte">
                <Link to={"/Matte"}>
                  <img
                    src={require("../../Assets/StoreItems/Matte.png")}
                    alt=""
                    title=""
                  />
                </Link>
              </div>
            </li>
            <li>
              <div className="item" id="Kerze">
                <Link to={"/Kerze"}>
                  <img
                    src={require("../../Assets/StoreItems/Kerzen.png")}
                    alt=""
                    title=""
                  />
                </Link>
              </div>
            </li>
          </ul>
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
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Context);
