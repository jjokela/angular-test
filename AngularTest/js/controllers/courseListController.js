'use strict';

angularTest.controller('CourseListController',
	function CourseListController($scope, dataService, notificationFactory) {
	    $scope.loaded = false;
	    $scope.courses = {};

	    dataService.courses().then(function (data, textStatus, jqXHR) {
	        $scope.courses = data.data;
	        $scope.loaded = true;
	    }, function (jqXHR, textStatus, errorThrown) {
	        console.log("Error: " + jqXHR);
	        notificationFactory.error('Error when loading courses');
	    });
	}
);

