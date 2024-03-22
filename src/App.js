import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Age from './components/Age';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';

export default class App extends Component {

  render() {
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
          <Routes>
              <Route path="/" Component={Table}></Route>
              <Route path="/age" Component={Age}></Route>
              <Route path="/name" Component={Name}></Route>
              <Route path="/points" Component={Points}></Route>
              <Route path="/rank" Component={Rank}></Route>
          </Routes>

        <div className="text-center buttons">
          <Table />
        </div>
      </div>
    );
  }
}

