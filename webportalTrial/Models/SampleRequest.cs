namespace cmebWebPortal.Models
{
    public class SampleRequest
    {
        public string MDA { get; set; }
        public string TrackingNumber { get; set; }
        public string RequestType { get; set; }
        public string Status { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string PriorityLevel { get; set; }
        public string Comments { get; set; }
    }
}
