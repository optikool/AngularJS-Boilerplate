import * as CollectionActions from '../../store/collections/collection.actions';

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
        // this.$ngRedux.subscribe(() => {
        //     console.log('this.$ngRedux.getState(): ', this.$ngRedux.getState());
        //     console.log('this.$ngRedux.getState() 2: ', this.$ngRedux.getState('randomCollection'));
        //     this.imagePlaceHolder = this.$ngRedux.getState();
        // });
        this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis, CollectionActions)(this);
    }

    $onInit() {
        //this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis, CollectionActions)(this);
        this.getRandomImage();
        //const collectionList = this.fetchCollectionList();
        this.introText = this.locale.IntroText; <<
        <<
        <<
        <
        HEAD
        this.imagePlaceHolder = this.fetchRandomCollection();
        // ngRedux.dispatch(actionFactory().addItem('111111111111111'));
        console.log('CollectionActions: ', CollectionActions); ===
        ===
        =

        //console.log('collectionList: ', collectionList);
        >>>
        >>>
        >
        64 c93420a35f101c424f3300a862d4afb06579d9
        console.log('HomeController imagePlaceHolder: ', this.imagePlaceHolder);
        this.$ngRedux.dispatch({ type: CollectionActions.GET_RANDOM_COLLECTION });
        //console.log('HomeController getState: ', this.$ngRedux.fetchRandomCollection());
        <<
        <<
        <<
        <
        HEAD


            ===
            ===
            =
            //this.$ngRedux.dispatch(this.fetchRandomCollection());

            // .then((data) => {
            //     console.log('The data received was: ', data);
            // });
            >>>
            >>>
            >
            64 c93420a35f101c424f3300a862d4afb06579d9
    }

    $onDestroy() {
        this.unsubscribe();
    }

    mapStateToThis(state) {
        console.log('HomeController mapStateToThis state: ', state);
        // const { CollectionReducer } = state;
        console.log('HomeController mapStateToThis CollectionReducer: ', state.CollectionsReducer);
        return {
            collectionList: state.CollectionsReducer.collectionList,
            randomCollection: state.CollectionsReducer.randomCollection
        };
    }

    getRandomImage() {
        this.httpService.getImageCollection()
            .then(result => { <<
                <<
                <<
                <
                HEAD
                const idx = this.homeService.getRandomNumber(result.data.length);
                this.$ngRedux.dispatch(this.fetchCollectionList(result.data));
                this.imagePlaceHolder = result.data[idx]; ===
                ===
                =
                // const idx = this.homeService.getRandomNumber(result.data.length);
                console.log('getRandomImage: ', result.data);
                this.$ngRedux.dispatch({ type: CollectionActions.SET_COLLECTIONS, payload: result.data });
                this.imagePlaceHolder = this.fetchRandomCollection();
                console.log('HomeController imagePlaceHolder: ', this.imagePlaceHolder);
                // this.imagePlaceHolder =  result.data[idx];
                >>>
                >>>
                >
                64 c93420a35f101c424f3300a862d4afb06579d9
            }, error => {
                console.log('Error occured: ', error);
            });
    }
}

HomeController.$inject = ['LOCALE', 'homeService', 'navbarService', 'httpService', '$ngRedux'];

export default HomeController;