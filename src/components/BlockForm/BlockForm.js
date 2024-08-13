// src/components/BlockForm/BlockForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBlock } from '../../redux/actions/blockActions';
import './BlockForm.css';

const BlockForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [stage, setStage] = useState('To Do');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlock = {
            id: Date.now().toString(),
            title,
            description,
            stage,
            history: []
        };
        dispatch(addBlock(newBlock));
        setTitle('');
        setDescription('');
    };

    return (
        <form className="block-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Enter Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Enter Description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                required 
            />
            <select value={stage} onChange={(e) => setStage(e.target.value)}>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>
            <button type="submit">Add Block</button>
        </form>
    );
};

export default BlockForm;
