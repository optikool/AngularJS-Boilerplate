import angular from 'angular';
import animate from 'angular-animate';
import bootstrap from 'angular-ui-bootstrap';
import uirouter from 'angular-ui-router';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'jquery';
import 'popper.js';
// import 'bootstrap';

// import 'css/custom.scss';

import routes from './app.routes';
import home from './pages/home'
import instructions from './pages/instructions';

import componentModule from './components';
import servicesModule from './services';

export default angular.module('boilerplatePoc', [
        uirouter,
        animate,
        bootstrap,
        home,
        instructions,
        componentModule,
        servicesModule
    ])
    .config(routes);