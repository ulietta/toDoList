import React from 'react';

const TextInput = (props) => {

    const {
        label,
        name,
        onBlur,
        value,
        placeholder,
    } = props;

    return (
        <div className='textarea-wrapper'>
            <label htmlFor = "taskName">{label}</label>
            <input
                id="taskName"
                //value = {value}
                placeholder= {placeholder}
                name={name}
                onBlur={  onBlur }
            />
        </div>
    )
}
export default TextInput;