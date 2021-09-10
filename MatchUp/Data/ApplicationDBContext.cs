using MatchUp.Entities;
using Microsoft.EntityFrameworkCore;

namespace MatchUp.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<AppUser> Users { get; set; }
    }
}