import React, { Component } from "react";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="table">
        <div className="table__header">
          <div className="table__header__id">id</div>
          <div className="table__header__name">Name</div>
          <div className="table__header__price">Price</div>
        </div>
        <div className="table__body">
          {products.map((product) => (
            <ProductRow
              id={product.id}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductTable;
