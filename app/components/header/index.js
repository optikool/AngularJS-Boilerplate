import angular from 'angular';
import component from './header-bar.component';

import './header-bar.less';

export default angular.module('header-bar', [])
    .component('HeaderBar', component)
    .name;