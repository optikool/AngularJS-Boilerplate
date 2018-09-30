export default class NavbarService {
    constructor($state) {
        this.state = $state;
        this.currState = null;
    }

    isActive(state) {
        return this.state.current.name === state;
    }

    getActive() {
        return this.state.current.name;
    }
}

NavbarService.$inject = ['$state'];