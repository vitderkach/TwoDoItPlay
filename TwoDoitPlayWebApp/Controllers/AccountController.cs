using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace TwoDoitPlayWebApp.Controllers
{
	
	public class AccountController : Controller
    {
		//[Route("[controller]/")]
		
		public IActionResult Index()
        {
			var n = RedirectToAction("Settings");


			return n;

        }

		//[HttpGet("/Actions")]
		public IActionResult Actions()
		{
			return View();
		}

		//[HttpGet("/Login")]
		public IActionResult Login()
		{
			return View();
		}

		//[HttpGet("/PaymentMethods")]
		public IActionResult PaymentMethods()
		{
			return View();
		}

		//[HttpGet("/Settings")]
		public IActionResult Settings()
		{
			return View();
		}

		//[HttpGet("/Subscriptions")]
		public IActionResult Subscriptions()
		{
			return View();
		}

		//[HttpGet("/WishList")]
		public IActionResult WishList()
		{
			return View();
		}
	}
}