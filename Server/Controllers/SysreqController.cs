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
    public class SysreqController : ControllerBase
    {
        public SajtContext Context { get; set; }

        public SysreqController(SajtContext context)
        {
            Context = context;
        }

        [Route("PreuzmiSysreq/{idIgre}")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiSysReq(int idIgre)
        {
            if(idIgre <= 0)
            {
                return BadRequest("Nepostojeca igra!");
            }
            
            try
            {
                var igra = Context.Igre.Where(p => p.ID == idIgre).FirstOrDefault();
                var sysreqs = await Context.Sysreqs.Where(p => p.IgraFK == igra).ToListAsync();
                return Ok(sysreqs);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            } 
        }
        
    }
}
