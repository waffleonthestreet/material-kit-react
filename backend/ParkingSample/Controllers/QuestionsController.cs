using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ParkingSample.Data;
using ParkingSample.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ParkingSample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private readonly IDataRepository _dataRepository;

        public QuestionsController(IDataRepository dataRepository)
        {
            _dataRepository = dataRepository;
        }

        //[HttpGet]
        //public IActionResult GetQuestions()
        //{
        //    return Redirect("~/Dashboard");
        //}

        [HttpGet]
        public IEnumerable<Question> GetQuestions()
        {
            var questions = _dataRepository.GetQuestions();
            return questions;
        }

        [HttpPost]
        public ActionResult<bool> InsertUser(UserInput userInput)
        {
            UserInsert userInsert = new UserInsert(userInput);

            var result = _dataRepository.RegisterUser(userInsert);

            return CreatedAtAction(nameof(InsertUser), true);
        }
    }
}
