import * as CollectionActions from '../../store/collections/collection.actions';

class InstructionsController {
    constructor(LOCALE, httpService, $ngRedux) {
        'ngInject';

        this.httpService = httpService;
        this.images = [];
        this.locale = LOCALE;
        this.$ngRedux = $ngRedux;
        this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis, CollectionActions)(this);
    }

    mapStateToThis(state) {
        return {
            images: state.CollectionsReducer.collections
        };
    }

    $onInit() {
        this.$ngRedux.dispatch(CollectionActions.fetchCollectionList());
    }

    $onDesroy() {
        this.unsubscribe();
    }
}

InstructionsController.$inject = ['LOCALE', 'httpService', '$ngRedux'];

export default InstructionsController;