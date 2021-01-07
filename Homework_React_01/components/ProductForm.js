import React, { Component } from "react";
import { Input } from "semantic-ui-react";
import { Table } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

export default class ProductForm extends Component {
  constructor(props) {
    super(props);
    const { product } = props;
    this.state = {
      id: "",
      name: "",
      price: "",
      quantity: "",
      ...product,
    };
  }

  submitProductForm = () => {
    this.props.onSubmit(this.state);
    this.resetFields();
  };

  resetFields = () => {
    this.setState({
      title: "",
      type: "",
      price: "",
      quantity: "",
    });
  };
  onChangeField = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { id, name, price, quantity } = this.state;
    return (
      <Table.Row className="table__body__row">
        <Table.Cell className="table__body__row__inputs">
          <Input
            className="table__input__id"
            placeholder="ID..."
            type="text"
            name="id"
            value={id}
            onChange={this.onChangeField}
          />
        </Table.Cell>
        <Table.Cell className="table__body__row__inputs">
          <Input
            className="table__input__name"
            placeholder="Name..."
            type="text"
            name="name"
            value={name}
            onChange={this.onChangeField}
          />
        </Table.Cell>

        <Table.Cell className="table__body__row__inputs">
          <Input
            className="table__input__price"
            placeholder="Price..."
            type="text"
            name="price"
            value={price}
            onChange={this.onChangeField}
          />
        </Table.Cell>

        <Table.Cell className="table__body__row__inputs">
          <Input
            className="table__input__quantity"
            placeholder="Quantity..."
            type="text"
            name="quantity"
            value={quantity}
            onChange={this.onChangeField}
          />
        </Table.Cell>

        <Table.Cell>
          <Button className="table__addButton" onClick={this.submitProductForm}>
            Add
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}
