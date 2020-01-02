using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TwoDoitPlayWebApp.Models
{
	public class ItemViewModel
	{
		public string Id { get; set; }
		public string Name { get; set; }
		public string LogoUrl { get; set; }
		public string Provider { get; set; }
		public string SubCategory { get; set; }
		public decimal Price { get; set; }
		public int AgeCategory { get; set; }
	}
}
