import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalAttendenceComponent } from './approval-attendence.component';

describe('ApprovalAttendenceComponent', () => {
  let component: ApprovalAttendenceComponent;
  let fixture: ComponentFixture<ApprovalAttendenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalAttendenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalAttendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
