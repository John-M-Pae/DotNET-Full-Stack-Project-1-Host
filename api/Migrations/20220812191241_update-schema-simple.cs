using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project_1_Web_API.Migrations
{
    public partial class updateschemasimple : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Passengers_Flights_FlightId",
                table: "Passengers");

            migrationBuilder.DropIndex(
                name: "IX_Passengers_FlightId",
                table: "Passengers");

            migrationBuilder.RenameColumn(
                name: "FlightId",
                table: "Passengers",
                newName: "Age");

            migrationBuilder.RenameColumn(
                name: "BookingNumber",
                table: "Passengers",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "FlightId",
                table: "Flights",
                newName: "Id");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Passengers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Passengers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Job",
                table: "Passengers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "Passengers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Passengers");

            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Passengers");

            migrationBuilder.DropColumn(
                name: "Job",
                table: "Passengers");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "Passengers");

            migrationBuilder.RenameColumn(
                name: "Age",
                table: "Passengers",
                newName: "FlightId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Passengers",
                newName: "BookingNumber");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Flights",
                newName: "FlightId");

            migrationBuilder.CreateIndex(
                name: "IX_Passengers_FlightId",
                table: "Passengers",
                column: "FlightId");

            migrationBuilder.AddForeignKey(
                name: "FK_Passengers_Flights_FlightId",
                table: "Passengers",
                column: "FlightId",
                principalTable: "Flights",
                principalColumn: "FlightId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
