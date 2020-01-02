using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TwoDoitPlayWebApp.Models;
using TwoDoitPlayWebApp.MiddleWares;
namespace TwoDoitPlayWebApp.Controllers
{
	public class StoreController : Controller
	{

		[HttpGet("")]
		[HttpGet("/index")]
		public IActionResult Index()
		{
			return View();
		}

		[HttpGet("/privacy")]
		public IActionResult Privacy()
		{
			return View();
		}

		[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
		public IActionResult Error()
		{
			return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
		}

		[HttpPost]
		public async Task<IActionResult> Filter(string searhString)
		{
			if (!string.IsNullOrWhiteSpace(searhString))
			{
				return View();
			}
			return View();
		}


		[HttpGet("/categoryone/{id?}")]
		public IActionResult CategoryOne(string id)
		{
			Models.ItemViewModel itemModel = new ItemViewModel();
			if (id != null)
			{
				itemModel.Id = id;
				itemModel.Name = "Fishes";
				itemModel.Provider = "FishProvider";
				itemModel.SubCategory = "Fantasy";
				var currentHttpContext = new CurrentHttpContext(HttpContext);
				itemModel.LogoUrl = Url.Content("~/images/examples/lots-of-fish-639x470.jpg");//Path.Combine(currentHttpContext.GetBaseUrl(), "images", "examples", "lots-of-fish-639x470.jpg"); //+ Url.Content("~/images/lots-of-fish-639x470.jpg");
				itemModel.AgeCategory = 12;
				itemModel.Price = 50.02M;
				return View("CategoryOne", itemModel);
			}
			return View("CategoryOne");
		}

		[HttpGet("/categorytwo/{id?}")]
		public IActionResult CategoryTwo()
		{
			return View("CategoryTwo");
		}
		[HttpGet("/categorythree/{id?}")]
		public IActionResult CategoryThree()
		{
			return View("CategoryThree");
		}
	}
}
