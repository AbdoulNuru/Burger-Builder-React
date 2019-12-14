import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi am Abdoul</h1>
        <Person name="Diouf" age="23" >My hobbies: Coding</Person>
        <Person name="Bwiza" age="24" />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Woow am learning react'));
  }
}

export default App;
