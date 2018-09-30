import InstructionsController from './instructions.controller';

export default function routes($stateProvider) {
    $stateProvider
        .state('Instructions', {
            url: '/instructions',
            template: require('./instructions.html'),
            controller: InstructionsController,
            controllerAs: 'vm'
        });
}

routes.$inject = ['$stateProvider'];