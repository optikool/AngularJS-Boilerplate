import angular from 'angular';
import uirouter from 'angular-ui-router';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'jquery';
import 'popper.js';
import 'bootstrap';

// import 'css/custom.scss';

import routes from './app.routes';
import home from './home'
import instructions from './instructions';

// import headerBar from './common/header';
// import footerBar from './common/footer';

import componentModule from './components';
import servicesModule from './services';

export default angular.module('boilerplatePoc', [
        uirouter,
        home,
        instructions,
        componentModule,
        servicesModule
    ])
    .config(routes);