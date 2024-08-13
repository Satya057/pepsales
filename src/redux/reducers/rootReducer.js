import { combineReducers } from 'redux';
import blocksReducer from './blocksReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
    blocks: blocksReducer,
    filter: filterReducer
});

export default rootReducer;
