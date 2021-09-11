using System.ComponentModel.DataAnnotations;

namespace MatchUp.Dtos.UserDtos
{
    public class UserRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}