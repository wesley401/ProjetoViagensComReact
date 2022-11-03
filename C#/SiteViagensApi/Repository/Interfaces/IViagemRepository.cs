using SiteViagensApi.Models;

namespace SiteViagensApi.Repository.Interfaces
{
    public interface IViagemRepository
    {
        Task<List<ViagemModel>> BuscarTodasViagens();
        Task<ViagemModel> BuscarPorId(int id);
        Task<ViagemModel> Adicionar(ViagemModel viagem);
        Task<ViagemModel> Atualizar(ViagemModel viagem, int id);
        Task<bool> Apagar(int id);
    }
}
