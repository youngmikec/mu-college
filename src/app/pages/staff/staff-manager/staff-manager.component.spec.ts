import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffManagerComponent } from './staff-manager.component';

describe('StaffManagerComponent', () => {
  let component: StaffManagerComponent;
  let fixture: ComponentFixture<StaffManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
