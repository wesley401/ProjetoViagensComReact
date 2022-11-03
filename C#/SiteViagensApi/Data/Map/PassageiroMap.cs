using Microsoft.EntityFrameworkCore;
using SiteViagensApi.Models;

namespace SiteViagensApi.Data.Map
{
    public class PassageiroMap : IEntityTypeConfiguration<PassageiroModel>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<PassageiroModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Nome).IsRequired().HasMaxLength(1000);
            builder.Property(x => x.Cpf).IsRequired().HasMaxLength(1000);
            builder.Property(x => x.Telefone).IsRequired().HasMaxLength(1000);
        }
    }
}
