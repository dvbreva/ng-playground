namespace Chat.WebAPI.Models
{
    public class Message
    {
        public int Id { get; set; }

        public string Content { get; set; }

        public int SenderId { get; set; }

        public User Sender { get; set; }
    }
}
