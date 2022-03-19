import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AdvanceTableComponent } from './advance-table/advance-table.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AdvanceTableComponent,
    PaginationComponent,
    BreadcrumbComponent,
  ],
  imports: [
    // BrowserModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AdvanceTableComponent,
    PaginationComponent,
    BreadcrumbComponent,
  ]
})
export class ComponentModule { }
