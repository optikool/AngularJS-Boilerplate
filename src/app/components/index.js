import angular from 'angular';

import HeaderBar from './header/header-bar.component';
import FooterBar from './footer/footer-bar.component';

export default angular.module('boilerplatePoc.components', [])
    .component('headerBar', HeaderBar)
    .component('footerBar', FooterBar)
    .name;