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
                controller: 'EventController',
            })
            .otherwise({ redirectTo: '/' });
    }])
    .factory('windowAlert', [
        '$window',
        function($window) {
            return $window.alert;
        }
    ])
    .factory('eventStatus', [function() {
        var name;
        var accessCode;
        return {
            save: function(_name, _accessCode) {
                name = _name;
                accessCode = _accessCode;
            },
            getName: function() {
                return name;
            },
            getAccessCode: function() {
                return accessCode;
            }
        }
    }])
    .controller('NewController', [
        '$scope',
        '$http',
        '$location',
        'windowAlert',
        'eventStatus',
        function($scope, $http, $location, windowAlert, eventStatus) {
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
                            eventStatus.save("testNewName", "TestNameAccessCode");
                            $location.path('/event');
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
        '$location',
        'windowAlert',
        'eventStatus',
        function($scope, $http, $location, windowAlert, eventStatus) {
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
                            eventStatus.save("testExistingName", "TestExistingAccessCode");
                            $location.path('/event');
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

    .controller('EventController', [
        '$scope',
        '$http',
        '$location',
        'windowAlert',
        'eventStatus',
        function($scope, $http, $location, windowAlert, eventStatus) {
            $scope.state = {};
            $scope.state.pageName = 'p3';

            $scope.state.eventName = eventStatus.getName();
            $scope.state.eventAccessCode = eventStatus.getAccessCode();

        }
    ])


    ;
