using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace MatchUp.Entities
{
    public class AppUser
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string UserName { get; set; }

        public Byte[] PasswordHash { get; set; }

        public Byte[] PasswordSalt { get; set; }
    }
}