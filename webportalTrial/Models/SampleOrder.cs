using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace webportalTrial.Models {
    public class SampleOrder {
        public int TrackingNumber { get; set; }
        public string MDAs { get; set; }
        public string RequestType { get; set; }
        public string Status { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string PriorityLevel { get; set; }
        public string UpdateRequest { get; set; }
        public string CommentsReason { get; set; }
    }
}
