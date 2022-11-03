using Microsoft.EntityFrameworkCore;
using SiteViagensApi.Data;
using SiteViagensApi.Models;
using SiteViagensApi.Repository.Interfaces;
using System;

namespace SiteViagensApi.Repository
{
    public class GuiaRepository : IGuiaRepository
    {
        private readonly SistemaViagensDbContext _dbContext;
        public GuiaRepository(SistemaViagensDbContext sistemaTarefasDbContext)
        {
            _dbContext = sistemaTarefasDbContext;
        }
        public async Task<GuiaModel> BuscarPorId(int id)
        {
            return await _dbContext.Guias.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<GuiaModel>> BuscarTodosGuias()
        {
            return await _dbContext.Guias.ToListAsync();
        }
        public async Task<GuiaModel> Adicionar(GuiaModel guia)
        {
            await _dbContext.Guias.AddAsync(guia);
            await _dbContext.SaveChangesAsync();
            return guia;
        }

        public async Task<bool> Apagar(int id)
        {
            GuiaModel guiaPorId = await BuscarPorId(id);
            if (guiaPorId == null)
            {
                throw new Exception($"GuiaTuristico do ID:{id} não foi encontrado");
            }
            _dbContext.Guias.Remove(guiaPorId);
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<GuiaModel> Atualizar(GuiaModel guia, int id)
        {
            GuiaModel guiaPorId = await BuscarPorId(id);
            if (guiaPorId == null)
            {
                throw new Exception($"GuiaTuristico do ID:{id} não foi encontrado");
            }
            guiaPorId.Nome = guia.Nome;
            guiaPorId.Email = guia.Email;
            guiaPorId.Regiao = guia.Regiao;

            _dbContext.Guias.Update(guiaPorId);
            await _dbContext.SaveChangesAsync();
            return guiaPorId;
        }


    }
}
