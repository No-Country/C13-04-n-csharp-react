using Cripto_divisas.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Numerics;
using System.Reflection.Emit;
using System.Reflection.PortableExecutable;

namespace Cripto_divisas
{
    public class ConexionDB : DbContext
    {
        public ConexionDB()
        {

        }
     
        
        public ConexionDB(DbContextOptions<ConexionDB> options): base(options)
        {
        }
        public DbSet<Usuario> Usuario { get; set; }
       
    }
}

