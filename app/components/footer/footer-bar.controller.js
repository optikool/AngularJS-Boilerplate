class FooterBarController {
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

FooterBarController.$inject = ['navbarService'];

export default FooterBarController;