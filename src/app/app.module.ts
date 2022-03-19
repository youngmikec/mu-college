import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy, DatePipe } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentModule } from './component/component.module';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

import { 
  AppModalService,
  AuthService,
  ApiService,
  AuthGuard,
  EnvService,
  UploadModalService,
  SidebarService,
  TableService, 
} from './services';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  imports: [
    // BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // CommonModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    ComponentModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'decreasing',
      toastClass: 'alert alert-success alert-with-icon',
    }),
  ],
  providers: [
    AppModalService,
    AuthService,
    ApiService,
    AuthGuard,
    EnvService,
    UploadModalService,
    SidebarService,
    TableService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
