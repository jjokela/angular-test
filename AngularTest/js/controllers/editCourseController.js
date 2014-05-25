'use strict';

angularTest.controller('EditCourseController', 
    function EditCourseController($scope, $routeParams, $location, dataService, notificationFactory) {
        $scope.course = "";
        $scope.loaded = false;

        dataService.courseDetails($routeParams.courseId).then(function (data) {
            $scope.course = data.data;
            $scope.loaded = true;
        }, function (xhr) {
            console.log("Error: " + xhr);
        });

        $scope.cancel = function () {
            $location.url('/course/' + $routeParams.courseId);
        };

        $scope.save = function (course, courseForm) {
            if (courseForm.$valid) {
                dataService.editCourse($routeParams.courseId, course).then(function (data) {
                    console.log('ny meni editti hyvin: ' + data);
                    notificationFactory.success('Changes saved succesfully!');
                    $location.url('/courses');
                }, function (xhr) {
                    console.log('fail: ' + xhr.data.message);
                });
            }
        };
    }
);