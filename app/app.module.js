import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularSanitize from 'angular-sanitize';
import angularUiBootstrap from 'angular-ui-bootstrap';
import angularUiRouter from 'angular-ui-router';

import 'jquery';
import 'popper.js';

import './css/custom.less';

import routes from './app.routes';
import home from './pages/home'
import instructions from './pages/instructions';

import localeConstants from './constants';
import componentsModule from './components';
import directivesModule from './directives';
import filtersModule from './filters';
import servicesModule from './services';

export default angular.module('boilerplatePoc', [
        angularAnimate,
        angularSanitize,
        angularUiBootstrap,
        angularUiRouter,
        localeConstants,
        home,
        instructions,
        componentsModule,
        directivesModule,
        filtersModule,
        servicesModule
    ])
    .config(routes);