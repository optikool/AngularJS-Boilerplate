import CollectionActions from '../../store/collections/collection.actions';

class HomeController {
    constructor(LOCALE, homeService, navbarService, httpService, $ngRedux) {
        'ngInject';

        this.navbarService = navbarService;
        this.homeService = homeService;
        this.httpService = httpService;
        this.introText = null;
        this.imagePlaceHolder = null;
        this.locale = LOCALE;
        this.images = [];
        this.unsubscribe = $ngRedux.connect(this.mapStateToThis, CollectionActions)(this);
    }

    $onInit() {
        this.introText = this.locale.IntroText;
        this.imagePlaceHolder = this.getRandomImage();
    }

    $onDestroy() {
        this.unsubscribe();
    }

    mapStateToThis(state) {
        console.log('HomeController mapStateToThis state: ', state);
        return {
            collectionList: state.collectionList
        };
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

HomeController.$inject = ['LOCALE', 'homeService', 'navbarService', 'httpService', '$ngRedux'];

export default HomeController;