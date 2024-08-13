import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Block from './Block';
import './Swimlane.css';

const Swimlane = ({ stage, openModal }) => {
    const blocks = useSelector(state => state.blocks.blocks.filter(block => block.stage === stage));
    const dispatch = useDispatch();

    const onDrop = (e) => {
        e.preventDefault();
        const blockId = e.dataTransfer.getData("blockId");

        dispatch({
            type: 'MOVE_BLOCK',
            payload: { id: blockId, stage: stage }
        });

        const block = blocks.find(block => block.id === blockId);
        openModal(block);
    };

    const onDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div 
            className="swimlane" 
            onDrop={onDrop} 
            onDragOver={onDragOver}
        >
            <h3>{stage}</h3>
            {blocks.map(block => (
                <Block key={block.id} block={block} />
            ))}
        </div>
    );
};

export default Swimlane;
