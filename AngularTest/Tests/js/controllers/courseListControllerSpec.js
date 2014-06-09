'use strict';

describe('CourseListController', function() {
    var scope, controllerConstructor, mockCourseData, mockNotificationFactory, $q;

    beforeEach(module("angularTest"));

    beforeEach(inject(function($controller, $rootScope, _$q_) {
        scope = $rootScope.$new();
        $q = _$q_;
        mockCourseData = sinon.stub({
            courses: function() {}
        });
        mockNotificationFactory = sinon.stub({error: function() {}});
        controllerConstructor = $controller;
    }));

    it('should set the scope courses to the successful result of dataService.courses', function() {
        var deferred = $q.defer();

        // mock courses function call returns a promise
        mockCourseData.courses.returns(deferred.promise);

        // Resolve promise
        deferred.resolve({data: "name"});

        // initialize controller
        var ctrl = controllerConstructor("CourseListController",
            {$scope: scope, $location: {}, dataService: mockCourseData, notificationFactory: mockNotificationFactory});

        // not needed, since GetCourses gets automatically called
        //scope.GetCourses(promise);

        // Propagate promise resolution to 'then' functions using $apply().
        scope.$apply();

        expect(scope.loaded).toBe(true);
        expect(scope.courses).toEqual("name");
    });

    it('should call notificationFactory when failing getting courses', function() {
        var deferred = $q.defer();

        // mock courses function call returns a promise
        mockCourseData.courses.returns(deferred.promise);

        // Reject promise
        deferred.reject(new Error('fail'));

        // initialize controller
        var ctrl = controllerConstructor("CourseListController",
            {$scope: scope, $location: {}, dataService: mockCourseData, notificationFactory: mockNotificationFactory});

        // not needed, since GetCourses gets automatically called
        //scope.GetCourses(promise);

        // Propagate promise resolution to 'then' functions using $apply().
        scope.$apply();

        expect(scope.GetCourses).toThrow();
        expect(scope.loaded).toBe(false);
        expect(scope.courses).toEqual({});
        expect(mockNotificationFactory.error.called).toBe(true);

    })
});
