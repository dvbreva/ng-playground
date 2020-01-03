using System.Collections.Generic;
using System.Threading.Tasks;
using Wishlist.Web.Models;

namespace Wishlist.Web.Services
{
    public interface IWishService
    {
        Task<IEnumerable<Wish>> GetWishes();

        Task<Wish> GetWish(int id);

        Task<Wish> AddWish(string message);
    }
}
