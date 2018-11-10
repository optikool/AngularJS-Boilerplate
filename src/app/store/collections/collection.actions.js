export const GET_COLLECTIONS = 'GET_COLLECTIONS';
export const GET_RANDOM_COLLECTION = 'GET_RANDOM_COLLECTION';
export const SET_COLLECTIONS = 'SET_COLLECTIONS';

export function fetchCollectionList() {
    return {
        type: GET_COLLECTIONS
    }
}

export function fetchRandomCollection() {
    return {
        type: GET_RANDOM_COLLECTION
    }
}

export function setCollectionList(data) {
    return {
        type: SET_COLLECTIONS,
        payload: data
    }
}

export default { fetchCollectionList, fetchRandomCollection, setCollectionList };