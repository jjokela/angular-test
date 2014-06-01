'use strict';

angularTest.controller('CourseDetailsController', 
    function CourseDetailsController($scope, $routeParams, $location, dataService, notificationFactory) {
        $scope.course = "";
        $scope.loaded = false;

        dataService.courseDetails($routeParams.courseId).then(function (data) {
            $scope.course = data.data;
            $scope.loaded = true;
        }, function (xhr) {
            console.log("Error: " + xhr);
        });

        $scope.back = function () {
            $location.url('/courses');
        };

        $scope.edit = function () {
            $location.url('/editcourse/' + $routeParams.courseId);
        };

        $scope.delete = function (course) {
            dataService.deleteCourse($routeParams.courseId).then(function (data) {
                console.log("Delete succesfull");
                notificationFactory.success('Course deleted');
                // wrap redirect inside scope.apply
                $scope.dismiss().then(function () {
                    $scope.$apply(function () { $location.path('/courses'); });
                }); // myModal directive
            }, function (xhr) {
                console.log("Error: " + xhr);
            });
        };
    }
);

