import { applyMiddleware } from 'redux';
import CollectionMiddleware from './store/middleware';
import RootReducer from './store';

export default function routes($urlRouterProvider, $locationProvider, $ngReduxProvider) {
    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode(true);
    $ngReduxProvider.createStoreWith(RootReducer, applyMiddleware(CollectionMiddleware));
}

routes.$inject = ['$urlRouterProvider', '$locationProvider', '$ngReduxProvider'];