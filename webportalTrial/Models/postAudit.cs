using System.ComponentModel.DataAnnotations;

namespace webportalTrial.Models
{
    public class postAudit
    {

        [Required(ErrorMessage = "This field is required")]
        [MaxLength(255)]
        public String varianceJustification { get; set; }

        [Required(ErrorMessage = "This field is required")]
        [MaxLength(255)]
        public String genRemarks { get; set; }
    }
}
