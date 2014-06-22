using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using SpaTest.Models;

namespace SpaTest.DataContexts
{
    public class CoursesDb : DbContext, ICoursesDb
    {
        public CoursesDb(): base("name=CoursesContext")
        {
        }

        public DbSet<Course> Courses { get; set; }


        public void MarkAsModified(Course course)
        {
            Entry(course).State = EntityState.Modified;
        }

    }
}