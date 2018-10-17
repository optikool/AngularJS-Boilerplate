import { combineReducers } from 'redux';
import { CollectionsReducer } from './collections/collections.reducer';

export const RootReducer = combineReducers({
    collections: CollectionsReducer
});