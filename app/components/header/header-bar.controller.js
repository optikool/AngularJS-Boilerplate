class HeaderBarController {
    constructor(navbarService) {
        'ngInject';

        this.navbarService = navbarService;
    }

    isActive(state) {
        return this.navbarService.isActive(state);
    }

    $onInit() {

    }
}

HeaderBarController.$inject = ['navbarService'];

export default HeaderBarController;