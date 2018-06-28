import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";

import { login_state } from "../../Store/Actions";

class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  render() {
    return (
      <div className="wrapper">
      
      </div>
    );
  }
}

// Data from our Store gets passed into Props here.
function mapStateToProps(state) {
  return {
    Login_State: state.Login_State
  };
}

// We connect our components function (onSelectMood) to the actionCreator (selectMood)
const mapActionsToProps = {
  
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(OrderHistory);
