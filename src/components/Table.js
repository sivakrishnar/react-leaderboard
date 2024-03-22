import React, {Component} from 'react';
import { response } from '../response';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default class Table extends Component {
    constructor() {
        super();
        this.state = {
           contacts: response['list']
        };
    }
    componentDidUpdate(prevProps,prevState) {
      alert(this.state.sortedBy)
      if(prevState.sortedBy !== this.state.sortedBy) {
        alert(this.state.sortedBy)
        if (this.state.sortedBy === 'age') {
           this.setState = {
            contacts: response['list'].sort((a,b) => a.age > b.age ? 1 : -1)
          }
        }
        if (this.state.sortedBy === 'rank') {
            this.setState = {
             contacts: response['list'].sort((a,b) => a.rank > b.rank ? 1 : -1)
           }
         }
         if (this.state.sortedBy === 'name') {
            this.setState = {
             contacts: response['list'].sort((a,b) => a.name > b.name ? 1 : -1)
           }
         }
         if (this.state.sortedBy === 'points') {
            this.setState = {
             contacts: response['list'].sort((a,b) => a.points > b.points ? 1 : -1)
           }
         }
      }

    }
    
    render() {

        return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/age"><button className="btn btn-primary age" name="age">Age</button></Link>
            <Link to="/name"><button className="btn btn-primary age" name="age">Name</button></Link>
            <Link to="/points"><button className="btn btn-primary age" name="age">Points</button></Link>
            <Link to="/rank"><button className="btn btn-primary age" name="age">Rank</button></Link>
         
            <table className="table table-striped">
                <thead>
                <tr key="head">
                    <th>Age</th>
                    <th>Name</th>
                    <th>Points</th>
                    <th>Rank</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.contacts.map((contact) => (
                       <tr>
                         <td>{contact.age}</td>
                         <td>{contact.name}</td>
                         <td>{contact.points}</td>
                         <td>{contact.rank}</td>
                       </tr>
                    ))
                    };
                </tbody>
            </table>
            <Outlet />
        </div>
        )
    }
}
