using System.ComponentModel.DataAnnotations;

namespace webportalTrial.Models
{
    public class employeeInfo
    {
        [Required(ErrorMessage = "This field is required")]
        [MaxLength(255)]
        public int empType { get; set; }

        [Required(ErrorMessage = "This field is required")]
        [MaxLength(255)]
        public int empStatus { get; set; }

    }
}
