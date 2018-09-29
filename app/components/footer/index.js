import angular from 'angular';
import component from './footer-bar.component';

import './footer-bar.less';

export default angular.module('footer-bar', [])
    .component('FooterBar', component)
    .name;