import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monstersNew : [
        // {
        //   name: 'ABCD',
        //   id : '1'
        // },

        // {
        //   name: 'SJI',
        //   id: '2'
        // },

        // {
        //   name: 'SYLHET',
        //   id: '3'
        // }
      ]
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
        
        { 
        this.state.monstersNew.map(
          monstersNew =>
           <h1 key={ monstersNew.id }>
             { monstersNew.name }
           </h1>
        )
        }

      </div>
    );
  }
}
export default App;
