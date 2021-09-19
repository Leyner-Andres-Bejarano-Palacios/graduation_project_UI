import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskmapListComponent } from './taskmap-list.component';

describe('TaskmapListComponent', () => {
  let component: TaskmapListComponent;
  let fixture: ComponentFixture<TaskmapListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskmapListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskmapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
