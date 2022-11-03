using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SiteViagensApi.Models;
using SiteViagensApi.Repository.Interfaces;

namespace SiteViagensApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VeiculoController : ControllerBase
    {
        private readonly IVeiculoRepository _veiculoRepository;
        public VeiculoController(IVeiculoRepository veiculoRepository)
        {
            _veiculoRepository = veiculoRepository;
        }
        [HttpGet]
        public async Task< ActionResult<List<VeiculoModel>>> BuscarTodosVeiculos()
        {
           List<VeiculoModel> veiculos =  await _veiculoRepository.BuscarTodosVeiculos();
            return Ok(veiculos);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<VeiculoModel>>> BuscarPorId(int id)
        {
            VeiculoModel veiculo = await _veiculoRepository.BuscarPorId(id);
            return Ok(veiculo);
        }
        [HttpPost]
        public async Task<ActionResult<VeiculoModel>> Cadastrar([FromBody] VeiculoModel veiculoModel)
        {
            VeiculoModel veiculo = await _veiculoRepository.Adicionar(veiculoModel);
            return Ok(veiculo); 
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<VeiculoModel>> Atualizar([FromBody] VeiculoModel veiculoModel, int id)
        {
            veiculoModel.Id = id;
            VeiculoModel veiculo = await _veiculoRepository.Atualizar(veiculoModel, id);
            return Ok(veiculo);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<VeiculoModel>> Deletar(int id)
        {
           
            bool apagado  = await _veiculoRepository.Apagar( id);
            return Ok(apagado);
        }
    }
}
