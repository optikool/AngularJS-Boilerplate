class HeaderBarController {
    constructor(navbarService, LOCALE) {
        'ngInject';

        this.navbarService = navbarService;
        this.locale = LOCALE;
    }

    isActive(state) {
        return this.navbarService.isActive(state);
    }

    $onInit() {

    }
}

HeaderBarController.$inject = ['navbarService', 'LOCALE'];

export default HeaderBarController;