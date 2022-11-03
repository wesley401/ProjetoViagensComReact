using Microsoft.EntityFrameworkCore;
using SiteViagensApi.Data;
using SiteViagensApi.Models;
using SiteViagensApi.Repository.Interfaces;

namespace SiteViagensApi.Repository
{
    public class VeiculoRepository : IVeiculoRepository
    {
        private readonly SistemaViagensDbContext _dbContext;
        public VeiculoRepository(SistemaViagensDbContext sistemaTarefasDbContext)
        {
            _dbContext = sistemaTarefasDbContext;
        }
        public async Task<VeiculoModel> BuscarPorId(int id)
        {
            return await _dbContext.Veiculos.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<VeiculoModel>> BuscarTodosVeiculos()
        {
            return await _dbContext.Veiculos.ToListAsync();
        }
        public async Task<VeiculoModel> Adicionar(VeiculoModel veiculo)
        {
            await _dbContext.Veiculos.AddAsync(veiculo);
            await _dbContext.SaveChangesAsync();
            return veiculo;
        }

        public async Task<bool> Apagar(int id)
        {
            VeiculoModel veiculoPorId = await BuscarPorId(id);
            if (veiculoPorId == null)
            {
                throw new Exception($"Veiculo do ID:{id} não foi encontrado");
            }
            _dbContext.Veiculos.Remove(veiculoPorId);
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<VeiculoModel> Atualizar(VeiculoModel veiculo, int id)
        {
            VeiculoModel veiculoPorId = await BuscarPorId(id);
            if (veiculoPorId == null)
            {
                throw new Exception($"Veiculo do ID:{id} não foi encontrado");
            }
            veiculoPorId.Modelo = veiculo.Modelo;
            veiculoPorId.Marca = veiculo.Marca;
            veiculoPorId.Placa = veiculo.Placa;

            _dbContext.Veiculos.Update(veiculoPorId);
            await _dbContext.SaveChangesAsync();
            return veiculoPorId;
        }


    }
}
