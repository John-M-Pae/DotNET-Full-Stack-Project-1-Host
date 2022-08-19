import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitPassengerComponent } from './submit-passenger.component';

describe('SubmitPassengerComponent', () => {
  let component: SubmitPassengerComponent;
  let fixture: ComponentFixture<SubmitPassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitPassengerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
