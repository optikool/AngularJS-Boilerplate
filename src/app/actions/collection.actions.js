import IMAGE_CONSTANTS from '../constants/collection.constant';
import collectionMiddleware from '../middleware/collection.middleware';

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
    return collectionMiddleware()
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

function fetchCollectionList(collection) {
    console.log('fetchCollectionList collection: ', collection);
    return {
        type: IMAGE_CONSTANTS.GET_IMAGES,
        payload: collection
    }
}

function fetchRandomCollection() {
    //console.log('fetchRandomCollection image: ', image);
    return {
        type: IMAGE_CONSTANTS.GET_RANDOM_IMAGE,
        payload: collectionMiddleware()
    }
}

export { fetchCollectionList, fetchRandomCollection };
