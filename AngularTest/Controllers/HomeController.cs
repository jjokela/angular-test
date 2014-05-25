using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace SpaTest.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AngularTest()
        {
            return View();
        }
    }
}
