export default function collectionMiddleware(httpService, COLLECTION_TYPES) {
  return () => next => action => {
    switch (action.type) {
      case COLLECTION_TYPES.GET_COLLECTIONS:
        return httpService.getImageCollection()
          .then(result => {
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
      default:
          next(action);
          break;
    }  
  }
}

collectionMiddleware.$inject = ['httpService', 'COLLECTION_TYPES'];

