using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace cmebWebPortal.Pages
{
    public class createRequestModel : PageModel
    {
        public async Task<IActionResult> OnPostAsync()
        {
            // Simulate asynchronous work to resolve CS1998 warning
            await Task.CompletedTask;

            // Let's assume your file upload logic is already here...

            // After saving uploaded files, store paths to TempData
            TempData["EmpPdfPath"] = "/uploads/emp_upload_001.pdf";     // from file-uploader4
            TempData["AuditPdfPath"] = "/uploads/audit_upload_001.pdf"; // from file-uploader7

            // Then redirect to preview page
            return RedirectToPage("previewPage");
        }
    }

}
