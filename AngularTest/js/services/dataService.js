'use strict';

angularTest.factory('dataService', ["$http", function ($http) {

    var courses = function () {
        var promise = $http({
            url: '/api/courses',
            method: 'GET'
        }).success(function (data, status, headers, config) {
            console.log(data);
        }).error(function (err, status) {
            console.log('failed: ' + err);
        });

        return promise;
    };

    var courseDetails = function (courseId) {
        var promise = $http({
            url: '/api/courses/' + courseId,
            method: 'GET'
        }).success(function (data, status, headers, config) {
            console.log(data);
        }).error(function (err, status) {
            console.log('failed: ' + err);
        });

        return promise;
    };

    var newCourse = function (course) {
        var promise = $http({
            url: 'api/Courses',
            method: 'POST',
            data: course
        }).success(function (data, status, headers, config) {
            console.log(data);
        }).error(function (err, status) {
            console.log('failed: ' + err);
        });

        return promise;
    };

    var editCourse = function (courseId, course) {
        var promise = $http({
            url: 'api/Courses/' + courseId,
            method: 'PUT',
            data: course
        }).success(function (data, status, headers, config) {
            console.log(data);
        }).error(function (err, status) {
            console.log('failed: ' + err);
        });

        return promise;
    }

    var deleteCourse = function (courseId) {
        var promise = $http({
            url: 'api/Courses/' + courseId,
            method: 'DELETE'
        }).success(function (data, status, headers, config) {
            console.log(data);
        }).error(function (err, status) {
            console.log('failed: ' + err);
        });

        return promise;
    }

    return {
        courses: courses,
        courseDetails: courseDetails,
        newCourse: newCourse,
        editCourse: editCourse,
        deleteCourse: deleteCourse
    };
}]);
