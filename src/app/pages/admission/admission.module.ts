import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdmissionComponent } from './admission.component';
import { ComponentModule } from '../../component/component.module';
import { AdmissionRoutingModule } from './admission-routing.module';
import { AdmissionMutateComponent } from './admission-manager/admission-mutate/admission-mutate.component';
import { AdmissionDetailComponent } from './admission-manager/admission-detail/admission-detail.component';


@NgModule({
  declarations: [
    AdmissionComponent,
    AdmissionMutateComponent,
    AdmissionDetailComponent,
  ],
  imports: [
    CommonModule,
    ComponentModule,
    FormsModule,
    ReactiveFormsModule,
    AdmissionRoutingModule,
  ],
  exports: [
    AdmissionMutateComponent,
  ]
})
export class AdmissionModule { }
