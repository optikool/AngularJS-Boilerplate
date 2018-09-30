import angular from 'angular';
import uirouter from 'angular-ui-router';

import './instructions.less';

import routes from './instructions.routes';

export default angular.module('boilerplatePoc.instructions', [uirouter])
    .config(routes)
    .name