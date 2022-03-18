using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    [Table("Sysreq")]
    public class Sysreq
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [MaxLength(100)]
        public string CPU { get; set; }

        [Required]
        [MaxLength(100)]
        public string GPU { get; set; }

         [Required]
         [Range(1,256)]
        public int RAM { get; set; }
        
        [Required]
        [Range(1,10000)]
        public int FreeSpace { get; set; }

        public Igra IgraFK { get; set; }
    }
}