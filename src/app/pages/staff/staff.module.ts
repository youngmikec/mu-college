import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentModule } from '../../component/component.module';
import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';


@NgModule({
  declarations: [
    StaffComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentModule,
    StaffRoutingModule
  ]
})
export class StaffModule { }
