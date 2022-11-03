using Microsoft.EntityFrameworkCore;
using SiteViagensApi.Data;
using SiteViagensApi.Models;
using SiteViagensApi.Repository.Interfaces;

namespace SiteViagensApi.Repository
{
    public class PassageiroRepository : IPassageiroRepository
    {
        private readonly SistemaViagensDbContext _dbContext;
        public PassageiroRepository(SistemaViagensDbContext sistemaTarefasDbContext)
        {
            _dbContext = sistemaTarefasDbContext;
        }
        public async Task<PassageiroModel> BuscarPorId(int id)
        {
            return await _dbContext.Passageiros.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<PassageiroModel>> BuscarTodosPassageiros()
        {
            return await _dbContext.Passageiros.ToListAsync();
        }
        public async Task<PassageiroModel> Adicionar(PassageiroModel passageiro)
        {
            await _dbContext.Passageiros.AddAsync(passageiro);
            await _dbContext.SaveChangesAsync();
            return passageiro;
        }

        public async Task<bool> Apagar(int id)
        {
            PassageiroModel passageiroPorId = await BuscarPorId(id);
            if (passageiroPorId == null)
            {
                throw new Exception($"Passageiro do ID:{id} não foi encontrado");
            }
            _dbContext.Passageiros.Remove(passageiroPorId);
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<PassageiroModel> Atualizar(PassageiroModel passageiro, int id)
        {
            PassageiroModel passageiroPorId = await BuscarPorId(id);
            if (passageiroPorId == null)
            {
                throw new Exception($"Passageiro do ID:{id} não foi encontrado");
            }
            passageiroPorId.Nome = passageiro.Nome;
            passageiroPorId.Cpf = passageiro.Cpf;
            passageiroPorId.Telefone = passageiro.Telefone;

            _dbContext.Passageiros.Update(passageiroPorId);
            await _dbContext.SaveChangesAsync();
            return passageiroPorId;
        }


    }
}
