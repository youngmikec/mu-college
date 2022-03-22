import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { AdmissionManagerComponent } from '../../pages/admission/admission-manager/admission-manager.component';
import { StaffManagerComponent } from '../../pages/staff/staff-manager/staff-manager.component';

const routes: Routes = [
  // { path: '**', redirectTo: 'dashboard' },
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: 'admission', component: AdmissionManagerComponent, 
    children:[ {path: '',   loadChildren: () => import('../../pages/admission/admission.module').then(m => m.AdmissionModule)}]
  },
  { path: 'staff', component: StaffManagerComponent, 
    children:[ {path: '',   loadChildren: () => import('../../pages/staff/staff.module').then(m => m.StaffModule)}]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
