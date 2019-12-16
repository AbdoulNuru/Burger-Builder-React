import React from 'react';

const validation = (props) => {
    let valMessage = 'Text long enough';

    if(props.inputLength <= 5){
        valMessage = 'Text too short';
    }

    return (
      <div>
        <p>{valMessage}</p>
      </div>
    );
};

export default validation;