import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { CardList } from "./components/card-list/card-list.component";
import { CardListNew } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component.jsx";

class App extends Component{
  constructor(){
    super();

    this.state = {
      monstersNew : [],
      searchField: ''
  };

  // this.handleChange = this.handleChange.bind(this);
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState( { monstersNew:users } ))
}

  // handleChange = (e) => {
  // this.setState({ searchField: e.target.value });
  // }

  handleChange = (e) => {
    this.setState({ searchField : e.target.value });
  }

  render(){

    // const {monstersNew, searchField} = this.state;
    // const fieldMonster = monstersNew.filter(monstersNew => monstersNew.name.toLowerCase().includes(searchField.toLowerCase()));

    const {monstersNew, searchField} = this.state;
    const filteredMonsterNew = monstersNew.filter(
      monstersNew => 
      monstersNew.name.toLowerCase().includes(searchField.toLowerCase()
        ));

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        {/* <input type="search" placeholder="Search Monster" 
        onChange={ e => console.log(e.target.value)}></input> */}
         {/* <input type="search" placeholder="Search Monster" 
        onChange = { 
          e => { this.setState({ searchField: e.target.value });
          console.log(this.state)
        }} /> */}
       
        {/* <CardList monstersNew={this.state.monstersNew} /> */}
        {/* <CardList monstersNew={fieldMonster} /> */}
        {/* <SearchBox placeholder='Search Monster' handleChange = { e => this.setState({ searchField: e.target.value })}/> */}
        <SearchBox placeholder='Search Monster' handleChange = {this.handleChange}/>
        {/* We must need to add that handle functio into the above before the render function */}
        <CardList monstersNew={filteredMonsterNew}/>
      </div>
    );
  }
}
export default App;
