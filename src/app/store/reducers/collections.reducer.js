import * as CollectionActions from '../collections/collection.actions';

const initialState = {
    collections: [],
    randomCollection: null,
    previewCollection: null
};

export function CollectionsReducer(state = initialState, action = {}) {
    switch (action.type) {
        case CollectionActions.GET_COLLECTIONS:
            return Object.assign({}, state, {
                collections: action.payload
            });
        case CollectionActions.GET_RANDOM_COLLECTION:
            const idx = Math.floor(Math.random() * Math.floor(action.payload.length));

            return Object.assign({}, state, {
                randomCollection: action.payload[idx]
            });
        case CollectionActions.SET_COLLECTIONS:
            return Object.assign({}, state, {
                collections: [action.payload]
            });
        default:
            return state;
    }
}