import { Component, OnInit } from '@angular/core';
import { TableAction, HeaderObject } from '../models';
import { DATASET } from '../helpers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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


  constructor() { }

  ngOnInit(): void {
  }

}
