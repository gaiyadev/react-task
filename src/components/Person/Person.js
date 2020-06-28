import React from 'react';

const person = (props) => {
    return (
        <div>
            <input type="text" value={props.Name} name="name" onChange={props.changeName} />
            <input type="checkbox" name="check" onClick={props.checked} />
            <p onClick={props.click} >My name is {props.name} and am from {props.age}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;