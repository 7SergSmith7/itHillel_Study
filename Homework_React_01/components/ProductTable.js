import React, { Component } from "react";
import { Table } from "semantic-ui-react";

import ProductRow from "./ProductRow";
import ProductForm from "./ProductForm";

export default function ProductTable({
  products,
  onAddProduct,
  onRemoveProduct,
}) {
  return (
    <Table celled>
      <Table.Header className="table__head">
        <Table.Row className="table__head__row">
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Item Name</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Quantity</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body className="table__body">
        {products.map((product) => (
          <ProductRow
            key={product.id}
            product={product}
            onRemoveProduct={onRemoveProduct}
          />
        ))}

        <ProductForm onSubmit={onAddProduct} />
      </Table.Body>
    </Table>
  );
}
