import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.css']
})
export class EditFlightComponent implements OnInit {
  id!: number;
  flgt!: Flight;
  editForm!: FormGroup;

  constructor(
    private rout: ActivatedRoute,
    private router: Router,
    private flightService: FlightService
  ) { }

  ngOnInit(): void {
    this.rout.queryParams.subscribe(param => {
      this.id = param['flgtId'];
    });
    this.flightService.getById(this.id).subscribe(flgtById => {
      this.flgt = flgtById;
    });
    this.editForm = new FormGroup({
      id: new FormControl('', Validators.required),
      departureTime: new FormControl('', Validators.required),
      departureAirport: new FormControl('', Validators.required),
      arrivalTime: new FormControl('', Validators.required),
      arrivalAirport: new FormControl('', Validators.required),
      maxCapacity: new FormControl('', Validators.required),
    });
  }

  get formControls() {return this.editForm.controls;}

  submit(): void {
    this.flightService.updateFlight(this.editForm.value).subscribe((res: any) => {
      console.log('flight info updates');
      this.router.navigateByUrl('flights');
    });
  }

}
