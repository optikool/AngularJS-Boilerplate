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

import navBar from './common/header/nav-bar';

export default angular.module('boilerplatePoc', [uirouter, home, instructions, navBar])
    .config(routes);