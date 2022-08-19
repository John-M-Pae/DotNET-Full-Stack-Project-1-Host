import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-submit-flight',
  templateUrl: './submit-flight.component.html',
  styleUrls: ['./submit-flight.component.css']
})
export class SubmitFlightComponent implements OnInit {
  public newFlightForm!: FormGroup

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.newFlightForm = new FormGroup({
      departureTime: new FormControl('', Validators.required),
      departureAirport: new FormControl('', Validators.required),
      arrivalTime: new FormControl('', Validators.required),
      arrivalAirport: new FormControl('', Validators.required),
      maxCapacity: new FormControl('', Validators.required),
    });
  }

  get formControls() {return this.newFlightForm.controls;}

  submit() {
    console.log(this.newFlightForm.value);
    this.flightService.createNewFlight(
      this.newFlightForm.value
    ).subscribe();
  }

}
