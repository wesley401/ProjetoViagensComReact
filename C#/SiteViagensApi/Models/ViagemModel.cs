namespace SiteViagensApi.Models
{
    public class ViagemModel
    {
        public int Id { get; set; }
        public string Origem { get; set; }
        public string Destino { get; set; }
        public double Preco { get; set; }
        public string Status { get; set; }

    }
}
