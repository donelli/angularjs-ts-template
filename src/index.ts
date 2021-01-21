
// Jquery
import 'jquery';

// Bootstrap 4
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js';

// AngularJS
import * as angular from 'angular';
import 'angular-route';

// Project imports
import './styles.css';
import { MyRouteCtrl } from './controller/myRouteCtrl';
import { CustomHttpService } from './service/customHttpService';

export const app = angular.module('app', [ 'ngRoute' ]);

app.config(['$routeProvider', function($routeProvider: angular.route.IRouteProvider) {
  
  $routeProvider

  .when('/myRoute', {
    templateUrl: './view/myRoute.html',
    controller: 'myRouteCtrl',
    controllerAs: "vm"
  })

  .otherwise({
    redirectTo: 'myRoute'
  })
  
}]);

app.controller('myRouteCtrl', MyRouteCtrl);

app.service('customHttpService', CustomHttpService);
