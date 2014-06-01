'use strict';

angularTest.controller('EditCourseController', 
    function EditCourseController($scope, $routeParams, $location, dataService, notificationFactory) {
        $scope.course = "";
        $scope.loaded = false;

        dataService.courseDetails($routeParams.courseId).then(function (data, textStatus, jqXHR) {
            $scope.course = data.data;
            $scope.loaded = true;
        }, function (jqXHR, textStatus, errorThrown) {
            console.log("Error: " + jqXHR);
        });

        $scope.cancel = function () {
            $location.url('/course/' + $routeParams.courseId);
        };

        $scope.save = function (course, courseForm) {
            if (courseForm.$valid) {
                dataService.editCourse($routeParams.courseId, course).then(function (data, textStatus, jqXHR) {
                    console.log('ny meni editti hyvin: ' + data);
                    notificationFactory.success('Changes saved succesfully!');
                    $location.url('/courses');
                }, function (jqXHR, textStatus, errorThrown) {
                    console.log('fail: ' + jqXHR.data.message);
                });
            }
        };
    }
);