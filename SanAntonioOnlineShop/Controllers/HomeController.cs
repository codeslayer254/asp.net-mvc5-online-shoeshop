using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SanAntonioOnlineShop.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Cart()
        {
            ViewBag.Message = "Your cart page.";

            return View();
        }

        public ActionResult Checkout()
        {
            ViewBag.Message = "Your checkout page.";

            return View();
        }

        public ActionResult Details()
        {
            ViewBag.Message = "Your Details page.";

            return View();
        }

        public ActionResult Shopgrid()
        {
            ViewBag.Message = "Your Shopgrid page.";

            return View();
        }

        public ActionResult Shoplist()
        {
            ViewBag.Message = "Your Shoplist page.";

            return View();
        }

        public ActionResult Wishlist()
        {
            ViewBag.Message = "Your Wishlist page.";

            return View();
        }
    }
}