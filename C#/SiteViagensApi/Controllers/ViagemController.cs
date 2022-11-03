using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SiteViagensApi.Models;
using SiteViagensApi.Repository.Interfaces;

namespace SiteViagensApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ViagemController : ControllerBase
    {
        private readonly IViagemRepository _viagemRepository;
        public ViagemController(IViagemRepository viagemRepository)
        {
            _viagemRepository = viagemRepository;
        }
        [HttpGet]
        public async Task<ActionResult<List<ViagemModel>>> BuscarTodasViagens()
        {
            List<ViagemModel> viagens = await _viagemRepository.BuscarTodasViagens();
            return Ok(viagens);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<ViagemModel>>> BuscarPorId(int id)
        {
            ViagemModel viagem = await _viagemRepository.BuscarPorId(id);
            return Ok(viagem);
        }
        [HttpPost]
        public async Task<ActionResult<ViagemModel>> Cadastrar([FromBody] ViagemModel viagemModel)
        {
            ViagemModel viagem = await _viagemRepository.Adicionar(viagemModel);
            return Ok(viagem);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<ViagemModel>> Atualizar([FromBody] ViagemModel viagemModel, int id)
        {
            viagemModel.Id = id;
            ViagemModel viagem = await _viagemRepository.Atualizar(viagemModel, id);
            return Ok(viagem);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<ViagemModel>> Deletar(int id)
        {

            bool apagado = await _viagemRepository.Apagar(id);
            return Ok(apagado);
        }
    }
}
