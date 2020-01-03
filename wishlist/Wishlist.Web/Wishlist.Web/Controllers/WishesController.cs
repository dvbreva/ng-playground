using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Wishlist.Web.RequestResponseModels;
using Wishlist.Web.Services;

namespace Wishlist.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WishesController : ControllerBase
    {
        #region Protected Fields

        protected readonly IWishService _wishService;

        #endregion

        #region Public Constructors 

        public WishesController(IWishService wishService)
        {
            _wishService = wishService;
        }

        #endregion

        #region Public Methods

        // GET: api/Wishes
        [HttpGet]
        public async Task<IActionResult> GetWishes()
        {
            var result = await _wishService.GetWishes();

            return Ok(result);
        }

        // GET: api/Wishes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetWish(int id)
        {
            var wish = await _wishService.GetWish(id);

            if (wish == null)
            {
                return BadRequest();
            }

            return Ok(wish);
        }

        // POST: api/Wishes
        [HttpPost]
        public async Task<IActionResult> PostWish(PostWishRequest request)
        {
            await _wishService.AddWish(request.Content);

            return Ok();
        }

        #endregion
    }
}
