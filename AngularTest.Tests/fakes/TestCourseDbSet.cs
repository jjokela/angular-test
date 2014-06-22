using SpaTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularTest.Tests.context
{
    public class TestCourseDbSet : TestDbSet<Course>
    {
        public override Course Find(params object[] keyValues)
        {
            return this.SingleOrDefault(course => course.Id == (int)keyValues.Single());
        }

        public override async Task<Course> FindAsync(params object[] keyValues)
        {
            return this.SingleOrDefault(course => course.Id == (int)keyValues.Single());
        }
    }
}
