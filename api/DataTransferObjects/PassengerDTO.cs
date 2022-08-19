using Project_1_Web_API.Models;

namespace Project_1_Web_API.DataTransferObjects
{
    public class PassengerDTO
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string? Job { get; set; }
        public string Email { get; set; }
        public int Age { get; set; }

        public Passenger DatabaseModel()
        {
            return new Passenger()
            {
                FirstName = FirstName,
                LastName = LastName,
                Job = Job,
                Email = Email,
                Age = Age,
                Bookings = new List<Booking>()
            };
        }

    }
}
