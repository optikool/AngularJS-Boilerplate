import { combineReducers } from 'redux';
import { CollectionsReducer } from './collections.reducer';

const CombinedReducers = combineReducers({
    CollectionsReducer
});

export default CombinedReducers;