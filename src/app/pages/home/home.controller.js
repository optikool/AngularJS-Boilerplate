import * as CollectionActions from '../../actions/collection.actions';

class HomeController {
    constructor(LOCALE, homeService, navbarService, httpService, $ngRedux) {
        'ngInject';

        this.navbarService = navbarService;
        this.homeService = homeService;
        this.httpService = httpService;
        this.introText = null;
        this.imagePlaceHolder = '';
        this.locale = LOCALE;
        this.images = [];
        this.$ngRedux = $ngRedux;
        this.$ngRedux.subscribe(() => {
            console.log('this.$ngRedux.getState(): ', this.$ngRedux.getState());
        });
        this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis, CollectionActions)(this);
    }

    $onInit() {
        //this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis, CollectionActions)(this);
        this.getRandomImage();
        this.introText = this.locale.IntroText;
        this.imagePlaceHolder = this.fetchRandomCollection();
        console.log('CollectionActions: ', CollectionActions);
        console.log('HomeController imagePlaceHolder: ', this.imagePlaceHolder);
        console.log('HomeController this.unsubscribe: ', this.unsubscribe);
        //console.log('HomeController getState: ', this.$ngRedux.fetchRandomCollection());

        
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
                this.$ngRedux.dispatch(this.fetchCollectionList(result.data));
                this.imagePlaceHolder =  result.data[idx];
            }, error => {
                console.log('Error occured: ', error);
            });
    }
}

HomeController.$inject = ['LOCALE', 'homeService', 'navbarService', 'httpService', '$ngRedux'];

export default HomeController;