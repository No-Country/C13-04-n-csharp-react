using Cripto_divisas.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace Cripto_divisas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private BDContext con;
        public UsuarioController(BDContext conexion, IConfiguration configuration)
        {
            _configuration = configuration;
            con = conexion;
        }
       
       
        [HttpPost("login")]
        public IActionResult Login(string Email, string contraseña)
        {
            Usuario usuario = con.Usuario.FirstOrDefault(u => u.email == Email);
            if (usuario != null && VerificarContraseña(contraseña, usuario.hashAlmacenado, usuario.salAlmacenada))
            {
                var token = GenerarToken(usuario.email);
                return Ok(new { token });
            }
            return Unauthorized(); ;

        }
        private bool VerificarContraseña(string contraseña, byte[] hashAlmacenado, byte[] salAlmacenada)
        {

            using (var hmac = new HMACSHA512(salAlmacenada))
            {
                var hashCalculado = hmac.ComputeHash(Encoding.UTF8.GetBytes(contraseña));
                for (int i = 0; i < hashCalculado.Length; i++)
                {
                    if (hashCalculado[i] != hashAlmacenado[i])
                        return false;
                }
            }
            return true;
        }
        private string GenerarToken(string username)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
            new Claim(JwtRegisteredClaimNames.Sub, username),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
        };

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddHours(2),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
        [HttpPost("register")]
        public IActionResult RegistrarUsuario(string NombreUsuario ,string Email ,  string contraseña )
        {

            if (UsuarioYaExiste(Email))
            {
                return Conflict("El email ya está registrado.");
            }

            byte[] contraseñaHash, contraseñaSal;
            CrearContraseñaHash(contraseña, out contraseñaHash, out contraseñaSal);

            var nuevoUsuario = new Usuario
            {
                usuarioId= Guid.NewGuid().ToString(),
                nombreUsuario = NombreUsuario,
                email = Email,
                hashAlmacenado = contraseñaHash,
                salAlmacenada = contraseñaSal
            };

            con.Usuario.Add(nuevoUsuario);
            con.SaveChanges();

            return Ok();
        }

        // Métodos auxiliares

        private bool UsuarioYaExiste(string email)
        {
            return con.Usuario.Any(u => u.email == email);
        }

        private void CrearContraseñaHash(string contraseña, out byte[] hash, out byte[] sal)
        {
            using (var hmac = new HMACSHA512())
            {
                sal = hmac.Key;
                hash = hmac.ComputeHash(Encoding.UTF8.GetBytes(contraseña));
            }
        }
    }
}
