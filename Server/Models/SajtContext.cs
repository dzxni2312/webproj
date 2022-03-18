using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class SajtContext : DbContext
    {
        public DbSet<Igra> Igre { get; set; }

        public DbSet<Recenzija> Recenzije { get; set; }

        public DbSet<Prodavnica> Prodavnice { get; set; }

        public DbSet<Sysreq> Sysreqs { get; set; }

        public DbSet<Korisnik> Korisnici { get; set; }

        public SajtContext(DbContextOptions options) : base(options)
        {
            
        }
    }
}