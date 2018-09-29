class FooterBarController {
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

FooterBarController.$inject = ['$state', 'navbarService'];

export default FooterBarController;