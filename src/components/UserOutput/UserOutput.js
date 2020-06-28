import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>Username: {props.username} </p>
            <p onClick={props.clicked} >this is paragraph two  </p>
        </div >
    );
}

export default UserOutput;