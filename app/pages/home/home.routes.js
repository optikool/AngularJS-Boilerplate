import HomeController from './home.controller';

export default function routes($stateProvider) {
    $stateProvider
        .state('Home', {
            url: '/home',
            template: require('./home.html'),
            controller: HomeController,
            controllerAs: 'vm'
        });
}

routes.$inject = ['$stateProvider'];