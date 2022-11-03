using Microsoft.EntityFrameworkCore;
using SiteViagensApi.Data;
using SiteViagensApi.Models;
using SiteViagensApi.Repository.Interfaces;

namespace SiteViagensApi.Repository
{
    public class ViagemRepository : IViagemRepository
    {
        private readonly SistemaViagensDbContext _dbContext;
        public ViagemRepository(SistemaViagensDbContext sistemaTarefasDbContext)
        {
            _dbContext = sistemaTarefasDbContext;
        }
        public async Task<ViagemModel> BuscarPorId(int id)
        {
            return await _dbContext.Viagens.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<ViagemModel>> BuscarTodasViagens()
        {
            return await _dbContext.Viagens.ToListAsync();
        }
        public async Task<ViagemModel> Adicionar(ViagemModel viagem)
        {
            await _dbContext.Viagens.AddAsync(viagem);
            await _dbContext.SaveChangesAsync();
            return viagem;
        }

        public async Task<bool> Apagar(int id)
        {
            ViagemModel viagemPorId = await BuscarPorId(id);
            if (viagemPorId == null)
            {
                throw new Exception($"Viagem do ID:{id} não foi encontrado");
            }
            _dbContext.Viagens.Remove(viagemPorId);
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<ViagemModel> Atualizar(ViagemModel viagem, int id)
        {
            ViagemModel viagemPorId = await BuscarPorId(id);
            if (viagemPorId == null)
            {
                throw new Exception($"Viagem do ID:{id} não foi encontrado");
            }
            viagemPorId.Origem = viagem.Origem;
            viagemPorId.Destino = viagem.Destino;
            viagemPorId.Preco = viagem.Preco;

            _dbContext.Viagens.Update(viagemPorId);
            await _dbContext.SaveChangesAsync();
            return viagemPorId;
        }
    }
}
