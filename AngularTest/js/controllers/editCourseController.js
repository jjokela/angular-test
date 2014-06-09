'use strict';

angularTest.controller('EditCourseController', 
    function EditCourseController($scope, $routeParams, $location, dataService, notificationFactory) {
        $scope.course = "";
        $scope.loaded = false;

        $scope.getCourseDetails = function (promise) {
            promise.then(function (data) {
                $scope.course = data.data;
                $scope.loaded = true;
            }, function (xhr) {
                console.log("Error: " + xhr);
                notificationFactory.error('Failed to get course details.');
            });
        };

        $scope.cancel = function () {
            $location.url('/course/' + $routeParams.courseId);
        };

        $scope.save = function (course, courseForm) {
            if (courseForm.$valid) {
                dataService.editCourse($routeParams.courseId, course).then(function (data) {
                    notificationFactory.success('Changes saved succesfully!');
                    $location.url('/courses');
                }, function (xhr) {
                    console.log('fail: ' + xhr.data.message);
                    notificationFactory.error('Failed to save course.');
                });
            }
        };

        // Get course details immediatelly
        $scope.getCourseDetails(dataService.courseDetails($routeParams.courseId));
    }
);