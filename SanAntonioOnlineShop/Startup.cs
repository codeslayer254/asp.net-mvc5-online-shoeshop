using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SanAntonioOnlineShop.Startup))]
namespace SanAntonioOnlineShop
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
