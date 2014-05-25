'use strict';

angularTest.factory('notificationFactory', function () {
    toastr.options = { "positionClass": "toast-bottom-right" };
    return {
        success: function (text) {
            toastr.success(text);
        },
        error: function (text) {
            toastr.error(text, "Error");
        },
        info: function (text) {
            toastr.info(text);
        }
    };
});