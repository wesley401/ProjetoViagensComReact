using Microsoft.EntityFrameworkCore;
using SiteViagensApi.Models;

namespace SiteViagensApi.Data.Map
{
    public class ViagemMap : IEntityTypeConfiguration<ViagemModel>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<ViagemModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Destino).IsRequired().HasMaxLength(1000);
            builder.Property(x => x.Origem).IsRequired().HasMaxLength(1000);
            builder.Property(x => x.Status).IsRequired();
        }
    }
}
