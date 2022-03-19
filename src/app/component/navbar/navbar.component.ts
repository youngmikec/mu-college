import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  sidebarState: boolean = false;
  constructor(
    private sidebarService: SidebarService,
  ) { }

  ngOnInit(): void {
    this.sidebarService.getDisplayStatus().subscribe({
      next: (res: boolean) => {
        this.sidebarState = res;
      }
    })
  }

  toggleSideBar(){
    this.sidebarState = !this.sidebarState;
    this.sidebarService.setDisplayState(this.sidebarState);
  }

}
