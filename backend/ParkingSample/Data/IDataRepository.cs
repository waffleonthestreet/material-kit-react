using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ParkingSample.Data.Models;

namespace ParkingSample.Data
{
    interface IDataRepository
    {
        UserInfo getUserInfo(string email);
    }
}
