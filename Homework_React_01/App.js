import "semantic-ui-css/semantic.min.css";
import "./App.css";
import React from "react";
import ProductTable from "./components/ProductTable";

class App extends React.Component {
  state = {
    products: [
      { id: "1", name: "Table", price: 100, quantity: 2 },
      { id: "2", name: "Shelf", price: 120, quantity: 5 },
      { id: "3", name: "Сhair", price: 150, quantity: 4 },
    ],
  };
  addProduct = (newProduct) => {
    console.log(newProduct);
    this.setState({
      products: [...this.state.products, newProduct],
    });
  };

  removeProduct = (id) => {
    const { products } = this.state;
    this.setState({
      products: products.filter((product) => product.id !== id),
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="app">
        <ProductTable
          products={products}
          onAddProduct={this.addProduct}
          onRemoveProduct={this.removeProduct}
        />
        {/* <ProductForm onSubmitProduct={this.addProduct} /> */}
      </div>
    );
  }
}

export default App;
