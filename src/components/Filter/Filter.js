import { nanoid } from 'nanoid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';
import '../Form/form.css';

const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    const searchContactId = nanoid();

    const filterInput = (evt) => {
        const { value } = evt.target;
        dispatch(setFilter(value));
    }

    return (
        <label className='form_label'>
            Filter by name
            <input
                type="text"
                name="filter"
                value={filter}
                id={searchContactId}
                onChange={filterInput}
                className='input_field'
                placeholder='Search'
            />
        </label>
    )
};

export default Filter;