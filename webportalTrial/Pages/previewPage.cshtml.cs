// File: Pages/previewPage.cshtml.cs
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.Linq;

namespace webportalTrial.Pages
{
    public class previewPageModel : PageModel
    {
        public List<string> EmployeeFiles { get; set; } = new();
        public List<string> PostAuditFiles { get; set; } = new();

        public void OnGet()
        {
            var empFiles = HttpContext.Session.GetString("EmployeeFiles") ?? "";
            EmployeeFiles = empFiles.Split(';', System.StringSplitOptions.RemoveEmptyEntries).ToList();

            var auditFiles = HttpContext.Session.GetString("PostAuditFiles") ?? "";
            PostAuditFiles = auditFiles.Split(';', System.StringSplitOptions.RemoveEmptyEntries).ToList();
        }
    }
}
