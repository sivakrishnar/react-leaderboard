import { Component } from 'react';
import { response } from '../response';
import React from 'react'
import Table from "./Table"

export default class Age extends Component {
  constructor() {
    super();
    this.state= {
      contacts: response['list'].sort((a,b) => a.age > b.age ? 1 : -1)
    }
  }
  render() {
    return(
      <Table />
    )
  }
}
