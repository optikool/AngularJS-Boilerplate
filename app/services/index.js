import angular from 'angular';

import NavbarService from './navbar-service.service';
import HomeService from './home.service';

export default angular.module('boilerplatePoc.services', [])
    .service('navbarService', NavbarService)
    .service('homeService', HomeService)
    .name