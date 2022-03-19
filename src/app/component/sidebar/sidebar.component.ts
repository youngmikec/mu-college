// import { Component, OnInit } from '@angular/core';



//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../services';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  sub: any[] | null;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'business_chart-bar-32', class: '', sub: null },

  {
    path: '/admission', title: 'Admission', icon: 'users_single-02', class: 'parent-nav',
    sub: [
      { path: '/people/users', title: 'Users', icon: 'users_circle-08', class: '' },
      { path: '/people/upgrade', title: 'Upgrade', icon: 'users_single-02', class: '' },
    ]
  },

  {
    path: '/admin/package', title: 'Staff', icon: 'ui-1_email-85', class: 'parent-nav',
    sub: [
      { path: '/crm/mail', title: 'Mail', icon: 'users_single-02', class: '' },
    ]
  },

  // {
  //   path: '/admin/shipment', title: 'Shipment', icon: 'ui-1_email-85', class: 'parent-nav',
  //   sub: [
  //     { path: '/crm/mail', title: 'Mail', icon: 'users_single-02', class: '' },
  //   ]
  // },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(
    // private authService: AuthService
    ) {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
   }

  ngOnInit() {
  }

  // logout() {
  //   this.authService.userLogOut();
  // }

  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
