using SiteViagensApi.Models;

namespace SiteViagensApi.Repository.Interfaces
{
    public interface IGuiaRepository
    {
        Task<List<GuiaModel>> BuscarTodosGuias();
        Task<GuiaModel> BuscarPorId(int id);
        Task<GuiaModel> Adicionar(GuiaModel guia);
        Task<GuiaModel> Atualizar(GuiaModel guia, int id);
        Task<bool> Apagar(int id);
    }
}
