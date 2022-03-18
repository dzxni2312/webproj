using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace Models
{
    [Table("Igra")]
    public class Igra
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [MaxLength(50)]
        public string Naziv { get; set; }

        [Required]
        [MaxLength(50)]
        public string Zanr { get; set; }
        
        [Required]
        [Range(1970,2022)]
        public int GodinaIzlaska { get; set; }

        [Required]
        [MaxLength(50)]
        public string Developer { get; set; }

        [Required]
        [MaxLength(50)]
        public string Publisher { get; set; }

        public List<Recenzija> Recenzije { get; set; }

        public List<Prodavnica> Prodavnice { get; set; }

        
       public List<Sysreq> Sysreqs { get; set; } 
    }
}