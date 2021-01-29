import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    // this.state = {
    //   string : 'Hello Sylhet'
    // };

    this.state = {
      monsters : [
        {
          name: 'ABCD',
          id : '1'
        },

        {
          name: 'SJI',
          id: '2'
        },

        {
          name: 'SYLHET',
          id: '3'
        }
      ]

    // monstersNew : [
    //   {
    //     color : 'RED',
    //     id : '23'
    //   },

    //   {
    //     color : 'Green',
    //     id : '33'
    //   }
    // ]
    
  }
}

  render(){
    return (
      <div className="App">
        
        { 
        this.state.monsters.map(
          monsters =>
           <h1 key={ monsters.id }>
             { monsters.name }
           </h1>
        )

        // this.state.monstersNew.map(
        //   monstersNew =>
        //   <h3 key={ monstersNew.id }>
        //   { monstersNew.name }
        //   </h3>
        // )
        }

      </div>
    );
  }
}
export default App;
