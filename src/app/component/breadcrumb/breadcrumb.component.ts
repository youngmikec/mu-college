import { Component, OnInit, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() any: any;
  urlPath: string = '';
  currentPage: string | undefined | null = '';

  constructor(
    private router: Router,
    ) {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
      ).subscribe({
        next: (res: NavigationEnd) => {
          this.urlPath = res?.url;
          this.currentPage = this.getCurrentPage(this.urlPath);
      }
    })
  }
  
  ngOnInit(): void {
  }

  getCurrentPage(url: string): string | undefined{
    return url.split('/').pop();
  }

}
