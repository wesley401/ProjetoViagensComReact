using SiteViagensApi.Models;

namespace SiteViagensApi.Repository.Interfaces
{
    public interface IPassageiroRepository
    {
        Task<List<PassageiroModel>> BuscarTodosPassageiros();
        Task<PassageiroModel> BuscarPorId(int id);
        Task<PassageiroModel> Adicionar(PassageiroModel passageiro);
        Task<PassageiroModel> Atualizar(PassageiroModel passageiro, int id);
        Task<bool> Apagar(int id);
    }
}
