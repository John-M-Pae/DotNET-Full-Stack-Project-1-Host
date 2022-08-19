using Project_1_Web_API.Models;

namespace Project_1_Web_API.DataTransferObjects
{
    public class FlightDTO
    {
        public DateTime DepartureTime { get; set; }
        public string DepartureAirport { get; set; }
        public DateTime ArrivalTime { get; set; }
        public string ArrivalAirport { get; set; }
        public int MaxCapacity { get; set; }

        public Flight DatabaseModel()
        {
            return new Flight()
            {
                DepartureTime = DepartureTime,
                DepartureAirport = DepartureAirport,
                ArrivalTime = ArrivalTime,
                ArrivalAirport = ArrivalAirport,
                MaxCapacity = MaxCapacity,

                Bookings = new List<Booking>()
            };
        }
    }
}
