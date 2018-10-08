import { IMAGE_CONSTANTS } from '../constants/collection.constant';

export default function CollectionList($http) {
    function fetchCollectionList() {
        return (dispatch, getState) => {
            return fetchList(dispatch, setImageList);
        }
    }

    function fetchRandomCollection() {
        return fetchList(dispatch, setRandomImage);
        // return (dispatch, getState) => {
        //     return $http({
        //         method: 'GET',
        //         url: SOME_URL
        //     })
        //     .then(products => dispatch(
        //         setProductsList(products)
        //     ))
        //     .catch(() => {
        //         // error handling
        //     });
        // }
    }
}

CollectionList.$inject = ['$http'];

function fetchList(dispatch, fn) {
    return $http({
            method: 'GET',
            url: SOME_URL,
            cache: false
        })
        .then(products => dispatch(
            fn(products)
        ))
        .catch((error) => {
            console.log('Error occurred: ', setRandomImage);
            // error handling
        });
}

function setImageList(collectionList) {
    return {
        type: IMAGE_CONSTANTS.GET_IMAGES,
        payload: collectionList
    }
}

function setRandomImage(collection) {
    return {
        type: IMAGE_CONSTANTS.GET_RANDOM_IMAGE,
        payload: collection
    };
}