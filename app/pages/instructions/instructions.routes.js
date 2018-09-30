routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('Instructions', {
            url: '/instructions',
            template: require('./instructions.html')
        });
}