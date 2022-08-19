import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/app/models/passenger';
import { PassengerService } from 'src/app/services/passenger.service';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {

  passengers?: Passenger[];
  selected?: Passenger;
  newView = false;

  constructor(private passengerService: PassengerService) { }

  ngOnInit(): void {}

  focusOn(pas: Passenger): void {
    if (pas.id === this.selected?.id) {
      this.selected = undefined;
    }
    else {
      this.selected = pas;
    }
    console.log(this.selected);
  }

  addNew():void {
    this.newView = !this.newView;
  }

  getAllNames(): void {
    this.passengerService.getAll().subscribe(
      pas => this.passengers = pas
    );
  }

  removePassenger(id: number): void {
    this.passengerService.removePassenger(id).subscribe(() => {
      console.log('Passenger deleted.');});
  }

}
