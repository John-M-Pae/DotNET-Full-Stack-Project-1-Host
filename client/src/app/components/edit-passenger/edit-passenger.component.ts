import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Passenger } from 'src/app/models/passenger';
import { PassengerService } from 'src/app/services/passenger.service';

@Component({
  selector: 'app-edit-passenger',
  templateUrl: './edit-passenger.component.html',
  styleUrls: ['./edit-passenger.component.css']
})
export class EditPassengerComponent implements OnInit {
  id!: number;
  pas!: Passenger;
  editForm!: FormGroup;

  constructor(
    private rout: ActivatedRoute,
    private router: Router,
    private passengerService: PassengerService
  ) { }

  ngOnInit(): void {
    this.rout.queryParams.subscribe(param => {
      this.id = param['pasId'];
    });
    this.passengerService.getById(this.id).subscribe(pasById => {
      this.pas = pasById;
    });
    this.editForm = new FormGroup({
      id: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      job: new FormControl(''),
    });
  }

  get formControls() {return this.editForm.controls;}

  submit(): void {
    this.passengerService.updatePassenger(this.editForm.value).subscribe((res: any) => {
      console.log('passsenger info updated.');
      this.router.navigateByUrl('passengers');
    });
  }

}
