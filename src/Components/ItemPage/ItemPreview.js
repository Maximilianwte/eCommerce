import React, { Component } from "react";
import { Link } from "react-router-dom";


class ItemPreview extends Component {
  render() {
    return (
      <div className="wrapper">
        <Link to={"/Item/" + this.props.item.id}>
          <img
            src={require('../../Assets/StoreItems/'+ this.props.item.id + '.jpg')}
            alt={this.props.item.name}
            title={this.props.item.name}
          />
        </Link>
      </div>
    );
  }
}

export default ItemPreview;
