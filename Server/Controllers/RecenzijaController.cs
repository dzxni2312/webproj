using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Models;

namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RecenzijaController : ControllerBase
    {
        public SajtContext Context { get; set; }

        public RecenzijaController(SajtContext context)
        {
            Context = context;
        }

        [Route("DodajRecenziju/{ocena}/{duzina}/{review}/{idIgre}/{username}")]
        [HttpPost]
        public async Task<ActionResult> DodajRecenziju(int ocena,int duzina, string review, int idIgre, string username)
        {
            if (ocena < 1 || ocena > 10)
            {
                return BadRequest("Unesite broj izmedju 1 i 10!");
            }
            if (duzina < 1 || duzina > 250)
            {
                return BadRequest("Unesite broj izmedju 1 i 250!");
            }
             if (string.IsNullOrWhiteSpace(review) || review.Length>1000)
            {
                return BadRequest("Vasa recenzija nije validna!");
            }

            if (idIgre <= 0)
            {
                return BadRequest("Niste uneli igru!");
            }
            if (string.IsNullOrWhiteSpace(username) || username.Length>50)
            {
                return BadRequest("Niste uneli odgovarajuce korisnicko ime!");
            }

            var igra = Context.Igre.Where(p => p.ID == idIgre).FirstOrDefault();
            var korisnik = Context.Korisnici.Where(p => p.Username == username).FirstOrDefault();
            if(korisnik == null)
            {
                return Forbid("Dati korisnik ne postoji.Morate se registrovati!");
            }
            var recenzijaPostoji = Context.Recenzije.Where(p => p.IgraFK == igra && p.KorisnikFK == korisnik).FirstOrDefault();
            if(recenzijaPostoji != null)
            {
                return BadRequest("Korisnik je vec uneo recenziju za odabranu igru!");
            }
            try
            {
                Recenzija r = new Recenzija
                {
                    Ocena = ocena,
                    Duzina = duzina,
                    Review = review,
                    IgraFK = igra,
                    KorisnikFK = korisnik
                };
                Context.Recenzije.Add(r);
                await Context.SaveChangesAsync();

                var recenzije = await Context.Recenzije.Where(p => p.IgraFK == igra).ToListAsync();
                double prosekocena = 0;
                double prosekduzina = 0;
                int b=0;
                foreach (var p in recenzije)
                {
                    prosekocena+=p.Ocena;
                    prosekduzina+=p.Duzina;
                    b++;
                }
                prosekocena=prosekocena/b;
                prosekduzina=prosekduzina/b;   
                double prosecnaOcena = Math.Round(prosekocena,2,MidpointRounding.ToEven);
                double prosecnaDuzina = Math.Round(prosekduzina,2,MidpointRounding.ToEven);
                var pomObj = new {igra.ID,igra.Naziv,igra.Zanr,igra.GodinaIzlaska,igra.Developer,igra.Publisher,prosecnaOcena,prosecnaDuzina};

                return Ok(pomObj);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("ObrisiRecenziju/{idIgre}/{username}")]
        [HttpDelete]
        public async Task<ActionResult> ObrisiRecenziju(int idIgre, string username)
        {
            if (idIgre <= 0)
            {
                return BadRequest("Nepostojeca igra!");
            }
            if (string.IsNullOrWhiteSpace(username))
            {
                return BadRequest("Niste uneli odgovarajuce korisnicko ime!");
            }

            var igra = Context.Igre.Where(p => p.ID == idIgre).FirstOrDefault();
            var korisnik = Context.Korisnici.Where(p => p.Username == username).FirstOrDefault();

            if(korisnik == null)
            {
                return BadRequest("Dati korisnik ne postoji.Morate se registrovati!");
            }

            try
            {
                var recenzija = await Context.Recenzije.Where(p => p.IgraFK == igra && p.KorisnikFK == korisnik).FirstOrDefaultAsync();
                if(recenzija == null)
                {
                    return BadRequest("Korisnik nije uneo recenziju za odabranu igru!");
                }
                Context.Recenzije.Remove(recenzija);
                await Context.SaveChangesAsync();
                return Ok("Uspešno izbrisana recenzija");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
