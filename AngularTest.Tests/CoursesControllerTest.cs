using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using SpaTest.Controllers;
using SpaTest.Models;
using AngularTest.Tests.context;
using System.Web.Http.Results;
using System.Net;

namespace AngularTest.Tests
{
    [TestClass]
    public class CoursesControllerTests
    {
        /* GET */
        [TestMethod]
        public void GetCourse_ShouldReturnCourse_WithSameId()
        {
            var context = new TestCourseContext();
            context.Courses.Add(GetDemoCourse());

            var controller = new CoursesController(context);
            var getResult = controller.GetCourse(3);
            var result = getResult.Result as OkNegotiatedContentResult<Course>;

            Assert.IsNotNull(result);
            Assert.AreEqual(result.Content.Id, 3);
        }

        [TestMethod]
        public void GetCourse_ShouldReturnNotFound_WhenDifferentId()
        {
            var context = new TestCourseContext();
            context.Courses.Add(GetDemoCourse());

            var controller = new CoursesController(context);
            var getResult = controller.GetCourse(999);
            var result = getResult.Result as NotFoundResult;

            Assert.IsNotNull(result);
            Assert.IsInstanceOfType(result, typeof(NotFoundResult));
        }

        [TestMethod]
        public void GetCourses_ShouldReturnAllCourses()
        {
            var context = new TestCourseContext();
            context.Courses.Add(new Course { Id = 1, Name = "Demo1" });
            context.Courses.Add(new Course { Id = 2, Name = "Demo2" });
            context.Courses.Add(new Course { Id = 3, Name = "Demo3" });

            var controller = new CoursesController(context);
            var result = controller.GetCourses() as TestCourseDbSet;

            Assert.IsNotNull(result);
            Assert.AreEqual(3, result.Local.Count);
        }

        /* POST */
        [TestMethod]
        public void PostCourse_ShouldReturnSameCourse()
        {
            var controller = new CoursesController(new TestCourseContext());

            var item = GetDemoCourse();

            var postResult = controller.PostCourse(item);
            var result = postResult.Result as CreatedAtRouteNegotiatedContentResult<Course>;

            Assert.IsNotNull(result);
            Assert.AreEqual(result.RouteName, "DefaultApi");
            Assert.AreEqual(result.RouteValues["id"], result.Content.Id);
            Assert.AreEqual(result.Content.Name, item.Name);
        }

        /* PUT */
        [TestMethod]
        public void PutCourse_ShouldReturnStatusCode()
        {
            var controller = new CoursesController(new TestCourseContext());

            var item = GetDemoCourse();

            var putResult = controller.PutCourse(item.Id, item);
            var result = putResult.Result as StatusCodeResult;

            Assert.IsNotNull(result);
            Assert.IsInstanceOfType(result, typeof(StatusCodeResult));
            Assert.AreEqual(HttpStatusCode.NoContent, result.StatusCode);
        }

        [TestMethod]
        public void PutCourse_ShouldFail_WhenDifferentId()
        {
            var controller = new CoursesController(new TestCourseContext());

            var putResult = controller.PutCourse(999, GetDemoCourse());
            var result = putResult.Result as BadRequestResult;

            Assert.IsInstanceOfType(result, typeof(BadRequestResult));
        }

        /* DELETE */
        [TestMethod]
        public void DeleteCourse_ShouldReturnOK()
        {
            var context = new TestCourseContext();
            var item = GetDemoCourse();
            context.Courses.Add(item);

            var controller = new CoursesController(context);

            var deleteResult = controller.DeleteCourse(3);
            var result = deleteResult.Result as OkNegotiatedContentResult<Course>;

            Assert.IsNotNull(result);
            Assert.AreEqual(item.Id, result.Content.Id);
        }

        [TestMethod]
        public void DeleteCourse_ShouldReturnNotFound_WhenInvalidId()
        {
            var context = new TestCourseContext();
            var item = GetDemoCourse();
            context.Courses.Add(item);

            var controller = new CoursesController(context);

            var deleteResult = controller.DeleteCourse(999);
            var result = deleteResult.Result as NotFoundResult;

            Assert.IsNotNull(result);
            Assert.IsInstanceOfType(result, typeof(NotFoundResult));
        }

        /* UTILS */
        private Course GetDemoCourse()
        {
            return new Course()
            {
                Id = 3,
                Name = "Demo name",
                Description = "Demo description",
                Link = "demo link",
                ImageLink = "demo image link",
                Status = Status.Done
            };
        }
    }
}
