import * as CollectionActions from '../../store/collections/collection.actions';

class HomeController {
    constructor($timeout, LOCALE, homeService, navbarService, httpService, $ngRedux) {
        'ngInject';

        this.navbarService = navbarService;
        this.homeService = homeService;
        this.httpService = httpService;
        this.introText = null;
        this.imagePlaceHolder = '';
        this.locale = LOCALE;
        this.images = [];
        this.$timeout = $timeout;
        this.$ngRedux = $ngRedux;
        this.randomCollectionSubscription;
        this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis, CollectionActions)(this);
    }

    $onInit() {
        
        this.getRandomImage();

        this.introText = this.locale.IntroText;

        this.randomCollectionSubscription = this.$ngRedux.subscribe(() => {
            this.$timeout(() =>{
                this.imagePlaceHolder = this.randomCollection;
            });
            
        });

        this.$ngRedux.dispatch(new CollectionActions.fetchCollectionList());
        this.$ngRedux.dispatch(new CollectionActions.fetchRandomCollection());
    }

    $onDestroy() {
        this.unsubscribe();
        this.randomCollectionSubscription();
    }

    mapStateToThis(state) {
        console.log('HomeController mapStateToThis state: ', state);
        return {
            randomCollection: state.CollectionsReducer.randomCollection
        };
    }

    getRandomImage() {
        this.httpService.getImageCollection()
            .then(result => {
                this.$ngRedux.dispatch(new CollectionActions.setCollectionList(result.data));
            }, error => {
                console.log('Error occured: ', error);
            });
    }
}

HomeController.$inject = ['$timeout', 'LOCALE', 'homeService', 'navbarService', 'httpService', '$ngRedux'];

export default HomeController;