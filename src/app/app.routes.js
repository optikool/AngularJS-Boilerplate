import { applyMiddleware, createStore, combineReducers } from 'redux';
import CollectionMiddleware from './store/middleware';
import combinedReducers from './store';

//const reducer = combineReducers(reducers);
const store = createStore(combinedReducers);

export default function routes($urlRouterProvider, $locationProvider, $ngReduxProvider) {
    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode(true);
    $ngReduxProvider.provideStore(store);
    //$ngReduxProvider.createStoreWith(RootReducer, applyMiddleware(CollectionMiddleware));
}

routes.$inject = ['$urlRouterProvider', '$locationProvider', '$ngReduxProvider'];