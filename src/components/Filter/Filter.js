import React from 'react';
import '../Form/form.css';

const Filter = ({value, onChange}) => (
    <label className='form_label'>
        Filter by name
        <input
            type="text"
            name="filter" 
            value={value}
            onChange={onChange}
            className='input_field'
        />
    </label>
);

export default Filter;