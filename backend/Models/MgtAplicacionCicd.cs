using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("MgtAplicacionCICD")]
    public partial class MgtAplicacionCicd
    {
        [Key]
        public int IdAplicacion { get; set; }
        public string CodAplicacion { get; set; } = null!;
        public string Descripcion { get; set; } = null!;
        public string NombreCorto { get; set; } = null!;
        public string PdpUsuarioCreacion { get; set; } = null!;
        public DateTime PdpFechaCreacion { get; set; }
        public string PdpUsuarioUltimaModificacion { get; set; } = null!;
        public DateTime PdpFechaUltimaModificacion { get; set; }
        public bool? PdpEstado { get; set; }
        public string PdpUltimaTransaccion { get; set; } = null!;
        public string PdpUltimaPcCliente { get; set; } = null!;
    }
}
