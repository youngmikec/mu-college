import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Toast, ToastrService } from 'ngx-toastr';

import { DATASET } from '../../helpers';
import { TableAction, HeaderObject } from '../../models';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  formType: string = '';
  currentRecord: any;
  currentRecords: Array<any> = [];
  dataset: Array<any> = DATASET;
  tableActions: Array<TableAction> = [
    {icon: 'fa fa-eye', label: 'View', colorClass: 'success', action: ''},
    {icon: 'fa fa-pencil', label: 'Edit', action: ''},
    {icon: 'fa fa-trash-o', label: 'Delete', colorClass: 'danger', action: ''},
  ];

  tablePropValue: Array<HeaderObject> = [
    {prop: 'name', label: 'Name', sortable: {sort: true, asc: false}},
    {prop: 'age', label: 'Age', sortable: {sort: true, asc: false}},
    {prop: 'email', label: 'Email', sortable: {sort: false, asc: false}},
    {prop: 'gender', label: 'Gender', sortable: {sort: false, asc: false}},
    {prop: 'company', label: 'Company', sortable: {sort: false, asc: false}},
  ];

  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  openModal(size: string = 'xl', type: string, content: any = '', record: any = null): void {
    switch (type) {
      case 'create':
        this.formType = 'create';
        this.currentRecord = record;
        break;
      case 'edit':
        this.formType = 'edit';
        this.currentRecord = record;
        break;
      case "peep": 
        this.formType = 'peep';
        this.currentRecord = record;
        break;
      case "delete": 
        this.formType = 'delete';
        this.currentRecord = record;
        break;
      default:
        this.formType = 'create';
        this.currentRecord = record;
    }
    this.modalService.open(content, { size: size });
  }

}
