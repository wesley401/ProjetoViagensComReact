using Microsoft.EntityFrameworkCore;
using SiteViagensApi.Models;

namespace SiteViagensApi.Data.Map
{
    public class UsuarioMap : IEntityTypeConfiguration<UsuarioModel>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<UsuarioModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Nome).IsRequired().HasMaxLength(255);
            builder.Property(x => x.Login).IsRequired().HasMaxLength(150);
        }
    }
}
