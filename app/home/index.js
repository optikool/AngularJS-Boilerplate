import angular from 'angular';
import uirouter from 'angular-ui-router';

import './home.less';

import routes from './home.routes';
import HomeService from '../services/home.service'

export default angular.module('boilerplatePoc.home', [uirouter])
    .config(routes)
    .service('HomeService', HomeService)
    .name