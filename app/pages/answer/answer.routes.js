import controller from './answer.controller';
import template from './answer.html';

export default function routes($stateProvider) {
    $stateProvider
        .state('Answer', {
            url: '/answer',
            template,
            controller,
            controllerAs: 'vm'
        })
}

routes.$inject = ['$stateProvider'];