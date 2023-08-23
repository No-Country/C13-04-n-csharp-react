using System.ComponentModel.DataAnnotations;

namespace Cripto_divisas.Models
{
    public class Usuario
    {
        [Key]
        public string usuarioId { get; set; }
        public string nombreUsuario { get; set; }
        public string email { get; set; }
        public byte[] contraseña { get; set; }
        public byte[] Key { get; set; }
        public byte[] Vector { get; set; }

    }
}
