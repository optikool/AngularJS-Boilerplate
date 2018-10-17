export default function CollectionMiddleware($http) {
  return (dispatch, getState) => {
    console.log('CollectionMiddleware dispatch: ', dispatch);
    console.log('CollectionMiddleware getState: ', getState());
    return (next) => {
      console.log('CollectionMiddleware next: ', next);
      return (action) => {
        if (typeof action === 'function') {
          console.log('action is a function');
          return action(dispatch, getState);
        }

        return next(action);
      }
    }
  }
}

CollectionMiddleware.$inject = ['$http'];
