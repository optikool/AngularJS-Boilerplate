import { IMAGE_CONSTANTS } from '../../constants/collection.constant';

const initialState = [];

export default function CollectionsReducer(state = initialState, action = {}) {
    switch (action.type) {
        case IMAGE_CONSTANTS.GET_IMAGES:
            console.log('CollectionsReducer get image state: ', state);
            console.log('CollectionsReducer get image action: ', action);
            return [
                ...state,
                action.payload
            ];
        case IMAGE_CONSTANTS.GET_RANDOM_IMAGE:
            console.log('CollectionsReducer get random image state: ', state);
            console.log('CollectionsReducer get random image action: ', action);
            return [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ];
        default:
            console.log('CollectionsReducer default state: ', state);
            console.log('CollectionsReducer default action: ', action);
            return state;
    }
}