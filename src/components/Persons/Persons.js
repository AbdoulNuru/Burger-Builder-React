import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  /*static getDerivedStateFromProps(props, state){
        console.log("[persons.js] getDerivedStateFromProps");
        return state;
    }*/

  /*componentWillReceiveProps(props){
        console.log("[persons.js] componentWillReceiveProps");
    }*/

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    if(nextProps.persons !== this.props.persons){
      return true;
    }else{
      return false;
    } 
  }

  getSnapshotBeforeUpdate(prevProps, nextProps) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "Snap!" }; 
  }

  /*componentWillUpdate(){
        console.log("[Persons.js] componentWillUpdate");
    }*/

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.js] rendering");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
};
  export default Persons;