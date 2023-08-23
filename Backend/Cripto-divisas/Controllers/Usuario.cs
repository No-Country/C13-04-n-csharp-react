using Cripto_divisas.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Cripto_divisas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private BDContext con;
        public UsuarioController(BDContext conexion)
        {
            con = conexion;
        }
       
        [HttpPost("editarUsuario")]
        public ActionResult EditarUsuario(Usuario usuario)
        {
            using (var db = con.Database.BeginTransaction())
            {
                try
                {
                    con.Entry(usuario).State = EntityState.Modified;
                    con.SaveChanges();
                    db.Commit();
                }
                catch (Exception)
                {
                    db.Rollback();
                    throw;
                }
            }
            return Ok();
        }
      
        [HttpGet("obtenerUsuarioPorEmail/{email}")]
        public Usuario ObtenerUsuarioPorEmail(string email)
        {
            Usuario usuario = (from x in con.Usuario
                               where x.email == email
                               select x).FirstOrDefault();
            return usuario;
        }
        [HttpGet("obtenerUsuarioPorID/{id}")]
        public Usuario ObtenerUsuarioPorID(string id)
        {
            Usuario usuario = (from x in con.Usuario
                               where x.usuarioId == id
                               select x).FirstOrDefault();
            return usuario;
        }
        [HttpPost("crearCuenta")]
        public ActionResult CrearCuenta(Usuario usuario)
        {
            using (var db = con.Database.BeginTransaction())
            {
                try
                {
                    con.Add(usuario);
                    con.SaveChanges();
                    db.Commit();
                }
                catch (Exception)
                {
                    db.Rollback();
                    throw;
                }

            }
            return Ok();

        }
    }
}
