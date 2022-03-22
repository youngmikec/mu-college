import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionMutateComponent } from './admission-mutate.component';

describe('AdmissionMutateComponent', () => {
  let component: AdmissionMutateComponent;
  let fixture: ComponentFixture<AdmissionMutateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionMutateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionMutateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
