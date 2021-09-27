using ParkingSample.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ParkingSample.Data
{
    public interface IDataRepository
    {
        IEnumerable<Question> GetQuestions();

        IEnumerable<Question> GetQuestionsBySearch(string search);

        Question GetQuestion(int questionId);

        bool QuestionExists(int questionId);

        bool RegisterUser(UserInsert userInsert);
    }
}
