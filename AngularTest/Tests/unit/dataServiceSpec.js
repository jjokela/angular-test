'use strict';

describe('dataService', function () {

    beforeEach(module('angularTest'));

    describe('courses', function() {
        it('should return list of courses', inject(function (dataService, $httpBackend) {
            $httpBackend.when('GET', '/api/courses').respond([{name: 'eka'}, {name: 'toka'}]);
            var promise = dataService.courses();
            var actual;
            promise.then(function(data) {
                actual = data.data;
            });
            $httpBackend.flush(); // server responds to request now

            expect(actual.length).toBe(2);
        }))
    });

    describe('courseDetails', function () {

        it('should issue a GET request to /api/courses/1 when the course id is 1', inject(function (dataService, $httpBackend) {
            $httpBackend.when('GET', '/api/courses/1').respond({name: 'eka'});
            var promise = dataService.courseDetails('1'); // palauttaa promisen

            var actual;
            promise.then(function(data) {
                actual = data.data.name;
            });

            $httpBackend.flush(); // server responds to request now

            expect(actual).toBe('eka');
        }));
    })

    describe('newCourse', function() {
        it('should create a new course', inject(function (dataService, $httpBackend) {
            var data = {name: "name"};
            $httpBackend.expectPOST('api/Courses', data).respond(201, ''); //{function([status,] data[, headers, statusText])

            var promise = dataService.newCourse(data);

            var response;
            promise.then(function(data) {
                response = data.status;
            })

            $httpBackend.flush(); // server responds to request now

            expect(response).toBe(201);
        }))
    });

    describe('editCourse', function() {
        it('should edit a course', inject(function (dataService, $httpBackend) {
            var id = 123;
            var data = {name: "name"};
            $httpBackend.expectPUT('api/Courses/' + id, data).respond(200, ''); //{function([status,] data[, headers, statusText])

            var promise = dataService.editCourse(id, data);

            var response;
            promise.then(function(data) {
                response = data.status;
            })

            $httpBackend.flush(); // server responds to request now

            expect(response).toBe(200);
        }))
    });

    describe('deleteCourse', function() {
        it('should delete a course', inject(function (dataService, $httpBackend) {
            var id = 123;
            $httpBackend.expectDELETE('api/Courses/' + id).respond(200, ''); //{function([status,] data[, headers, statusText])

            var promise = dataService.deleteCourse(id);

            var response;
            promise.then(function(data) {
                response = data.status;
            })

            $httpBackend.flush(); // server responds to request now

            expect(response).toBe(200);
        }))
    });
});
