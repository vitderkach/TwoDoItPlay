using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TwoDoitPlayWebApp.MiddleWares
{
	public class CurrentHttpContext
	{
		private HttpContext _httpContext;
		public CurrentHttpContext(HttpContext httpContext)
		{
			_httpContext = httpContext;
		}

		public string GetBaseUrl()
		{
			var request = _httpContext.Request;
			var host = request.Host.ToUriComponent();
			var pathBase = request.PathBase.ToUriComponent();
			return $"{request.Scheme}://{host}{pathBase}";
		}
	}
}
