'use strict';

angularTest.factory('dataService', ["$http", function ($http) {

    var courses = function () {
        var promise = $http({
            url: '/api/courses',
            method: 'GET'
        }).done(function (data, status, jqXHR) {
            console.log(data);
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log('failed: ' + errorThrown);
        });

        return promise;
    };

    var courseDetails = function (courseId) {
        var promise = $http({
            url: '/api/courses/' + courseId,
            method: 'GET'
        }).done(function (data, status, jqXHR) {
            console.log(data);
        }).fail(function (qXHR, textStatus, errorThrown) {
            console.log('failed: ' + errorThrown);
        });

        return promise;
    };

    var newCourse = function (course) {
        var promise = $http({
            url: 'api/Courses',
            method: 'POST',
            data: course
        }).done(function (data, status, jqXHR) {
            console.log(data);
        }).fail(function (qXHR, textStatus, errorThrown) {
            console.log('failed: ' + errorThrown);
        });

        return promise;
    };

    var editCourse = function (courseId, course) {
        var promise = $http({
            url: 'api/Courses/' + courseId,
            method: 'PUT',
            data: course
        }).done(function (data, status, jqXHR) {
            console.log(data);
        }).fail(function (qXHR, textStatus, errorThrown) {
            console.log('failed: ' + errorThrown);
        });

        return promise;
    }

    var deleteCourse = function (courseId) {
        var promise = $http({
            url: 'api/Courses/' + courseId,
            method: 'DELETE'
        }).done(function (data, status, jqXHR) {
            console.log(data);
        }).fail(function (qXHR, textStatus, errorThrown) {
            console.log('failed: ' + errorThrown);
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
