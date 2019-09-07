using Microsoft.EntityFrameworkCore;

namespace ElectiveCourses.Models
{
    public class ElectiveCoursesDbContext : DbContext
    {
        public ElectiveCoursesDbContext(DbContextOptions<ElectiveCoursesDbContext> options) : base(options)
        {

        }
    }
}
