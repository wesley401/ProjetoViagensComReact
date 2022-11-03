using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SiteViagensApi.Models;
using SiteViagensApi.Repository;
using SiteViagensApi.Repository.Interfaces;
using System;

namespace SiteViagensApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GuiaController : ControllerBase
    {
        private readonly IGuiaRepository _guiaRepository;
        public GuiaController(IGuiaRepository guiaRepository)
        {
            _guiaRepository = guiaRepository;
        }
        [HttpGet]
        public async Task< ActionResult<List<GuiaModel>>> BuscarTodosGuias()
        {
           List<GuiaModel> guias =  await _guiaRepository.BuscarTodosGuias();
            return Ok(guias);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<GuiaModel>>> BuscarPorId(int id)
        {
            GuiaModel guia = await _guiaRepository.BuscarPorId(id);
            return Ok(guia);
        }
        [HttpPost]
        public async Task<ActionResult<GuiaModel>> Cadastrar([FromBody] GuiaModel guiaModel)
        {
            GuiaModel guia = await _guiaRepository.Adicionar(guiaModel);
            return Ok(guia); 
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<GuiaModel>> Atualizar([FromBody] GuiaModel guiaModel, int id)
        {
            guiaModel.Id = id;
            GuiaModel guia = await _guiaRepository.Atualizar(guiaModel, id);
            return Ok(guia);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<GuiaModel>> Deletar(int id)
        {
           
            bool apagado  = await _guiaRepository.Apagar( id);
            return Ok(apagado);
        }
    }
}
