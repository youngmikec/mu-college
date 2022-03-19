import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../../component/component.module';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { AdmissionManagerComponent } from '../../pages/admission/admission-manager/admission-manager.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AdmissionManagerComponent,
  ],
  imports: [
    CommonModule,
    ComponentModule,
    AdminLayoutRoutingModule
  ]
})
export class AdminLayoutModule { }
