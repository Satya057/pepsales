import React from 'react';
import { useDispatch } from 'react-redux';
import './Filter.css';

const Filter = () => {
    const dispatch = useDispatch();

    const handleFilterChange = (e) => {
        dispatch({
            type: 'SET_FILTER',
            payload: { [e.target.name]: e.target.value }
        });
    };

    return (
        <div className="filter">
            <label htmlFor="status">Filter by Status: </label>
            <select name="status" onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>
        </div>
    );
};

export default Filter;
