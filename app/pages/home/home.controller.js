class HomeController {
    constructor(LOCALE, homeService, navbarService) {
        'ngInject';

        this.navbarService = navbarService;
        this.homeHttpService = homeService;
        this.introText = null;
        this.imagePlaceHolder = null;
        this.locale = LOCALE;
        this.images = [];
    }

    $onInit() {
        this.introText = this.locale.IntroText;
        this.imagePlaceHolder = this.locale.ImagePlaceHolder;
    }
}

HomeController.$inject = ['LOCALE', 'homeService', 'navbarService'];

export default HomeController;