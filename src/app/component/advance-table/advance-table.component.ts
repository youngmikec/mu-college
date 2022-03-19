import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeaderObject, TableAction } from '../../models';


@Component({
  selector: 'app-advance-table',
  templateUrl: './advance-table.component.html',
  styleUrls: ['./advance-table.component.scss']
})
export class AdvanceTableComponent implements OnInit {
  @Input() searchable: boolean = false;
  @Input() ApiSource: string = '';
  @Input() headers: Array<HeaderObject> = []
  @Input() paginate: boolean = false;
  @Input() responsive: boolean = false;
  @Input() dataset: Array<any> = [];
  props: Array<string | any> = [];

  @Input() actions: Array<TableAction> = [];

  paginationObject = {
    showIcon: true, 
    showLabel: false,
    prev: 'prev',
    next: 'next',
    prevIcon: 'fa fa-chevron-left',
    nextIcon: 'fa fa-chevron-right',
  }
  
  constructor() { }

  ngOnInit(): void {
    this.props = this.headers.map((item: any) => item.prop);
  }

  compareValue(value: string, entity: any): boolean {
    let result: any = '';
    if(typeof entity === 'undefined'){
      result = false;
    }

    if(typeof entity === 'string'){
      result = entity.includes(value) ? true : false;
    }
    
    if(typeof entity === 'number'){
      result = entity.toString().includes(value) ? true : false;
    }

    if(typeof entity === 'boolean'){
      result = entity.toString().includes(value) ? true : false;
    }
    
    if(typeof entity === 'object'){
      const childValues = Object.entries(entity);
      if(childValues.length <= 0){
        // entity is an array
        for(let i = 0; i < entity.length; i++){
          result = this.compareValue(value, entity[i]);
          if(result) break;
        }
      }else{
        // entity is not an array
        for(let key in entity){
          result = this.compareValue(value, entity[key]);
          if(result) break; 
        }
      }
    }
    return result;
  }

  searchRecords($event: any): void {
    const searchTerm: string = $event.target.value;
    this.dataset = this.dataset.filter((item: any) => {
      const Values: any = Object.values(item);
      let result = this.compareValue(searchTerm, Values);
      console.log('result', result);
      return result ? true : false;
    });
    console.log('filtered Item', this.dataset);
  }

  sortColumn(header: HeaderObject | any): void {
    let { prop, sortable: { asc }} = header; 
    
    this.dataset = this.dataset.sort((a: any, b: any): any => {
      if(typeof a[prop] === 'string'){
        if(asc){
          const nameA = a[prop].toUpperCase();
          const nameB = b[prop].toUpperCase();
          header.sortable.asc = !asc;
          return + (nameA < nameB);
        }else{
          const nameA = a[prop].toUpperCase();
          const nameB = b[prop].toUpperCase();
          header.sortable.asc = !asc;
          return - (nameA > nameB);
        }
      }
      // if(asc == false && typeof a[prop] === 'string'){
      // }
      if(asc == true && typeof a[prop] === 'number'){
        header.sortable.asc = !asc;
        return a[prop] - b[prop];
        
      }
      if(asc == false && typeof a[prop] === 'number'){
        header.sortable.asc = !asc;
        // if(a[prop] + b[prop]){
          //   return 1;
        // }
        return b[prop] - a[prop];
      }
      // if equal
      return 0;
    });
  }

}
