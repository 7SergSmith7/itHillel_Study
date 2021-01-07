import React, { Component } from "react";

class ProductRow extends Component {
  render() {
    const { id, name, price } = this.props;
    return (
      <div className="product">
        <div className="product_id">{id}</div>
        <div className="product_name">{name}</div>
        <div className="product_price">{price}</div>
      </div>
    );
  }
}

export default ProductRow;
