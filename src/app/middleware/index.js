import angular from 'angular';
import CollectionMiddleware from './collection.middleware';

export default angular.module('boilerplatePoc.factories', [])
    .factory('collectionMiddleware', CollectionMiddleware)
    .name;