using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using backend.Models;

namespace backend.Data
{
    public partial class RELEASEContext : DbContext
    {
        public RELEASEContext()
        {
        }

        public RELEASEContext(DbContextOptions<RELEASEContext> options)
            : base(options)
        {
        }

        public virtual DbSet<MgtAplicacionCicd> MgtAplicacionCICD { get; set; } = null!;
    }
}
