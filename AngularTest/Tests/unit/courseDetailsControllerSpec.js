'use strict';

describe('CourseDetailsController', function() {
    var scope, $controllerConstructor, mockCourseData, mockNotificationFactory, $q, q;

    beforeEach(module("angularTest"));

    beforeEach(inject(function($controller, $rootScope, $q) {
        scope = $rootScope.$new();
        q = $q;
        mockCourseData = sinon.stub({
            courseDetails: function(courseId) {},
            deleteCourse: function(courseId) {}
        });
        mockNotificationFactory = sinon.stub({error: function() {}});
        $controllerConstructor = $controller;
    }));


    it('should set the scope course to the result of dataService.courseDetails', function() {

        var deferred = q.defer();
        var promise = deferred.promise;
        var resolvedValue;
        promise.then(function() { resolvedValue = {name: "name"}; });

        mockCourseData.courseDetails.returns(deferred.promise);
        // Simulate resolving of promise
        deferred.resolve();
        // Propagate promise resolution to 'then' functions using $apply().
        scope.$apply();

        var ctrl = $controllerConstructor("CourseDetailsController",
            {$scope: scope, $timeout: {}, $routeParams: {}, $location: {}, dataService: mockCourseData, notificationFactory: mockNotificationFactory});
        expect(resolvedValue).toEqual({name: "name"});
    })

    it('should navigate to the correct url when edit is called', function() {
        var deferred = q.defer();
        var promise = deferred.promise;
        var resolvedValue;
        promise.then(function() { resolvedValue = {name: "name"}; });

        mockCourseData.courseDetails.returns(deferred.promise);
        // Simulate resolving of promise
        deferred.resolve();
        // Propagate promise resolution to 'then' functions using $apply().
        scope.$apply();

        var mockLocation = sinon.stub({url: function() {}});
        var mockRouteParams = {courseId: 23};

        var ctrl = $controllerConstructor("CourseDetailsController",
            {$scope: scope, $timeout: {}, $routeParams: mockRouteParams, $location: mockLocation, dataService: mockCourseData, notificationFactory: mockNotificationFactory});

        scope.edit();

        expect(mockLocation.url.calledWith('/editcourse/23')).toBe(true);
    })

    it('should navigate to the correct url when back is called', function() {

        var mockLocation = sinon.stub({url: function() {}});

        var deferred = q.defer();
        var promise = deferred.promise;
        var resolvedValue;
        promise.then(function() { resolvedValue = {name: "name"}; });

        mockCourseData.courseDetails.returns(deferred.promise);
        // Simulate resolving of promise
        deferred.resolve();
        // Propagate promise resolution to 'then' functions using $apply().
        scope.$apply();

        var ctrl = $controllerConstructor("CourseDetailsController",
            {$scope: scope, $timeout: {}, $routeParams: {}, $location: mockLocation, dataService: mockCourseData, notificationFactory: mockNotificationFactory});

        scope.back();

        expect(mockLocation.url.calledWith('/courses')).toBe(true);
    })

    it('should delete course to the result of dataService.deleteCourse', function() {

        var deferred = q.defer();
        var promise = deferred.promise;
        var resolvedValue;
        promise.then(function() { resolvedValue = {name: "name"}; });

        mockCourseData.courseDetails.returns(deferred.promise);
        // Simulate resolving of promise
        deferred.resolve();
        // Propagate promise resolution to 'then' functions using $apply().
        scope.$apply();

        var mockRouteParams = {courseId: 23};

        // delete
        mockCourseData.deleteCourse.returns(deferred.promise);
        promise.then(function() { resolvedValue = 200; });
        //deferred.resolve();
        scope.$apply();

        var ctrl = $controllerConstructor("CourseDetailsController",
            {$scope: scope, $timeout: {}, $routeParams: mockRouteParams, $location: {}, dataService: mockCourseData, notificationFactory: mockNotificationFactory});

        scope.delete({rai: "rai"});

        expect(resolvedValue).toEqual(200);
    })
});
