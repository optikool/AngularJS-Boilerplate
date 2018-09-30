class FooterBarController {
    constructor(navbarService, LOCALE) {
        'ngInject';

        this.navbarService = navbarService;
        this.copyYear = null;
        this.locale = LOCALE;
    }

    isActive(state) {
        return this.navbarService.isActive(state);
    }

    $onInit() {
        let date = new Date();
        this.copyYear = date.getFullYear();
    }
}

FooterBarController.$inject = ['navbarService', 'LOCALE'];

export default FooterBarController;