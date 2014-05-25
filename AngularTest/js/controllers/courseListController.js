'use strict';

angularTest.controller('CourseListController',
	function CourseListController($scope, dataService, notificationFactory) {
	    $scope.loaded = false;
	    $scope.courses = {};

	    dataService.courses().then(function (data) {
	        $scope.courses = data.data;
	        $scope.loaded = true;
	    }, function (xhr) {
	        console.log("Error: " + xhr);
	        notificationFactory.error('Error when loading courses');
	    });
	}
);

