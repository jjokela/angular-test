using SpaTest.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace SpaTest.DataContexts
{
    public interface ICoursesDb : IDisposable
    {
        DbSet<Course> Courses { get; }
        Task<int> SaveChangesAsync();
        void MarkAsModified(Course course);
    }
}