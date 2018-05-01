using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Nancy.Hosting.Self;

namespace Constellation.Server
{
    class Program
    {
        static void Main(string[] args)
        {
            Program constellation = new Program();
            constellation.setupWebServer();
        }

        /// <summary>
        /// Initialize Web Server
        /// </summary>
        public void setupWebServer()
        {
            var uri = new Uri("http://localhost:7000");
            HostConfiguration hostConfiguration = new HostConfiguration();
            hostConfiguration.UrlReservations.CreateAutomatically = true;
            using (var host = new NancyHost(hostConfiguration, uri))
            {
                Console.WriteLine("Starting Constellation on  " + uri);
                host.Start();
                Console.WriteLine("Constellation running on  " + uri);
                Console.WriteLine("Press any [Enter] to close the host.");
                Console.ReadLine();
            }
        }
    }
}
