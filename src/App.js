import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { CardList } from "./components/card-list/card-list.component";
import { CardListNew } from "./components/card-list/card-list.component";

class App extends Component{
  constructor(){
    super();

    this.state = {
      monstersNew : []
  };
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState( { monstersNew:users } ))
}


  render(){
    return (
      <div className="App">
        {/* <input type="search" placeholder="Search Monster" 
        onChange={ e => console.log(e.target.value)}></input> */}
         {/* <input type="search" placeholder="Search Monster" 
        onChange = { 
          e => { this.setState({ searchField: e.target.value });
          console.log(this.state)
        }} /> */}
        <input type="search" placeholder="Search Monster" onChange= {
          e => { 
          this.setState ( { searchField : e.target.value }, 
          () => console.log(this.state) );
           }} />
        <CardList monstersNew={this.state.monstersNew} />
      </div>
    );
  }
}
export default App;
