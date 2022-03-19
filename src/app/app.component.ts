import { Component, OnInit } from '@angular/core';
import { SidebarService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mu-college';
  showSidebar: boolean = false;

  constructor(private sidebarService: SidebarService){

  }

  ngOnInit(): void {
    this.sidebarService.getDisplayStatus().subscribe({
      next: (res: boolean) => {
        this.showSidebar = res;
      }
    })
  }

}
