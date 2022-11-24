using backend.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("cadenaConexion");

//
const string CorsPolicyName = "_myCorsPolicy";

//builder.Services.AddCors(options
//=> options.AddPolicy(name: CorsPolicyName, builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));
builder.Services.AddCors(options => options.AddPolicy(CorsPolicyName, policy => {
    policy.WithOrigins("http://localhost:3000");
    }));

//

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<RELEASEContext>(options => options.UseSqlServer(connectionString));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors();

app.MapGet("api/aplicaciones", 
    async (RELEASEContext db) => await db.MgtAplicacionCICD.OrderBy(x => x.NombreCorto).ToListAsync())
    .RequireCors(CorsPolicyName);

app.Run();
