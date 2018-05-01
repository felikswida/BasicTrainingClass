using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Nancy;

namespace Constellation.Server.Modules
{
    public class MainModule : NancyModule
    {
        public MainModule()
        {
            Get["/"] = parameters =>
            {
                return View["wwwroot/index.html"];
            };
        }
    }
}
