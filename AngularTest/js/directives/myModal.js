'use strict';

angularTest.directive('myModal', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            // since modal('hide') returns immediatelly AND before modal is actually hidden,
            // return a promise and resolve it when modal is really closed
            var deferred = $.Deferred();
            scope.dismiss = function () {
                element.modal('hide');
                return deferred.promise();
            };
            element.on('hidden.bs.modal', function (e) {
                deferred.resolve("hidden ended!");
            });
        }
    }
});
