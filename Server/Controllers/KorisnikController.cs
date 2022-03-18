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
    public class KorisnikController : ControllerBase
    {
        public SajtContext Context { get; set; }

        public KorisnikController(SajtContext context)
        {
            Context = context;
        }

        [Route("DodajKorisnika/{username}")]
        [HttpPost]
        public async Task<ActionResult> DodajKorisnika(string username)
        {
            if(string.IsNullOrWhiteSpace(username) || username.Length>50)
            {
                return BadRequest("Unesite validno korisnicko ime!");
            }
            var korisnik = Context.Korisnici.Where(p => p.Username == username).FirstOrDefault();
            if(korisnik != null)
            {
                return BadRequest("Korisnik sa unetim korisnickim imenom vec postoji u bazi!");
            }

            try
            {
                Korisnik k = new Korisnik
                {
                    Username = username,
                };

                Context.Korisnici.Add(k);
                await Context.SaveChangesAsync();
                return Ok("Uspešno upisan novi korisnik!");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}