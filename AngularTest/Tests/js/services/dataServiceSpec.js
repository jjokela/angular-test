'use strict';

describe('dataService', function () {

    beforeEach(module('angularTest'));

        it('should return list of courses', inject(function (dataService, $httpBackend) {
            $httpBackend.when('GET', '/api/courses').respond([{name: 'eka'}, {name: 'toka'}]);
            var promise = dataService.courses();
            var actual;
            promise.then(function(data) {
                actual = data.data;
            });
            $httpBackend.flush(); // server responds to request now

            expect(actual.length).toBe(2);
        }));

        it('should get course details by issuing a GET request to api/courses/1 when the course id is 1', inject(function (dataService, $httpBackend) {
            $httpBackend.when('GET', '/api/courses/1').respond({name: 'eka'});
            var promise = dataService.courseDetails('1'); // palauttaa promisen

            var actual;
            promise.then(function(data) {
                actual = data.data.name;
            });

            $httpBackend.flush(); // server responds to request now

            expect(actual).toBe('eka');
        }));

        it('should create a new course by issuing a POST request to /api/courses', inject(function (dataService, $httpBackend) {
            var data = {name: "name"};
            $httpBackend.expectPOST('/api/Courses', data).respond(201, '');

            var promise = dataService.newCourse(data);

            var response;
            promise.then(function(data) {
                response = data.status;
            });

            $httpBackend.flush(); // server responds to request now

            expect(response).toBe(201);
        }));

        it('should edit a course by issuing a PUT request to /api/Courses/123 when the course id is 123', inject(function (dataService, $httpBackend) {
            var id = 123;
            var data = {name: "name"};
            $httpBackend.expectPUT('/api/Courses/' + id, data).respond(200, '');

            var promise = dataService.editCourse(id, data);

            var response;
            promise.then(function(data) {
                response = data.status;
            });

            $httpBackend.flush(); // server responds to request now

            expect(response).toBe(200);
        }));

        it('should delete a course by issuing a DELETE request to /api/Courses/123 when the course id is 123', inject(function (dataService, $httpBackend) {
            var id = 123;
            $httpBackend.expectDELETE('/api/Courses/' + id).respond(200, '');

            var promise = dataService.deleteCourse(id);

            var response;
            promise.then(function(data) {
                response = data.status;
            });

            $httpBackend.flush(); // server responds to request now

            expect(response).toBe(200);
        }))
});
