import { IMAGE_CONSTANTS } from '../../constants/collection.constant';

export const GET_COLLECTIONS = 'GET_COLLECTIONS';
export const GET_RANDOM_COLLECTION = 'GET_RANDOM_COLLECTION';
export const SET_COLLECTIONS = 'SET_COLLECTIONS';
// export default function CollectionList($http) {
//     function fetchCollectionList() {
//         return (dispatch, getState) => {
//             return fetchList(dispatch, setImageList);
//         }
//     }

//     function fetchRandomCollection() {
//         return fetchList(dispatch, setRandomImage);
//         // return (dispatch, getState) => {
//         //     return $http({
//         //         method: 'GET',
//         //         url: SOME_URL
//         //     })
//         //     .then(products => dispatch(
//         //         setProductsList(products)
//         //     ))
//         //     .catch(() => {
//         //         // error handling
//         //     });
//         // }
//     }
// }

// CollectionList.$inject = ['$http'];

function fetchList() {
    // return collectionMiddleware()
    return $http({
            method: 'GET',
            url: SOME_URL,
            cache: false
        })
        .then((products) => {
            return products;
        })
        .catch((error) => {
            console.log('Error occurred: ', setRandomImage);
            return {};
            // error handling
        });
}

// function fetchCollectionList() {
//     return (dispatch, getState) => {
//         return fetchList(dispatch, setImageList);
//     }
// }

// function fetchRandomCollection() {
//     return (dispatch, getState) => {
//         return fetchList(dispatch, setRandomImage);
//     }
// }

export function fetchCollectionList() {
    return {
        type: GET_COLLECTIONS,
        // payload: collection
    }
}

export function fetchRandomCollection() {
    //console.log('fetchRandomCollection image: ', image);
    return {
        type: GET_RANDOM_COLLECTION,
        // payload: collectionMiddleware()
    }
}

export function setCollectionList(data) {
    return {
        type: SET_COLLECTIONS,
        payload: data
    }
}

// export { fetchCollectionList, fetchRandomCollection };