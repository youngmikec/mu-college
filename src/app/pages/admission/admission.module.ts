import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionComponent } from './admission.component';
import { ComponentModule } from '../../component/component.module';
import { AdmissionRoutingModule } from './admission-routing.module';


@NgModule({
  declarations: [
    AdmissionComponent,
  ],
  imports: [
    CommonModule,
    ComponentModule,
    AdmissionRoutingModule,
  ]
})
export class AdmissionModule { }
