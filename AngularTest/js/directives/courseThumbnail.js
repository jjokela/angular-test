'use strict'

angularTest.directive('courseThumbnail', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/directives/CourseThumbnail.html',
        scope: {
            course: "=course"
        }
    }
});
