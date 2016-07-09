using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SanAntonioOnlineShop.Models
{
    public class Cart
    { 
        public string CartId { get; set; }
        public int ProductId { get; set; }
        public int Count { get; set; }
        public System.DateTime DateCreated { get; set; }
        public virtual Product Product { get; set; }
    }
}