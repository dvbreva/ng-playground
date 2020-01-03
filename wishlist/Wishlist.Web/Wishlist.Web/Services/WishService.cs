using System.Collections.Generic;
using System.Threading.Tasks;
using Wishlist.Web.Models;
using Wishlist.Web.Repositories;

namespace Wishlist.Web.Services
{
    public class WishService : IWishService
    {
        #region Private Fields

        private readonly IWishRepository _wishRepository;

        #endregion

        #region Constructors
        public WishService(IWishRepository wishRepository)
        {
            _wishRepository = wishRepository;
        }

        #endregion

        #region Public Methods

        public async Task<Wish> GetWish(int id)
        {
            var dbWish = await _wishRepository.GetById(id);

            return dbWish;
        }

        public async Task<IEnumerable<Wish>> GetWishes()
        {
            var dbWishes = await _wishRepository.GetAll();

            return dbWishes;
        }

        public async Task<Wish> AddWish(string message)
        {
            var wishToAdd = new Wish
            {
                Content = message
            };

            await _wishRepository.Add(wishToAdd);

            return new Wish();
        }

        #endregion
    }
}
