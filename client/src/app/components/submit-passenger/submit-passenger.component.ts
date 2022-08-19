import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PassengerService } from 'src/app/services/passenger.service';

@Component({
  selector: 'app-submit-passenger',
  templateUrl: './submit-passenger.component.html',
  styleUrls: ['./submit-passenger.component.css']
})
export class SubmitPassengerComponent implements OnInit {
  public newPassengerForm!: FormGroup;

  constructor(private passengerService: PassengerService) { }

  ngOnInit(): void {
    this.newPassengerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      job: new FormControl(''),
    });
  }
  
  get formControls() {return this.newPassengerForm.controls;}

  submit() {
    this.passengerService.createNewPassenger(
      this.newPassengerForm.value
    ).subscribe();
  }

}
