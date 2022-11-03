using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SiteViagensApi.Models;
using SiteViagensApi.Repository.Interfaces;

namespace SiteViagensApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PassageiroController : ControllerBase
    {
        private readonly IPassageiroRepository _passageiroRepository;
        public PassageiroController(IPassageiroRepository passageiroRepository)
        {
            _passageiroRepository = passageiroRepository;
        }
        [HttpGet]
        public async Task< ActionResult<List<PassageiroModel>>> BuscarTodosPassageiros()
        {
           List<PassageiroModel> passageiros =  await _passageiroRepository.BuscarTodosPassageiros();
            return Ok(passageiros);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<PassageiroModel>>> BuscarPorId(int id)
        {
            PassageiroModel passageiro = await _passageiroRepository.BuscarPorId(id);
            return Ok(passageiro);
        }
        [HttpPost]
        public async Task<ActionResult<PassageiroModel>> Cadastrar([FromBody] PassageiroModel passageiroModel)
        {
            PassageiroModel passageiro = await _passageiroRepository.Adicionar(passageiroModel);
            return Ok(passageiro); 
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<PassageiroModel>> Atualizar([FromBody] PassageiroModel passageiroModel, int id)
        {
            passageiroModel.Id = id;
            PassageiroModel passageiro = await _passageiroRepository.Atualizar(passageiroModel, id);
            return Ok(passageiro);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<PassageiroModel>> Deletar(int id)
        {
           
            bool apagado  = await _passageiroRepository.Apagar( id);
            return Ok(apagado);
        }
    }
}
