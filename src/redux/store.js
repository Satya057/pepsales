import { createStore, combineReducers } from 'redux';
import blockReducer from './reducers/blockReducer';

const rootReducer = combineReducers({
    blocks: blockReducer,
    // Add other reducers here if needed
});

const store = createStore(rootReducer);

export default store;
