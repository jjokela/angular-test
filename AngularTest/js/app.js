'use strict';

var angularTest = angular.module('angularTest', ['ngSanitize', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/courses', {
            templateUrl: 'templates/CourseList.html',
            controller: 'CourseListController'
        });
        $routeProvider.when('/course/:courseId', {
            templateUrl: 'templates/CourseDetails.html',
            controller: 'CourseDetailsController'
        });
        $routeProvider.when('/newcourse', {
            templateUrl: 'templates/NewCourse.html',
            controller: 'NewCourseController'
        });
        $routeProvider.when('/editcourse/:courseId', {
            templateUrl: 'templates/EditCourse.html',
            controller: 'EditCourseController'
        });
        $routeProvider.otherwise({ redirectTo: '/courses' });
        //$locationProvider.html5Mode(true); <-- ei jostain syystä toimi /event/1 tms tyyppisissä urleissa, jää ikilooppiin
    });