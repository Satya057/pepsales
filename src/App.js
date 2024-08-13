import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Swimlane from './components/Swimlane/Swimlane';
import Modal from './components/Modal/Modal';
import Filter from './components/Filter/Filter';
import BlockPreview from './components/BlockPreview/BlockPreview';
import BlockForm from './components/BlockForm/BlockForm';
import './App.css';

function App() {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentBlock, setCurrentBlock] = useState(null);

    const openModal = (block) => {
        setCurrentBlock(block);
        setModalOpen(true);
    };

    const handleSave = (data) => {
        // Handle saving the transition data for the block
    };

    return (
        <Provider store={store}>
            <div className="App">
                <BlockForm />
                <Filter />
                <div className="swimlanes">
                    <Swimlane stage="To Do" openModal={openModal} />
                    <Swimlane stage="In Progress" openModal={openModal} />
                    <Swimlane stage="Done" openModal={openModal} />
                </div>
                <BlockPreview block={currentBlock} />
                <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSave={handleSave} />
            </div>
        </Provider>
    );
}

export default App;
