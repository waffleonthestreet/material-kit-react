using Dapper;
using Microsoft.Extensions.Configuration;
using ParkingSample.Data.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace ParkingSample.Data
{
    public class DataRepository : IDataRepository
    {
        private readonly string _connectionString;
        private readonly string _connectionString2;

        #region [Question]

        public DataRepository(IConfiguration configuration)
        {
            _connectionString = configuration["ConnectionStrings:DefaultConnection"];
            _connectionString2 = "Server=localhost;Database=QandA;Trusted_Connection=True;";
        }

        public Question GetQuestion(int questionId)
        {
            using (var connection = new SqlConnection(_connectionString) )
            {
                connection.Open();
                return connection.QueryFirstOrDefault<Question>("SELECT * FROM Question WHERE QuestionId = @QuestionId", new { QuestionId = questionId});
            }
        }

        public IEnumerable<Question> GetQuestions()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                return connection.Query<Question>(@"SELECT * FROM Question");
            }
        }

        public IEnumerable<Question> GetQuestionsBySearch(string search)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                return connection.Query<Question>(@"SELECT * FROM Question WHERE TITLE LIKE '%' + @Search + '%' OR CONTENT LIKE '%' + @Search + '%'", new { Search = search });
            }
        }

        public bool QuestionExists(int questionId)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                return connection.QueryFirst<bool>(@"SELECT CASE WHEN EXISTS (SELECT QuestionId FROM dbo.Question WHERE QuestionId = @QuestionId) THEN CAST (1 AS BIT) ELSE CAST (0 AS BIT) END AS Result", 
                    new { QuestionId = questionId });
            }
        }

        #endregion

        #region [User]

        public bool RegisterUser (UserInsert userInsert)
        {
            using (var connection = new SqlConnection(_connectionString2))
            {
                connection.Open();
                connection.Execute(@"INSERT INTO USERINFO (EMAIL, PASSWORD, USERNAME) VALUES (@Email, @Password, @UserName);", userInsert);
                return true;
            }

        }

        #endregion
    }
}
