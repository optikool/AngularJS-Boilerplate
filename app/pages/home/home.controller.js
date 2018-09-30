class HomeController {
    constructor(LOCALE) {
        'ngInject';

        this.introText = null;
        this.imagePlaceHolder = null;
        this.locale = LOCALE;
    }

    $onInit() {
        this.introText = this.locale.IntroText;
        this.imagePlaceHolder = this.locale.ImagePlaceHolder;
    }
}

HomeController.$inject = ['LOCALE'];

export default HomeController;