import { Component, OnInit, Input } from '@angular/core';

export interface PaginationLabelObject {
  showLabel?: boolean;
  showIcon?: boolean;
  prev?: string;
  next?: string;
  prevIcon?: string;
  nextIcon?: string;
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnInit {
  @Input()paginationLabel: PaginationLabelObject = {
    showIcon: false,
    showLabel: true,
    prev: 'prev',
    next: 'next',
    // font awesome class name
    prevIcon: 'fa fa-chevron-left',
    // nextIcon: 'fa fa-chevron-right',
    nextIcon: 'arrow_forward_ios',
  }
  currentPage: number = 1;
  pages: Array<number> = [1, 2, 3];

  constructor() { }

  ngOnInit(): void {
    console.log(this.paginationLabel);
  }

  // calls the next dataset or page
  next(): void {
    this.currentPage ++;
    if(this.currentPage > this.pages.length){
      this.currentPage = this.pages.length;
    };
    return;
  }

  // calls the previous dataset or page
  previous(): void {
    this.currentPage --;
    if(this.currentPage < 1){
      this.currentPage = 1;
    }
    return;
  }

}
