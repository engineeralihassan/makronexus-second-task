import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTasksComponent } from './update-tasks.component';

describe('UpdateTasksComponent', () => {
  let component: UpdateTasksComponent;
  let fixture: ComponentFixture<UpdateTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTasksComponent]
    });
    fixture = TestBed.createComponent(UpdateTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
