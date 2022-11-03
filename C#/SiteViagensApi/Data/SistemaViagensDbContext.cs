using Microsoft.EntityFrameworkCore;
using SiteViagensApi.Data.Map;
using SiteViagensApi.Models;

namespace SiteViagensApi.Data
{
    public class SistemaViagensDbContext : DbContext
    {
        public SistemaViagensDbContext(DbContextOptions<SistemaViagensDbContext> options)
            : base(options)
        {

        }
        public DbSet<UsuarioModel> Usuarios { get; set; }
        public DbSet<ViagemModel> Viagens { get; set; }
        public DbSet<GuiaModel> Guias { get; set; }
        public DbSet<VeiculoModel> Veiculos { get; set; }
        public DbSet<PassageiroModel> Passageiros { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UsuarioMap());
            modelBuilder.ApplyConfiguration(new ViagemMap());
            modelBuilder.ApplyConfiguration(new VeiculoMap());
            modelBuilder.ApplyConfiguration(new GuiaMap());
            modelBuilder.ApplyConfiguration(new PassageiroMap());
            base.OnModelCreating(modelBuilder);
        }
    }
}
