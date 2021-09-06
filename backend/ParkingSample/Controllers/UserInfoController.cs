using Microsoft.AspNetCore.Mvc;
using ParkingSample.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ParkingSample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserInfoController : Controller
    {
        private readonly IDataRepository _dataRepository;

        public IActionResult Index()
        {
            return View();
        }
    }
}
