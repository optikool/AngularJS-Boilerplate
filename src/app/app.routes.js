export default function routes($urlRouterProvider, $locationProvider, $ngReduxProvider) {
    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode(true);
    $ngReduxProvider.createStoreWith(RootReducer);
}

routes.$inject = ['$urlRouterProvider', '$locationProvider', '$ngReduxProvider'];