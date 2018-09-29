import angular from 'angular';
import uirouter from 'angular-ui-router';

import './home.less';

import routes from './home.routes';
import HomeService from './home.service'

export default angular.module('boilerplatePoc.home', [uirouter])
    .config(routes)
    //.component('imageCollection', imageCollection)
    .service('HomeService', HomeService)
    .name