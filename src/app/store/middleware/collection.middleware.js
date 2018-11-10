export default function collectionMiddleware(httpService, COLLECTION_TYPES) {
  return (store) => next => action => {
    switch (action.type) {
      case COLLECTION_TYPES.GET_COLLECTIONS:
        return httpService.getImageCollection()
          .then(result => {
            action.payload = result.data;

            next({
              payload: result.data,
              type: action.type
            });

            next({
              payload: result.data,
              type: COLLECTION_TYPES.GET_RANDOM_COLLECTION
            });
          }, error => {
              console.log('Error occured: ', error);
            next([]);
          });
      case COLLECTION_TYPES.GET_RANDOM_COLLECTION:
        console.log('collectionMiddleware GET_RANDOM_COLLECTION store getState: ', store.getState());
        console.log('collectionMiddleware GET_RANDOM_COLLECTION action: ', action);
      break;
    }  
  }
}

collectionMiddleware.$inject = ['httpService', 'COLLECTION_TYPES'];

