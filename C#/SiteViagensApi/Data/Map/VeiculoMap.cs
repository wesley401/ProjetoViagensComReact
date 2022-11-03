using Microsoft.EntityFrameworkCore;
using SiteViagensApi.Models;

namespace SiteViagensApi.Data.Map
{
    public class VeiculoMap : IEntityTypeConfiguration<VeiculoModel>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<VeiculoModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Marca).IsRequired().HasMaxLength(1000);
            builder.Property(x => x.Modelo).IsRequired().HasMaxLength(1000);
            builder.Property(x => x.Placa).IsRequired();
        }
    }
}
