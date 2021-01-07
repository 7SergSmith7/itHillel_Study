import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

class ProductRow extends Component {
  render() {
    const { product, onRemoveProduct } = this.props;

    return (
      <Table.Row className="table__body__row">
        <Table.Cell>{product.id}</Table.Cell>
        <Table.Cell>{product.name}</Table.Cell>
        <Table.Cell>{product.price}</Table.Cell>
        <Table.Cell>{product.quantity}</Table.Cell>
        <Table.Cell>
          <Button
            className="table__deleteButton"
            onClick={() => onRemoveProduct(product.id)}
          >
            Delete
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default ProductRow;
