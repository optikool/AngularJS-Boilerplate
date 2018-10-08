import { combineReducers } from 'redux';
import { CollectionsReducer } from './collections.reducer';

export const RootReducer = combineReducers({
    collections: CollectionsReducer
});