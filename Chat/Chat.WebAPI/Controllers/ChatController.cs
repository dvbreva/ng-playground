using System.Collections.Generic;
using Chat.WebAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace Chat.WebAPI.Controllers
{
    public abstract class ChatController : ControllerBase
    {
        private static readonly List<Message> _messages = new List<Message>();
        private static readonly List<User> _users = new List<User>();

        protected List<Message> Messages => _messages;

        protected List<User> Users => _users;
    }
}