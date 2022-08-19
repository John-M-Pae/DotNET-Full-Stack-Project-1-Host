import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PassengersComponent } from './components/passengers/passengers.component';
import { FlightsComponent } from './components/flights/flights.component';
import { SubmitPassengerComponent } from './components/submit-passenger/submit-passenger.component';
import { SubmitFlightComponent } from './components/submit-flight/submit-flight.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditPassengerComponent } from './components/edit-passenger/edit-passenger.component';
import { EditFlightComponent } from './components/edit-flight/edit-flight.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengersComponent,
    FlightsComponent,
    SubmitPassengerComponent,
    SubmitFlightComponent,
    DashboardComponent,
    EditPassengerComponent,
    EditFlightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
