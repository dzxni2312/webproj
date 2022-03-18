using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    [Table("Prodavnica")]
    public class Prodavnica
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [Range(1,200)]
        public int CenaIgre { get; set; }

        [Required]
        [Range(0,1000000000)]
        public int KolicinaProdatih { get; set; }

        public Igra IgraFK { get; set; }
    }
}