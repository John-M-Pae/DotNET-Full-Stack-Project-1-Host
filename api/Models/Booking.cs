namespace Project_1_Web_API.Models
{
    public class Booking
    {
        public int BookingNumber { get; set; }

        public int PassengerId { get; set; }
        public virtual Passenger Passenger { get; set; }

        public int FlightId { get; set; }
        public virtual Flight Flight { get; set; }
    }
}
