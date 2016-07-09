using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SanAntonioOnlineShop.Models
{
    public class SampleData : DropCreateDatabaseIfModelChanges<SanAntonioDataEntities>
    {
        protected override void Seed(SanAntonioDataEntities context)
        {

            new List<Product>
            {
                new Product { Name = "Gucci Handbag", Category = "Gucci Handbag", Brand = "Gucci Handbag", imagePath = "img/product/fashion/13.jpg", Sex = "Gucci Handbag", Price = 8.99M },
                new Product { Name = "Gucci Handbag", Category = "Gucci Handbag", Brand = "Gucci Handbag", imagePath = "img/product/fashion/14.jpg", Sex = "Gucci Handbag", Price = 8.99M },
                new Product { Name = "Gucci Handbag", Category = "Gucci Handbag", Brand = "Gucci Handbag", imagePath = "img/product/fashion/18.jpg", Sex = "Gucci Handbag", Price = 8.99M },
                new Product { Name = "Gucci Handbag", Category = "Gucci Handbag", Brand = "Gucci Handbag", imagePath = "img/product/fashion/12.jpg", Sex = "Gucci Handbag", Price = 8.99M },
                new Product { Name = "Gucci Handbag", Category = "Gucci Handbag", Brand = "Gucci Handbag", imagePath = "img/product/fashion/20.jpg", Sex = "Gucci Handbag", Price = 8.99M },
                new Product { Name = "Gucci Handbag", Category = "Gucci Handbag", Brand = "Gucci Handbag", imagePath = "img/product/fashion/21.jpg", Sex = "Gucci Handbag", Price = 8.99M },
                new Product { Name = "Gucci Handbag", Category = "Gucci Handbag", Brand = "Gucci Handbag", imagePath = "img/product/fashion/12.jpg", Sex = "Gucci Handbag", Price = 8.99M },
                new Product { Name = "Gucci Handbag", Category = "Gucci Handbag", Brand = "Gucci Handbag", imagePath = "img/product/fashion/17.jpg", Sex = "Gucci Handbag", Price = 8.99M },
                new Product { Name = "Gucci Handbag", Category = "Gucci Handbag", Brand = "Gucci Handbag", imagePath = "img/product/fashion/15.jpg", Sex = "Gucci Handbag", Price = 8.99M },
                new Product { Name = "Gucci Handbag", Category = "Gucci Handbag", Brand = "Gucci Handbag", imagePath = "img/product/fashion/19.jpg", Sex = "Gucci Handbag", Price = 8.99M },
                new Product { Name = "Gucci Handbag", Category = "Gucci Handbag", Brand = "Gucci Handbag", imagePath = "img/product/fashion/12.jpg", Sex = "Gucci Handbag", Price = 8.99M },
                new Product { Name = "Gucci Handbag", Category = "Gucci Handbag", Brand = "Gucci Handbag", imagePath = "img/product/fashion/20.jpg", Sex = "Gucci Handbag", Price = 8.99M },
                new Product { Name = "Gucci Handbag", Category = "Gucci Handbag", Brand = "Gucci Handbag", imagePath = "img/product/fashion/21.jpg", Sex = "Gucci Handbag", Price = 8.99M },
                new Product { Name = "Gucci Handbag", Category = "Gucci Handbag", Brand = "Gucci Handbag", imagePath = "img/product/fashion/18.jpg", Sex = "Gucci Handbag", Price = 8.99M },

            }.ForEach(a => context.Products.Add(a));
        }
    }
}