import React, { useState, Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{

  state = {
  persons: [
    { name: "Max", age: 28 },
    { name: "Manu", age: 29 },
    { name: "Stephanie", age: 26 }
  ]
};

switchNameHandler = () => {
  this.setState({
    persons: [
      { name: "Maximilian", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 27 }
    ],
    otherstate: "some other value"
  });
};
  render() {
    return (
      <div className="App">
        <h1>Hi am Abdoul</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          My hobbies: Coding
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Woow am learning react'));
  }
}

export default App;
