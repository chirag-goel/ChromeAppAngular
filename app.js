angular.module('chrome', ['ngRoute'])

.config(function($routeProvider) {
    $routeProvider.when('/',{
        templateUrl:'home.html'
    })
    .otherwise({
        redirectTo:'/'
    })
});

angular.bootstrap(angular.element(document.querySelector('#main')), ['chrome']);