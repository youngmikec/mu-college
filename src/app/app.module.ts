import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';


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
  DEFAULT_TIMEOUT,
  ErrorInterceptor,
  JwtInterceptor,
  TimeoutInterceptor,
} from './services';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  imports: [
    BrowserModule,
    ApolloModule,
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
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: `${environment.CURRENT_URL}/graphql`
          })
        };
      },
      deps: [HttpLink],
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    [{ provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true }],
    [{ provide: DEFAULT_TIMEOUT, useValue: 30000 }],
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
