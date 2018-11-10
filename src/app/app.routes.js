import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import CombinedReducers from './store/reducers';

export default function routes($urlRouterProvider, $locationProvider, $ngReduxProvider) {
    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode(true);
    $ngReduxProvider.createStoreWith(CombinedReducers,  [thunk, createLogger(), 'collectionMiddleware']);
}

routes.$inject = ['$urlRouterProvider', '$locationProvider', '$ngReduxProvider'];