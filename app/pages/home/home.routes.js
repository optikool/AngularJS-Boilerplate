import HomeController from './home.controller';
import template from './home.html';

export default function routes($stateProvider) {
    $stateProvider
        .state('Home', {
            url: '/home',
            template,
            controller: HomeController,
            controllerAs: 'vm'
        });
}

routes.$inject = ['$stateProvider'];