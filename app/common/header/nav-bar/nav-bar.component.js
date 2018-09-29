import template from './nav-bar.html';
import controller from './nav-bar.controller';

const component = {
    restrict: 'E',
    bindings: {
        //title: '@',
    },
    template,
    controller,
    controllerAs: 'vm',
};

export default component;