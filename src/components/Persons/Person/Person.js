import React, {Component} from 'react';
import Aux from "../../../hoc/Auxiliary";
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {
    render(){
         console.log("[Person.js] rendering...");
         return (
           //<div className={classes.Person}>
           <Aux>
             <p key="i1" onClick={this.props.click}>
               I'm {this.props.name} and I'm {this.props.age}
               years old!!!
             </p>
             <p key="i2"> {this.props.children} </p>
             <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
           </Aux>
         );
    }
    
};

export default withClass(Person, classes.Person);