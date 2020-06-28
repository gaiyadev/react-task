import React from 'react';
const UserInput = (props) => {
    return (
        <div>
            <input value={props.currentValue}
                onChange={props.changed}
                type="text" name="input" />
        </div>
    );
}

export default UserInput;