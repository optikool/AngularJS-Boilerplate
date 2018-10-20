export function CollectionMiddleware($http) {
  return (store) => {
    console.log('CollectionMiddleware store: ', store);
    //console.log('CollectionMiddleware getState: ', getState());
    return (next) => {
      console.log('CollectionMiddleware next: ', next);
      return (action) => {
        console.log('CollectionMiddleware action: ', action);
        // if (typeof action === 'function') {
        //   console.log('action is a function');
        //   return action(dispatch, getState);
        // }
        let result = [{
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
        }];
        action.payload = {
          collections: result
        };

        return next(action);
      }
    }
  }
}

CollectionMiddleware.$inject = ['$http'];

