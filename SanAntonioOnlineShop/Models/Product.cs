using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SanAntonioOnlineShop.Models
{
    public class Product
    {
        public int ProductID { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string Brand { get; set; }
        public string imagePath { get; set; }
        public string Sex { get; set; }
        public decimal Price { get; set; }

        public virtual List<OrderDetail> OrderDetails { get; set; }
    }
}