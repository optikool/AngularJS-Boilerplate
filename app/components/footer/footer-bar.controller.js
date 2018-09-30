class FooterBarController {
    constructor(navbarService) {
        'ngInject';

        this.navbarService = navbarService;
        this.copyYear = null;
    }

    isActive(state) {
        return this.navbarService.isActive(state);
    }

    $onInit() {
        let date = new Date();
        this.copyYear = date.getFullYear();
    }
}

FooterBarController.$inject = ['navbarService'];

export default FooterBarController;