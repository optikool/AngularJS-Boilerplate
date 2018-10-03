import angular from 'angular';

import locale from './locale.constant';

export default angular.module('boilerplatePoc.constants', [])
    .constant('LOCALE', locale)
    .name;