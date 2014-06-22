using SpaTest.DataContexts;
using SpaTest.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularTest.Tests.context
{
    public class TestCourseContext : ICoursesDb
    {
        public TestCourseContext()
        {
            this.Courses = new TestCourseDbSet();
        }

        public DbSet<Course> Courses { get; set; }

        public async Task<int> SaveChangesAsync()
        {
            return 0;
        }

        public void MarkAsModified(SpaTest.Models.Course course)
        {
        }

        public void Dispose()
        {
        }
    }
}
