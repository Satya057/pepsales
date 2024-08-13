const initialState = {
    blocks: [
        { id: '1', title: 'Task 1', description: 'Description 1', stage: 'To Do', history: [] },
        { id: '2', title: 'Task 2', description: 'Description 2', stage: 'In Progress', history: [] },
        { id: '3', title: 'Task 3', description: 'Description 3', stage: 'Done', history: [] },
    ],
    lanes: ['To Do', 'In Progress', 'Done'],
    filters: {}
};

const blockReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BLOCK':
            return {
                ...state,
                blocks: [...state.blocks, action.payload]
            };
        case 'MOVE_BLOCK':
            return {
                ...state,
                blocks: state.blocks.map(block =>
                    block.id === action.payload.id
                        ? { ...block, stage: action.payload.stage, history: [...block.history, `Moved to ${action.payload.stage}`] }
                        : block
                )
            };
        case 'SET_FILTER':
            return {
                ...state,
                filters: action.payload
            };
        default:
            return state;
    }
};

export default blockReducer;
