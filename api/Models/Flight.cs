namespace Project_1_Web_API.Models
{
    public class Flight
    {
        public int Id { get; set; }
        public DateTime DepartureTime { get; set; }
        public string DepartureAirport { get; set; }
        public DateTime ArrivalTime { get; set; }
        public string ArrivalAirport { get; set; }
        public int MaxCapacity { get; set; }

        // Relational properties
        public virtual ICollection<Booking>? Bookings { get; set; }

        // Not stored data
        public int PassengersBooked => Bookings?.Count ?? 0;
    }
}
