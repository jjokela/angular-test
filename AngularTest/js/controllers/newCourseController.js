﻿'use strict';

angularTest.controller('NewCourseController', 
    function NewCourseController($scope, $location, dataService, notificationFactory) {
        $scope.event = {};

        $scope.cancel = function () {
            $location.url('/courses');
        }

        $scope.save = function (course, newCourseForm) {
            if (newCourseForm.$valid) {
                dataService.newCourse(course).then(function (data) {
                    console.log('ny meni save hyvin: ' + data);
                    notificationFactory.success('New course created succesfully!');
                    $location.url('/courses');
                }, function (xhr) {
                    console.log('fail: ' + xhr.data.message);
                });
            }
        };
    }
);

