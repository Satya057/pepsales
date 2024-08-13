import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onSave }) => {
    const [inputData, setInputData] = useState('');

    const handleSubmit = () => {
        onSave(inputData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Enter Transition Data</h2>
                <input
                    type="text"
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                />
                <button onClick={handleSubmit}>Save</button>
            </div>
        </div>
    );
};

export default Modal;
