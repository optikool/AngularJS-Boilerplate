class HomeController {
    constructor(LOCALE) {
        'ngInject';

        this.locale = LOCALE;
    }

    $onInit() {

    }
}

HomeController.$inject = ['LOCALE'];

export default HomeController;