using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using cmebWebPortal.Models;

namespace cmebWebPortal.Controllers
{
    public class SampleSubmissionsController : Controller
    {
        public IActionResult GetSampleRequests()
        {
            var sampleRequests = new List<SampleRequest>
            {
                new SampleRequest { MDA = "MDA1", TrackingNumber = "12345", RequestType = "Type1", Status = "Pending", StartDate = DateTime.Now.AddDays(-10), EndDate = DateTime.Now.AddDays(10), PriorityLevel = "High", Comments = "Sample comment 1" },
                new SampleRequest { MDA = "MDA2", TrackingNumber = "12346", RequestType = "Type2", Status = "Approved", StartDate = DateTime.Now.AddDays(-20), EndDate = DateTime.Now.AddDays(5), PriorityLevel = "Medium", Comments = "Sample comment 2" },
                new SampleRequest { MDA = "MDA3", TrackingNumber = "12347", RequestType = "Type3", Status = "Rejected", StartDate = DateTime.Now.AddDays(-30), EndDate = DateTime.Now.AddDays(15), PriorityLevel = "Low", Comments = "Sample comment 3" },
                new SampleRequest { MDA = "MDA4", TrackingNumber = "12348", RequestType = "Type4", Status = "Pending", StartDate = DateTime.Now.AddDays(-5), EndDate = DateTime.Now.AddDays(20), PriorityLevel = "High", Comments = "Sample comment 4" },
                new SampleRequest { MDA = "MDA5", TrackingNumber = "12349", RequestType = "Type5", Status = "Approved", StartDate = DateTime.Now.AddDays(-15), EndDate = DateTime.Now.AddDays(25), PriorityLevel = "Medium", Comments = "Sample comment 5" }
            };

            return Json(sampleRequests);
        }
    }
}