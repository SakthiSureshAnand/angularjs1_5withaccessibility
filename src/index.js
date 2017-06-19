import angular from 'angular';
import {ngAnimate} from 'angular-animate';
import {ngSanitize} from 'angular-sanitize';
import 'angular-translate';
import 'angular-translate-loader-static-files';
import 'angular-ui-bootstrap';
import 'angular-ui-router';
import 'angular-aria';
import routesConfig from './routes';

import {hello} from './app/hello';
import {test01} from './test01/app';
import {test02} from './test02/app';

import {dataService}  from './test01/postService';
 
import './index.scss';

export const app = 'app';

angular
  .module(app, ['ngAnimate', 'ngSanitize','ui.router', 'ui.bootstrap','pascalprecht.translate','ngAria'])
  .config(routesConfig)																																								
  .component('app', hello)
  .factory('dataService', dataService)
  .component('test01', test01)																																																								
  .component('test02', test02);
