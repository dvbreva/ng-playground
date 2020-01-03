using Microsoft.EntityFrameworkCore;
using Wishlist.Web.Models;

namespace Wishlist.Web.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<Wish> Wishes { get; set; }
    }
}
