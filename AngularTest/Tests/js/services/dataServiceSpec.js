'use strict';

describe('dataService', function () {

    var myDataService, $injectedHttpBackend;

    beforeEach(module('angularTest'));

    beforeEach(inject(function($httpBackend, dataService) {
        $injectedHttpBackend = $httpBackend;
        myDataService = dataService;
    }));

        it('should return list of courses', function () {
            $injectedHttpBackend.when('GET', '/api/courses').respond([{name: 'eka'}, {name: 'toka'}]);
            var promise = myDataService.courses();
            var actual;
            promise.then(function(data) {
                actual = data.data;
            });
            $injectedHttpBackend.flush(); // server responds to request now

            expect(actual.length).toBe(2);
        });

        it('should get course details by issuing a GET request to api/courses/1 when the course id is 1', function () {
            $injectedHttpBackend.when('GET', '/api/courses/1').respond({name: 'eka'});
            var promise = myDataService.courseDetails('1'); // returns a promise

            var actual;
            promise.then(function(data) {
                actual = data.data.name;
            });

            $injectedHttpBackend.flush(); // server responds to request now

            expect(actual).toBe('eka');
        });

        it('should create a new course by issuing a POST request to /api/courses', function () {
            var data = {name: "name"};
            $injectedHttpBackend.expectPOST('/api/Courses', data).respond(201, '');

            var promise = myDataService.newCourse(data);

            var response;
            promise.then(function(data) {
                response = data.status;
            });

            $injectedHttpBackend.flush(); // server responds to request now

            expect(response).toBe(201);
        });

        it('should edit a course by issuing a PUT request to /api/Courses/123 when the course id is 123', function () {
            var id = 123;
            var data = {name: "name"};
            $injectedHttpBackend.expectPUT('/api/Courses/' + id, data).respond(200, '');

            var promise = myDataService.editCourse(id, data);

            var response;
            promise.then(function(data) {
                response = data.status;
            });

            $injectedHttpBackend.flush(); // server responds to request now

            expect(response).toBe(200);
        });

        it('should delete a course by issuing a DELETE request to /api/Courses/123 when the course id is 123', function () {
            var id = 123;
            $injectedHttpBackend.expectDELETE('/api/Courses/' + id).respond(200, '');

            var promise = myDataService.deleteCourse(id);

            var response;
            promise.then(function(data) {
                response = data.status;
            });

            $injectedHttpBackend.flush(); // server responds to request now

            expect(response).toBe(200);
        });
});
