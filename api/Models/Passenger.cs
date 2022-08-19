using System.ComponentModel.DataAnnotations;

namespace Project_1_Web_API.Models
{
    public class Passenger
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string? Job { get; set; }
        public string Email { get; set; }
        public int Age { get; set; }

        // Relational properties
        public virtual ICollection<Booking>? Bookings { get; set; }

        // Not stored data
        public int FlightsBooked => Bookings?.Count() ?? 0;
        public string Name => LastName + ", " + FirstName;
    }
}
