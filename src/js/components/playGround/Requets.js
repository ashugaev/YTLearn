import React, { Component } from "react";
import ReactDOM from "react-dom";
import BtnAddNew from "./BtnAddNew";
import TableItem from "./TableItem";
import { Panel, Table } from "react-bootstrap";

class Body extends Component {
  constructor() {
    super();
    this.state = {
      tableItems: [{ 'text': 'blah' }, { 'text': 'blah2' }]
    };
  }

  render() {
    let tableItems = this.state.tableItems;
    return (
      <Panel mt={3} style={{ margin: 20 }}>
        <Panel.Body>
          <BtnAddNew text="Add new" />
          <Table striped bordered style={{ marginTop: 20 }}>
            <thead style={{ padding: 20 }}>
              <tr>
                <th>Price</th>
                <th>Id</th>
                <th>From/Until</th>
                <th>Passengers</th>
              </tr>
            </thead>
            <tbody>
              <TableItem items={tableItems} />
            </tbody>
          </Table>
        </Panel.Body>
      </Panel>
    );
  }
}

export default Body;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Body />, wrapper) : false;
