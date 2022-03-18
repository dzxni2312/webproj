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
    public class IgraController : ControllerBase
    {
        public SajtContext Context { get; set; }

        public IgraController(SajtContext context)
        {
            Context = context;
        }

        [Route("PreuzmiIgre")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiIgre()
        {
            try
            {
                return Ok(await Context.Igre.Select(p => new { p.ID, p.Naziv, p.Zanr, p.GodinaIzlaska, p.Developer, p.Publisher }).ToListAsync());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            } 
        }

    }
}
