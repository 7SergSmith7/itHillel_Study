import React from "react";
import "./App.css";
import ProductForm from "./components/ProductForm";

import ProductTable from "./components/ProductTable";

class App extends React.Component {
  state = {
    products: [
      { id: "1", name: "Table", price: 100 },
      { id: "2", name: "Shelf", price: 120 },
      { id: "3", name: "Сhair", price: 150 },
    ],
  };

  addProduct = (newProduct) => {
    this.setState({
      products: [...this.state.products, newProduct],
    });
  };
  render() {
    const { products } = this.state;
    return (
      <div className="app">
        <ProductTable products={products} />
        <ProductForm onSubmitProduct={this.addProduct} />
      </div>
    );
  }
}

export default App;
