import React, { Component } from 'react';
import { response } from '../response';
import Table from "./Table"

export default class Name extends Component {
  constructor() {
    super();
    this.state = {
      contacts: response['list'].sort((a,b) => a.name > b.name ? 1 : -1)
    }
  }

  render() {
    return(
      <Table />
    )
  }
}
