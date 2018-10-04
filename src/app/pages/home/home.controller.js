class HomeController {
    constructor(LOCALE, homeService, navbarService, httpService) {
        'ngInject';

        this.navbarService = navbarService;
        this.homeService = homeService;
        this.httpService = httpService;
        this.introText = null;
        this.imagePlaceHolder = null;
        this.locale = LOCALE;
        this.images = [];
    }

    $onInit() {
        this.introText = this.locale.IntroText;
        this.getRandomImage();
    }

    getRandomImage() {
        this.httpService.getImageCollection()
            .then(result => {
                const idx = this.homeService.getRandomNumber(result.data.length);
                this.imagePlaceHolder = result.data[idx];
            }, error => {
                console.log('Error occured: ', error);
            });
    }
}

HomeController.$inject = ['LOCALE', 'homeService', 'navbarService', 'httpService'];

export default HomeController;