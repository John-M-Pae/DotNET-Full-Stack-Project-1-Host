using Microsoft.EntityFrameworkCore;

namespace Project_1_Web_API.Models
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options)
            : base(options){ }

        public DbSet<TodoItem> TodoItems { get; set; } = null!;
    }
}
