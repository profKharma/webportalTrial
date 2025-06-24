// File: Controllers/FileUploaderController.cs
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;

public class FileUploaderController : Controller
{
    [HttpPost]
    public IActionResult Upload(IFormFile myFile, string context)
    {
        if (myFile != null && myFile.Length > 0)
        {
            var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
            if (!Directory.Exists(uploadsFolder))
                Directory.CreateDirectory(uploadsFolder);

            var fileName = Path.GetFileName(myFile.FileName);
            var filePath = Path.Combine(uploadsFolder, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                myFile.CopyTo(stream);
            }

            // Store file path in session by context
            var sessionKey = context == "postAudit" ? "PostAuditFiles" : "EmployeeFiles";
            var files = HttpContext.Session.GetString(sessionKey) ?? "";
            files += "/uploads/" + fileName + ";";
            HttpContext.Session.SetString(sessionKey, files);

            return Json(new { success = true });
        }
        return Json(new { success = false });
    }
}
