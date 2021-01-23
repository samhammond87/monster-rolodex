import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component { //component is part of the react library. if we weren't importing above, we could write React.Component here
  constructor () {
    super();
// you can't modify state without calling 'setState'
    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  
componentDidMount() { //we have access to this because of importing component in react
  fetch('https://jsonplaceholder.typicode.com/users') // fetch is a promise
  .then(response => response.json()) //takes response and converts it into json
  .then(users => this.setState({ monsters: users })) //then we take our users that we got from fetch and set our monsters to users
}


render() {
  const { monsters, searchField } =  this.state // pull properties from the monsters and searchField values off of the state object and setting them to constants called monsters and searchField eqivalent of writing: const monsters = this.state.monsters; const searchField = this.state.searchField;
  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
  return (
    <div className="App">
      <input 
      type="search" 
      placeholder="search monsters" 
      onChange={e => 
        this.setState({ searchField: e.target.value })}
          //setState is asynchronous. If we want to see or do something with out state right after we set it, we have to do it inside the 2nd argument function that will get called right after setState          
      />
        
      <CardList monsters={filteredMonsters} 
      />     
    
    </div>
    )
  }
}

export default App;
