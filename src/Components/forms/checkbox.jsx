import React from 'react';

const CheckBox = (props) => {
    const {
        name,
        onChange,
        checked,
    } = props;

    return (
        <div className="">

        <input
            type="checkbox"

            name={name}
            id="taskUrgent"
            //checked={ checked }
            onChange={onChange}

        />
        <label className=''>
            Urgent?
        </label>

    </div>
    )




}
export default CheckBox;