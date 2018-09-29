routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('Home', {
            url: '/home',
            template: require('./home.html'),
            resolve: {
                imageCollection: ['HomeService', (HomeService) => {
                    return HomeService.getImageCollection()
                }]
            }
        });
}