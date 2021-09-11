using System.ComponentModel.DataAnnotations;

namespace MatchUp.Dtos.UserDtos
{
    public class UserLoginDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}