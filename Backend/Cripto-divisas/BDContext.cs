using Cripto_divisas.Models;
using Microsoft.EntityFrameworkCore;

namespace Cripto_divisas
{
    public class BDContext : DbContext

    {
        public BDContext(DbContextOptions<BDContext> options) : base(options)
        { }
        public DbSet<Usuario> Usuario { get; set; }
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Usuario>()..toTable("Usuario");
        //}
    }
}
