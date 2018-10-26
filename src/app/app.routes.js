import { applyMiddleware, createStore, combineReducers } from 'redux';
// import CollectionMiddleware from './store/middleware';
import CollectionMiddleware from './store/middleware/collection.middleware';
import CombinedReducers from './store/reducers';

// const reducer = combineReducers(reducers);
const store = createStore(CombinedReducers, CollectionMiddleware);

export default function routes($urlRouterProvider, $locationProvider, $ngReduxProvider) {
    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode(true);
    $ngReduxProvider.provideStore(store);
    // $ngReduxProvider.createStoreWith(CombinedReducers);
    // applyMiddleware(CollectionMiddleware)
}

routes.$inject = ['$urlRouterProvider', '$locationProvider', '$ngReduxProvider'];