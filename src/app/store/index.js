import { combineReducers } from 'redux';
import { CollectionsReducer } from './collections/collections.reducer';

console.log('CollectionsReducer typeof: ', typeof CollectionsReducer);
const CombinedReducers = combineReducers({
    CollectionsReducer
});

export default CombinedReducers;
