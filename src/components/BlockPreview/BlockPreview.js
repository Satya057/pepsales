import React from 'react';
import './BlockPreview.css';

const BlockPreview = ({ block }) => {
    if (!block) return null;

    return (
        <div className="block-preview">
            <h3>{block.title}</h3>
            <p>{block.description}</p>
            <h4>History</h4>
            <ul>
                {block.history.map((entry, index) => (
                    <li key={index}>{entry}</li>
                ))}
            </ul>
        </div>
    );
};

export default BlockPreview;
