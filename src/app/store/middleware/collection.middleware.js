import * as CollectionActions from '../collections/collection.actions';

export default function collectionMiddleware(httpService) {
  return (store) => next => action => {
    switch (action.type) {
      case CollectionActions.GET_COLLECTIONS:
        return httpService.getImageCollection()
          .then(result => {
            action.payload = result.data;

            next({
              payload: result.data,
              type: action.type
            });

            next({
              payload: result.data,
              type: 'GET_RANDOM_COLLECTION'
            });
          }, error => {
              console.log('Error occured: ', error);
            next([]);
          });
      case CollectionActions.GET_RANDOM_COLLECTION:
        console.log('collectionMiddleware GET_RANDOM_COLLECTION store getState: ', store.getState());
        console.log('collectionMiddleware GET_RANDOM_COLLECTION action: ', action);
      break;
    }  
  }
}

collectionMiddleware.$inject = ['httpService'];

