import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDetailsListComponent } from './teacher-details-list.component';

describe('TeacherDetailsListComponent', () => {
  let component: TeacherDetailsListComponent;
  let fixture: ComponentFixture<TeacherDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherDetailsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
