using System.Collections.Generic;
using System.Threading.Tasks;
using Wishlist.Web.Models;

namespace Wishlist.Web.Repositories
{
    public interface IWishRepository
    {
        Task<Wish> GetById(int id);

        Task<IEnumerable<Wish>> GetAll();

        Task Add(Wish Entity);

        Task Update(Wish Entity);

        Task Delete(Wish Entity);
    }
}
