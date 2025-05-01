using System.ComponentModel.DataAnnotations;

namespace recTesting1.Models
{
    public class postInfo
    {
        /*fields for the MDA Details Frame*/
        [Required(ErrorMessage = "This field is required")]
        [MaxLength(255)]
        public int postNum { get; set; }

        [Required(ErrorMessage = "This field is required")]
        [MaxLength(255)]
        public String postGrade { get; set; }


        [Required(ErrorMessage = "This field is required")]
        [MaxLength(255)]
        public String postLevel { get; set; }


        [Required(ErrorMessage = "This field is required")]
        [MaxLength(255)]
        public String postTitle { get; set; }

        [Required(ErrorMessage = "This field is required")]
        [MaxLength(255)]
        public String Location { get; set; }

        [Required(ErrorMessage = "This field is required")]
        [MaxLength(255)]
        public int postType { get; set; }

        [Required(ErrorMessage = "This field is required")]
        [MaxLength(255)]
        public int postStatus { get; set; }

    }
}
