import angular from 'angular';
import uirouter from 'angular-ui-router';

import './instructions.less';

import routes from './instructions.routes';
// import HomeService from './home.service'

export default angular.module('boilerplatePoc.instructions', [uirouter])
    .config(routes)
    //.component('imageCollection', imageCollection)
    // .service('HomeService', HomeService)
    .name