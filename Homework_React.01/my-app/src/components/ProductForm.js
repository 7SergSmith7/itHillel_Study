import React, { Component } from "react";

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProductId: props.product?.id,
      newProductName: props.product?.name,
      newProductPrice: props.product?.price,
    };
  }
  resetForm = () => {
    this.setState({
      newProductId: "",
      newProductName: "",
      newProductPrice: "",
    });
  };
  submitProduct = () => {
    const {
      newProductId: id,
      newProductName: name,
      newProductPrice: price,
    } = this.state;
    const newProduct = { id, name, price };
    this.props.onSubmitProduct(newProduct);
    this.resetForm();
  };

  render() {
    const { newProductId, newProductName, newProductPrice } = this.state;
    return (
      <div className="product-imput">
        <input
          value={newProductId}
          className="product-imput__id"
          type="text"
          name="id"
          placeholder="id"
        ></input>
        <input
          value={newProductName}
          className="product-imput__name"
          type="text"
          name="name"
          placeholder="Name"
        ></input>
        <input
          value={newProductPrice}
          className="product-imput__price"
          type="text"
          name="price"
          placeholder="Price"
        ></input>
        <button onClick={this.submitProduct} className="product-imput__add">
          Add
        </button>
      </div>
    );
  }
}

export default ProductForm;
