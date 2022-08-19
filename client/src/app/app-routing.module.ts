import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditFlightComponent } from './components/edit-flight/edit-flight.component';
import { EditPassengerComponent } from './components/edit-passenger/edit-passenger.component';

import { FlightsComponent } from './components/flights/flights.component';
import { PassengersComponent } from './components/passengers/passengers.component';
import { SubmitPassengerComponent } from './components/submit-passenger/submit-passenger.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'passengers', component: PassengersComponent},
  {path: 'passengers/edit', component: EditPassengerComponent},
  {path: 'flights', component: FlightsComponent},
  {path: 'flights/edit', component: EditFlightComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
