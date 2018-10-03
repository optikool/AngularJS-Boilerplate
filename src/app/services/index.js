import angular from 'angular';

import NavbarService from './navbar-service.service';
import HomeService from './home.service';
import HttpService from './http.service';

export default angular.module('boilerplatePoc.services', [])
    .service('homeService', HomeService)
    .service('navbarService', NavbarService)
    .service('httpService', HttpService)
    .name