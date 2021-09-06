using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using ParkingSample.Data.Models;

namespace ParkingSample.Data
{
    public class DataRepository : IDataRepository
    {
        private readonly string _connectionString;

        public DataRepository (IConfiguration configuration)
        {
            _connectionString = configuration["ConnectionString:DefaultConnection"];
        }

        public UserInfo getUserInfo(string email)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                return connection.QueryFirst<UserInfo>("SELECT TOP 1 * FROM USERINFO;");
            }
        }
    }
}
