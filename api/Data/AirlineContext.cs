using Microsoft.EntityFrameworkCore;
using Project_1_Web_API.Models;

namespace Project_1_Web_API.Data
{
    public class AirlineContext : DbContext
    {
        public AirlineContext(DbContextOptions<AirlineContext> options)
            : base(options) { }
        public DbSet<Passenger>? Passengers { get; set; }
        public DbSet<Flight>? Flights { get; set; }

        protected override void OnModelCreating(ModelBuilder model)
        {
            model.Entity<Booking>()
                .HasKey(book => book.BookingNumber);

            model.Entity<Booking>()
                .HasOne(book => book.Passenger)
                .WithMany(pas => pas.Bookings)
                .HasForeignKey(book => book.PassengerId);

            model.Entity<Booking>()
                .HasOne(book => book.Flight)
                .WithMany(flgt => flgt.Bookings)
                .HasForeignKey(book => book.FlightId);
        }

        public DbSet<Project_1_Web_API.Models.Booking>? Booking { get; set; }
    }
}
