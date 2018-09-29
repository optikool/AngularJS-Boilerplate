export default class NavbarService {
    constructor($state) {
        this.state = $state;
        this.currState = null;
    }

    isActive(state) {
        console.log('isActive this.state: ', this.state);
        console.log('isActive state: ', state);
        console.log('isActive this.state get: ', this.state.current.name);
        return true;
    }

    getActive() {
        return this.state.current.name;
    }

    $onInit() {
        this.currState = this.state.current.name;
        console.log('onInit this.currState: ', this.currState);
    }
}

NavbarService.$inject = ['$state'];