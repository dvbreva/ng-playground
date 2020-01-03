using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Wishlist.Web.Data;
using Wishlist.Web.Models;

namespace Wishlist.Web.Repositories
{
    public class WishRepository : IWishRepository
    {
        #region Constructors
        public WishRepository(ApplicationDbContext context)
        {
            Context = context;

            Entities = context.Set<Wish>();
        }

        #endregion

        #region Protected Properties

        protected ApplicationDbContext Context { get; }

        protected DbSet<Wish> Entities { get; }

        #endregion

        #region Public Methods
        public virtual async Task<Wish> GetById(int id)
            => await Entities.FindAsync(id);

        public virtual async Task<IEnumerable<Wish>> GetAll()
           => await Entities.ToListAsync();

        public Task Add(Wish Entity)
        {
            Entities.Add(Entity);

            return Context.SaveChangesAsync();
        }

        public Task Update(Wish Entity)
        {
            throw new NotImplementedException();
        }

        public Task Delete(Wish Entity)
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}
