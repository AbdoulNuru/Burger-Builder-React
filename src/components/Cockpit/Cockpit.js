import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  useEffect(() => {
    console.log('[cockpit.js] useEffect');
    // Http request...
    setTimeout(() => {
      alert('saved data');
    }, 1000);
  }, []);

    const styleClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }
    
    if (props.persons.length <= 2) {
      styleClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
      styleClasses.push(classes.bold);
    }

    return (
      <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={styleClasses.join(" ")}>Beginning the react course</p>
        <button className={btnClass} onClick={props.clicked}>
          Toggle persons
        </button>
      </div>
    );
};

export default cockpit;