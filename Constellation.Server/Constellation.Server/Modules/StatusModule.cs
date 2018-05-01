using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Constellation.Server.Models;
using Nancy;

namespace Constellation.Server.Modules
{
    public class StatusModule : NancyModule
    {
        private const string PATH_ROOT = "/api/status";
        private const string PATH_HOME = "/";
        

        public StatusModule() : base(PATH_ROOT)
        {
            Get[PATH_HOME] = GetCurrentStatus;
        }

        private dynamic GetCurrentStatus(dynamic parameters)
        {
            Console.WriteLine("GET STATUS");
            Status  response  = Status.CurrentStatus();
            return Response.AsJson(response);
        }
    }
}
