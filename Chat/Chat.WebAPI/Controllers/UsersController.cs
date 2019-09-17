using System.Linq;
using Chat.WebAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace Chat.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ChatController
    {
        private static int _userId = 1;

        // get all
        [HttpGet]
        public IActionResult GetUsers()
        {
            return Ok(Users);
        }

        // get by id
        [HttpGet("{id}")]
        public ActionResult<User> GetUser(int id)
        {
            return Users.SingleOrDefault(u => u.Id == id);
        }

        // post user
        [HttpPost]
        public IActionResult PostUser(User user)
        {
            var userToPost = new User
            {
                Id = _userId++,
                Username = user.Username
            };

            Users.Add(userToPost);

            return Ok(userToPost);
        }
    }
}