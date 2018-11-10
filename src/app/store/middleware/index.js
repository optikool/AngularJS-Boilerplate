import angular from 'angular';
import collectionMiddleware from './collection.middleware';

export default angular.module('boilerplatePoc.middleware', [])
    .factory('collectionMiddleware', collectionMiddleware)
    .name;