using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Constellation.Server.Models;

namespace Constellation.Server.Service
{
    public class StatusService
    {
        public Status GetStatus()
        {
            return Status.CurrentStatus();
        } 
    }
}
