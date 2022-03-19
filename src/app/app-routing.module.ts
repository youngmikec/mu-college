import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

const routes: Routes = [
  { path: '',        redirectTo: 'login', pathMatch: 'full' },

  // { path: 'login',   loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  // { path: 'login-otp',              component: LoginOtpComponent },
  // { path: 'forgot-password',        component: ForgotPasswordComponent },

  { path: '',        component: AdminLayoutComponent,
    children: [
        { path: '',   loadChildren: () => import('./layout/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule) },
    ]},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: '**',       redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
