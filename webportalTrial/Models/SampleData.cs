using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace webportalTrial.Models
{
    static class SampleData
    {
        public static List<SampleOrder> Orders = new List<SampleOrder>()
        {
            new SampleOrder
            {
             TrackingNumber=100024152,
             MDAs="Ministry of Finance & Public Services",
             RequestType="Job Evaluation",
             Status= "In Progress",
             StartDate=new DateTime(2025,3,15),
             EndDate=new DateTime(),
             PriorityLevel="Medium",
             UpdateRequest="No",
             CommentsReason=""
            },
            new SampleOrder
            {
             TrackingNumber=200024152,
             MDAs="Ministry of Finance & Public Services",
             RequestType="Job Analysis",
             Status= "In Progress",
             StartDate=new DateTime(2025,2,13),
             EndDate=new DateTime(),
             PriorityLevel="Medium",
             UpdateRequest="No",
             CommentsReason=""
            },
            new SampleOrder
            {
             TrackingNumber=300024152,
             MDAs="Ministry of Justice",
             RequestType="Post Audit",
             Status= "Completed",
             StartDate=new DateTime(2024,1,13),
             EndDate=new DateTime(2024,5,15),
             PriorityLevel="High",
             UpdateRequest="No",
             CommentsReason=""
            
            }
        };
    }
}