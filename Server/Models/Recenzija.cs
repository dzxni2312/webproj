using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    [Table("Recenzija")]
    public class Recenzija
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [Range(1,5)]
        public int Ocena { get; set; }

        [Required]
        [Range(1,250)]
        public int Duzina { get; set; }

        [Required]
        [MaxLength(1000)]

        public string Review {get ; set; }

        public Igra IgraFK { get; set; }

        public Korisnik KorisnikFK { get; set; }
    }
}