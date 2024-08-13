import React from 'react';
import './Block.css';

const Block = ({ block }) => {
    const onDragStart = (e) => {
        e.dataTransfer.setData("blockId", block.id);
    };

    return (
        <div 
            className="block" 
            draggable 
            onDragStart={onDragStart}
        >
            <h4>{block.title}</h4>
            <p>{block.description}</p>
        </div>
    );
};

export default Block;
