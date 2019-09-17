using System.Linq;
using Chat.WebAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace Chat.WebAPI.Controllers
{
    [Route("~/api/[controller]")]
    [ApiController]
    public class MessagesController : ChatController
    {
        private static int _messageId = 1;

        [HttpGet("{messageId}")]
        public IActionResult GetMessages([FromRoute] int messageId)
        {
            var messages = Messages
                .Where(m => m.Id > messageId)
                .ToList();

            return Ok(messages);
        }

        // post message
        [HttpPost]
        public IActionResult PostMessage(Message message)
        {
            var messageToPost = new Message
            {
                Id = _messageId++,
                Content = message.Content,
                SenderId = message.SenderId,
                Sender = Users.SingleOrDefault(u => u.Id == message.SenderId)
            };

            Messages.Add(messageToPost);

            return Ok(message.Id);
        }
    }
}