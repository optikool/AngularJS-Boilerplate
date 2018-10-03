import angular from 'angular';
import uirouter from 'angular-ui-router';

import './home.scss';

import routes from './home.routes';

export default angular.module('boilerplatePoc.home', [uirouter])
    .config(routes)
    .name