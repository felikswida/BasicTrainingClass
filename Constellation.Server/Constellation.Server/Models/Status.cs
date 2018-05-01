using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Constellation.Server.Models
{
    [Serializable]
    public class Status
    {
        public string status { get; set; }
        public Status()
        {
            status = "IDLE";
        }
        public static Status CurrentStatus()
        {
            return new Status()
            {
                status = "IDLE",                
            };
        }
    }
}
