using SiteViagensApi.Models;

namespace SiteViagensApi.Repository.Interfaces
{
    public interface IVeiculoRepository
    {
        Task<List<VeiculoModel>> BuscarTodosVeiculos();
        Task<VeiculoModel> BuscarPorId(int id);
        Task<VeiculoModel> Adicionar(VeiculoModel veiculo);
        Task<VeiculoModel> Atualizar(VeiculoModel veiculo, int id);
        Task<bool> Apagar(int id);
    }
}
