using System.ComponentModel;

namespace SiteViagensApi.Enuns
{
    public enum StatusViagem
    {
        [Description("A viajar!")]
        Aviajar = 1,
        [Description("Viajando!")]
        Viajando = 2,
        [Description("Viajou!")]
        Concluido =3,
    }
}
