using Cripto_divisas;
using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHttpClient();
//agrengo configuracion BD

builder.Services.AddDbContext<BDContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("BDContext"));
});

var app = builder.Build();
using (var scope = app.Services.CreateScope()){ var context = scope.ServiceProvider.GetRequiredService<BDContext>();
    context.Database.Migrate();
}
    // Configure the HTTP request pipeline.
    // if (app.Environment.IsDevelopment())
    // {
        app.UseSwagger();
        app.UseSwaggerUI();
    //}
app.UseCors(builder => builder
// .WithOrigins("https://reactjs13-cripto-divisas-jaardila-3.vercel.app")
// .WithOrigins("http://localhost:3000") 
.AllowAnyOrigin()
.AllowAnyHeader()
.AllowAnyMethod()
);
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
