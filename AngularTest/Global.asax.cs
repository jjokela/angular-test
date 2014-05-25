﻿using SpaTest.Migrations;
using System.Data.Entity.Migrations;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace SpaTest
{
    public class MvcApplication : HttpApplication
    {
        protected void Application_Start()
        {
            var jsonFormatter = GlobalConfiguration.Configuration.Formatters.JsonFormatter;
            jsonFormatter.SerializerSettings.Converters.Add(new Newtonsoft.Json.Converters.StringEnumConverter());

            //var migrator = new DbMigrator(new Configuration());
            //migrator.Update();

            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
