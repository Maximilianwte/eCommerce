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
        <div className="fullPage">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116 116">
            <defs />
            <g id="Ebene_2" data-name="Ebene 2">
              <g id="Ebene_1-2" data-name="Ebene 1">
                <circle className="cls-c1" cx="58" cy="58" r="58" />
                <circle className="cls-c2" cx="58" cy="58" r="51.97" />
                <path
                  className="cls-c3"
                  d="M56.36,67.67C47.3,66,39,57.57,36,49a24.67,24.67,0,0,1,3.36-22.56c2,.8,13.44,4.5,18.09,15.17C62.74,53.65,57.13,66,56.36,67.67Z"
                />
                <path
                  className="cls-c3"
                  d="M62.19,68.16c-4.79-7.85-4-19.69.46-27.61A24.68,24.68,0,0,1,81.74,28.06c.71,2,5.57,13,.69,23.6C76.91,63.61,63.93,67.66,62.19,68.16Z"
                />
                <path
                  className="cls-c3"
                  d="M65.8,70c3.07-8.68,12.75-15.54,21.71-17.07a24.67,24.67,0,0,1,21.73,6.94c-1.1,1.81-6.59,12.54-17.88,15.42C78.61,78.5,67.28,71,65.8,70Z"
                />
                <path
                  className="cls-c3"
                  d="M4.07,59.64c6.67-6.34,18.41-8.07,27.09-5.37a24.65,24.65,0,0,1,16.22,16C45.58,71.42,35.82,78.5,24.46,76,11.62,73.06,4.93,61.23,4.07,59.64Z"
                />
                <path
                  className="cls-c4"
                  d="M100.9,34.28c2.73,11.93-3.27,26.52-12.25,34.62A32.8,32.8,0,0,1,59.3,76.57c0-2.82-1.51-18.78,9.11-30C80.42,33.8,98.5,34.18,100.9,34.28Z"
                />
                <path
                  className="cls-c4"
                  d="M112.57,68.76c-4.63,11.33-17.92,19.82-29.92,21.29A32.8,32.8,0,0,1,54.22,79.46c1.58-2.33,9.55-16.24,24.72-19.35C96.09,56.59,110.66,67.3,112.57,68.76Z"
                />
                <path
                  className="cls-c4"
                  d="M61.34,82.07C52.65,90.7,37.1,93.34,25.48,90a32.8,32.8,0,0,1-22-20.84C5.79,67.64,18.56,57.94,33.74,61,50.9,64.44,60.15,80,61.34,82.07Z"
                />
                <path
                  className="cls-c4"
                  d="M60.56,78.48C48.63,81.21,34,75.21,25.94,66.23a32.85,32.85,0,0,1-7.68-29.35c2.82,0,18.79-1.51,30.05,9.11C61,58,60.66,76.08,60.56,78.48Z"
                />
                <path
                  className="cls-c4"
                  d="M59.3,17.07c10.37,6.51,16.44,21.07,15.82,33.14C74.22,67.73,60.44,75.9,59.3,76.57c-2-2-13.86-12.39-14.31-27.87C44.48,31.21,57.54,18.69,59.3,17.07Z"
                />
              </g>
            </g>
          </svg>{" "}
        </div>
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

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Context);
