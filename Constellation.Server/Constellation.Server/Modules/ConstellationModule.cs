using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Nancy;
namespace Constellation.Server.Modules
{
    public class ConstellationModule : NancyModule
    {
        private const string PATH_ROOT = "/api/constellation";
        private const string PATH_START = "/start";
        private const string PATH_STOP = "/stop";
        private const string PATH_PAUSE = "/pause";
        private const string PATH_RESUME = "/resume";

        public ConstellationModule() : base (PATH_ROOT)
        {
            Post[PATH_START] = StartProcess;
            Post[PATH_STOP] = StopProcess;
            Post[PATH_PAUSE] = PauseProcess;
            Post[PATH_RESUME] = ResumeProcess;
        }
        private dynamic StartProcess(dynamic arg)
        {
            //when success return statuscode OK
            //failed return with HttpStatusCode.BadRequest
            return new Response() { StatusCode = HttpStatusCode.OK };
        }
        private dynamic StopProcess(dynamic arg)
        {
            //when success return statuscode OK
            //failed return with HttpStatusCode.BadRequest
            return new Response() { StatusCode = HttpStatusCode.BadRequest };
        }
        private dynamic PauseProcess(dynamic arg)
        {
            //when success return statuscode OK
            //failed return with HttpStatusCode.BadRequest
            return new Response() { StatusCode = HttpStatusCode.OK };
        }
        private dynamic ResumeProcess(dynamic arg)
        {
            //when success return statuscode OK
            //failed return with HttpStatusCode.BadRequest
            return new Response() { StatusCode = HttpStatusCode.OK };
        }
    }
}
