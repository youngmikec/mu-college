import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionManagerComponent } from './admission-manager.component';

describe('AdmissionManagerComponent', () => {
  let component: AdmissionManagerComponent;
  let fixture: ComponentFixture<AdmissionManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
