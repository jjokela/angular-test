'use strict';

describe('CourseListController', function() {
    var scope, $controllerConstructor, mockCourseData, mockNotificationFactory, $q, q;

    beforeEach(module("angularTest"));

    beforeEach(inject(function($controller, $rootScope, $q) {
        scope = $rootScope.$new();
        q = $q;
        mockCourseData = sinon.stub({
            courses: function() {}
        });
        mockNotificationFactory = sinon.stub({error: function() {}});
        $controllerConstructor = $controller;
    }));


    it('should set the scope courses to the result of dataService.courses', function() {
        var mockCourses = {name: "name"};

        var deferred = q.defer();
        var promise = deferred.promise;
        var resolvedValue;
        promise.then(function() { resolvedValue = {name: "name"}; });


        mockCourseData.courses.returns(deferred.promise);
        // Simulate resolving of promise
        deferred.resolve();
        // Propagate promise resolution to 'then' functions using $apply().
        scope.$apply();

        var ctrl = $controllerConstructor("CourseListController",
            {$scope: scope, $location: {}, dataService: mockCourseData, notificationFactory: mockNotificationFactory});

        expect(resolvedValue).toEqual({name: "name"});
    })
})
