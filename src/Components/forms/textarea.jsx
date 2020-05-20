import React from 'react';
import './textarea.css'

const TextArea = (prop) => {

    const {
        placeholder,
        label,
        onBlur,
        name
    } = prop;

    return (
        <div className='textarea-wrapper'>
            <label htmlFor = "taskDescription" >{label}</label>
            <textarea
                id="taskDescription"
               placeholder={placeholder}
               onBlur={ onBlur }
               name = {name}
            />
        </div>
    )
}
export default TextArea;