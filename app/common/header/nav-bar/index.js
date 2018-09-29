import angular from 'angular';
import component from './nav-bar.component';

import './nav-bar.less';

export default angular.module('navBar', [])
    .component('navBar', component)
    .name