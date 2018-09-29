class HeaderBarController {
    constructor($state, navbarService) {
        'ngInject';

        this.navbarService = navbarService;
        this.state = $state;
    }

    isActive(state) {
        return this.state.current.name === state;
    }

    $onInit() {

    }
}

HeaderBarController.$inject = ['$state', 'navbarService'];

export default HeaderBarController;