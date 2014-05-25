﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Optimization;

namespace SpaTest
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            // CSS
            bundles.Add(new StyleBundle("~/Content/css").Include(
                 "~/Content/bootstrap.min.css",
                 "~/Content/app.css",
                 "~/Content/toastr.css"));

            // JS
            bundles.Add(new ScriptBundle("~/bundles/js").Include(
                "~/js/app.js",
                "~/js/directives/courseThumbnail.js",
                "~/js/directives/myModal.js",
                "~/js/services/dataService.js",
                "~/js/services/notificationFactory.js",
                "~/js/controllers/courseListController.js",
                "~/js/controllers/courseDetailsController.js",
                "~/js/controllers/newCourseController.js",
                "~/js/controllers/editCourseController.js"
            ));
        }
    }
}
