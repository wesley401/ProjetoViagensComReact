using SiteViagensApi.Enuns;

namespace SiteViagensApi.Models
{
    public class UsuarioModel
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Login { get; set; }
        public string Senha { get; set; }
        public StatusViagem Status { get; set; }
    }
}
