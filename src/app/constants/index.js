import angular from 'angular';

import locale from './locale.constant';
import collection from './collection.constant';

export default angular.module('boilerplatePoc.constants', [])
    .constant('LOCALE', locale)
    .constant('IMAGE_CONSTANTS', collection)
    .name;