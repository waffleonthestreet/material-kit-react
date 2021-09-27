using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ParkingSample.Data.Models
{
    public class UserInsert
    {
        public string UserName { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }


        public UserInsert(string userName, string email, string password)
        {
            UserName = userName;
            Email = email;
            Password = password;
        }

        public UserInsert(UserInput userInput)
        {
            UserName = userInput.FirstName + " " + userInput.LastName;
            Email = userInput.Email;
            Password = userInput.Password;
        }
    }
}
