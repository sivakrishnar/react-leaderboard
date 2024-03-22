import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Rank extends Component {

  render() {
    return(
        <button className="btn btn-primary" onClick={() => this.setState({sortedBy: 'rank'})}>Rank</button>
    )
  }
}
