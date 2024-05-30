import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudnetTaskListComponent } from './studnet-task-list.component';

describe('StudnetTaskListComponent', () => {
  let component: StudnetTaskListComponent;
  let fixture: ComponentFixture<StudnetTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudnetTaskListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudnetTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
