using System.ComponentModel.DataAnnotations;

namespace recTesting1.Models
{
    public class MDA
    {
        /*fields for the MDA Details Frame*/
        [Required(ErrorMessage = "This field is required")]
        [MaxLength(255)]
        public int Ministry { get; set; }

        [Required(ErrorMessage = "This field is required")]
        [MaxLength(255)]
        public int Department { get; set; }

        [Required(ErrorMessage = "This field is required")]
        [MaxLength(255)]
        public int Division { get; set; }

        [Required(ErrorMessage = "This field is required")]
        [MaxLength(255)]
        public int Unit { get; set; }

    }
}
