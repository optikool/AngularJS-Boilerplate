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
        this.introText = this.locale.IntroText;

        this.imagePlaceHolderUnsubscribe = this.$ngRedux.subscribe(() => {
            this.$timeout(() =>{
                this.imagePlaceHolder = this.randomCollection;
            });
            
        });

        this.$ngRedux.dispatch(CollectionActions.fetchCollectionList());
    }

    $onDestroy() {
        this.unsubscribe();
        this.imagePlaceHolderUnsubscribe();
    }

    mapStateToThis(state, data) {
        return {
            randomCollection: state.CollectionsReducer.randomCollection
        };
    }

    hasImage(image) {
        return image && image !== '' && typeof image === 'string';
    }
}

HomeController.$inject = ['$timeout', 'LOCALE', 'homeService', 'navbarService', 'httpService', '$ngRedux'];

export default HomeController;