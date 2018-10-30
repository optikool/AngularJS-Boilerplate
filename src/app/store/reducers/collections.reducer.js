import * as CollectionActions from '../collections/collection.actions';

const initialState = {
    collections: [{
        "name": "image 1",
        "link": "/images/image_01.jpg",
        "descriptions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec."
      }, {
        "name": "image 2",
        "link": "/images/image_02.jpg",
        "descriptions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec."
      }, {
        "name": "image 3",
        "link": "/images/image_03.jpg",
        "descriptions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec."
      }],
    randomCollection: null,
    previewCollection: null
};

export function CollectionsReducer(state = initialState, action = {}) {
    switch (action.type) {
        case CollectionActions.GET_COLLECTIONS:
            console.log('CollectionsReducer GET_COLLECTIONS state: ', state);
            console.log('CollectionsReducer GET_COLLECTIONS action: ', action);
            return state;
        case CollectionActions.GET_RANDOM_COLLECTION:
            console.log('CollectionsReducer GET_RANDOM_COLLECTION state: ', state);
            console.log('CollectionsReducer GET_RANDOM_COLLECTION action: ', action);
            const idx = Math.floor(Math.random() * Math.floor(state.collections.length));

            return Object.assign({}, state, {
                randomCollection: state.collections[idx]
            });
        case CollectionActions.SET_COLLECTIONS:
            console.log('CollectionsReducer SET_COLLECTIONS state: ', state);
            console.log('CollectionsReducer SET_COLLECTIONS action: ', action);
            return Object.assign({}, state, {
                collections: action.payload
            });
        default:
            console.log('CollectionsReducer default state: ', state);
            console.log('CollectionsReducer default action: ', action);
            return state;
    }
}