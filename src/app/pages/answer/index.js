import angular from 'angular';
import uirouter from 'angular-ui-router';

import './answer.scss';

import routes from './answer.routes';

export default angular.module('boilerplatePoc.answer', [uirouter])
    .config(routes)
    .name;