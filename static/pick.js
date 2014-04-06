angular
    .module('PickApp', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../static/login.html',
            })
            .when('/new', {
                templateUrl: '../static/new.html',
                controller: 'NewController',
            })
            .when('/existing', {
                templateUrl: '../static/existing.html',
                controller: 'ExistingController',
            })
            .when('/event', {
                templateUrl: '../static/event.html',
            })
            .otherwise({ redirectTo: '/' });
    }])
    .factory('windowAlert', [
        '$window',
        function($window) {
            return $window.alert;
        }
    ])
    .factory('Event', [function() {
        return {
            add: function() {

            },
            get: function() {

            }
        }
    }])
    .controller('NewController', [
        '$scope',
        '$http',
        'windowAlert',
        function($scope, $http, windowAlert) {
            $scope.state = {};
            $scope.state.pageName = 'p2a';

            $scope.addEvent = function() {
                if (!$scope.state.eventName) {
                    windowAlert("Event Name must be non-empty");
                    return;
                }
                if (!$scope.state.eventAccessCode) {
                    windowAlert("Event Access must be non-empty");
                    return;
                }

                $http
                    .post('/eventAdd', {
                        item: $scope.state.newItem
                    })
                    .success(function(data, status, headers, config) {
                        if (data.success) {
                            windowAlert('Adding data succeeded')
                        } else {
                            windowAlert('Adding of item failed');
                        }
                    })
                    .error(function(data, status, headers, config) {
                        windowAlert("Send Error");
                    });
            };
        }
    ])

    .controller('ExistingController', [
        '$scope',
        '$http',
        'windowAlert',
        function($scope, $http, windowAlert) {
            $scope.state = {};
            $scope.state.pageName = 'p2b';

            $scope.retrieveEvent = function() {
                if (!$scope.state.eventName) {
                    windowAlert("Event Name must be non-empty");
                    return;
                }
                if (!$scope.state.eventAccessCode) {
                    windowAlert("Event Access must be non-empty");
                    return;
                }

                $http
                    .post('/eventRetrieve', {
                        item: $scope.state.newItem
                    })
                    .success(function(data, status, headers, config) {
                        if (data.success) {
                            windowAlert('Retrieving data succeeded')
                        } else {
                            windowAlert('Adding of item failed');
                        }
                    })
                    .error(function(data, status, headers, config) {
                        windowAlert("Send Error");
                    });
            };
        }
    ])

    .directive('navtabs', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../static/navtabs.html',
            scope: {
                pageName: '='
            },
            controller: [
                '$scope',
                function($scope) {
                    this.selectTabIfOnPage = function(tab) {
                        if (tab.name === $scope.pageName) {
                            tab.selected = true;
                        }
                    };
                }
            ]
        };
    })
    .directive('tab', function() {
        return {
            require: '^navtabs',
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {},
            template: '<li ng-class="{ active: selected }"><a href="{{ href }}" ng-transclude></a></li>',
            link: function(scope, element, attr, navtabsCtrl) {
                scope.name = attr.name;
                scope.href = attr.href;
                scope.selected = false;
                navtabsCtrl.selectTabIfOnPage(scope);
            }
        };
    })
    .controller('SecondController', [
        '$scope',
        function($scope) {
            $scope.state = {};
            $scope.state.pageName = 'secondPage';
        }
    ])
    ;
