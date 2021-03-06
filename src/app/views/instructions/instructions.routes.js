import controller from './instructions.controller';
import template from './instructions.html';

export default function routes($stateProvider) {
    $stateProvider
        .state('Instructions', {
            url: '/instructions',
            template,
            controller,
            controllerAs: 'vm'
        });
}

routes.$inject = ['$stateProvider'];