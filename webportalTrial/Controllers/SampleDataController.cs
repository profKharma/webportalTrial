using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using webportalTrial.Models;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace webportalTrial.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SampleDataController : ControllerBase
    {
        [HttpGet("GetPendingRequests")]
        public IActionResult GetPendingRequests()
        {
            var pendingRequests = SampleData.Orders.Where(o => o.Status == "In Progress").ToList();
            return Ok(pendingRequests);
        }
    }
}