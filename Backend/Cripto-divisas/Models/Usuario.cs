using System.ComponentModel.DataAnnotations;

namespace Cripto_divisas.Models
{
    public class Usuario
    {
        [Key]
        public string usuarioId { get; set; }
        public string nombreUsuario { get; set; }
        public string email { get; set; }
        public string? contraseña { get; set; }
        public byte[] hashAlmacenado { get; set; }
        public byte[] salAlmacenada { get; set; }

    }
}
