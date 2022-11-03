using Microsoft.EntityFrameworkCore;
using SiteViagensApi.Models;

namespace SiteViagensApi.Data.Map
{
    public class GuiaMap : IEntityTypeConfiguration<GuiaModel>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<GuiaModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Email).IsRequired().HasMaxLength(1000);
            builder.Property(x => x.Nome).IsRequired().HasMaxLength(1000);
            builder.Property(x => x.Regiao).IsRequired().HasMaxLength(1000);
        }
    }
}
