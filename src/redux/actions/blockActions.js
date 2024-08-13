// src/redux/actions/blockActions.js

export const addBlock = (block) => {
    return {
        type: 'ADD_BLOCK',
        payload: block
    };
};

export const moveBlock = (id, stage) => {
    return {
        type: 'MOVE_BLOCK',
        payload: { id, stage }
    };
};

export const setFilter = (filter) => {
    return {
        type: 'SET_FILTER',
        payload: filter
    };
};
