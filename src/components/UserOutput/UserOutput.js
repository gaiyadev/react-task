import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>this is paragraph one by  {props.username} </p>
            <p>this is paragraph two</p>
        </div>
    );
}

export default UserOutput;