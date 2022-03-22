import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AdmissionApplication, User } from '../../../../models';
// import {  } from '../../../../providers';

@Component({
  selector: 'app-admission-mutate',
  templateUrl: './admission-mutate.component.html',
  styleUrls: ['./admission-mutate.component.scss']
})
export class AdmissionMutateComponent implements OnInit {
  @Input()formType: string = 'create';
  @Input()record: AdmissionApplication | null = null;
  @Output() changed = new EventEmitter <boolean> ();
  //@ts-ignore
  addForm: FormGroup;
  //@ts-ignore
  updateForm: FormGroup;
  loading: boolean = false;
  searching: boolean = false;
  fileTypesArray: Array<string> = [];
  userName: string = '';
  userDetail: User | any;
  

  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
  ) { 
    this.createAddForm();
    this.createUpdateForm();
  }

  ngOnInit(): void {
    if(this.formType == 'edit' && this.record){
      this.setUpdateForm();
    }
  }

  createAddForm(){
    this.addForm = this.formBuilder.group({
      academicYear: ['', Validators.required],
      fileTypes: [[], Validators.required],
      givenNames: ['', Validators.required],
      middleName: ['', Validators.required],
      surname: ['', Validators.required],
      institution: ['', Validators.required],
      level: ['', Validators.required],
      user: ['', Validators.required],
    });
  }

  createUpdateForm(){
    this.updateForm = this.formBuilder.group({
      academicYear: [''],
      fileTypes: [[]],
      givenNames: [''],
      middleName: [''],
      surname: [''],
      institution: [''],
      level: [''],
      user: [''],
    });
  }

  setUpdateForm(){
    this.updateForm.patchValue({
      academicYear: this.record?.academicYear ? this.record?.academicYear : '',
      fileTypes: this.record?.fileTypes ? this.record?.fileTypes : '',
      givenNames: this.record?.givenNames ? this.record?.givenNames : '',
      middleName: this.record?.middleName ? this.record?.middleName : '',
      surname: this.record?.surname ? this.record?.surname : '',
      institution: this.record?.institution ? this.record?.institution : '',
      level: this.record?.level ? this.record?.level : '',
      user: this.record?.user ? this.record?.user?.id : '',
    })
  }

  onSubmit(){
    this.loading = true;
    const payload = this.addForm.value;
    
    if(this.addForm.invalid){
      this.showNotification('Fill in all the required inputs');
    }

    //Api call to create admission application
  }

  onUpdate(){
    this.loading = true;
    const payload = this.updateForm.value;

    // Api call the update admission Application
  }

  searchMember = async (e: string | any) => {
    this.searching = true;
    e.preventDefault();
    const type = 'someOrganizations';
    // this.users.queryReocrds(type, 'asc', 'createdAt', this.userName).subscribe({
    //   next: (res: any) => {
    //     if(res.data[type]['edges'].length > 0){
    //       this.searching = false;
    //       this.userDetail = res.data[type]['edges'][0]['node'];
    //       console.log('user', this.userDetail);   
    //       this.showNotification(`${res.data[type]['edges'].length} Member Found`)
    //       if(this.formType === 'create'){
    //         this.addForm.patchValue({
    //           user: this.userDetail.id,
    //           userName: `${this.userDetail.userName}`,
    //           userDetail:  this.userDetail.id,
    //         })
    //       }else{
    //         this.updateForm.patchValue({
    //           user: this.userDetail.id,
    //           userName: `${this.userDetail.userName}`,
    //           userDetail:  this.userDetail.id, 
    //         })
    //       }
    //     }else{
    //       this.searching = false;
    //       this.showNotification("No member found for the provided name");
    //     }
    //   }
    // })
  }

  addDocument({ target }: any){
    if(target){
      this.fileTypesArray.push(target.value);
      this.showNotification('Filetype added');
    } 
    return
  }

  showNotification(message: string) {
    this.toastr.show(`<span class="now-ui-icons ui-1_bell-53"></span> <b>${message}</b>`, '', {
      timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: 'alert alert-success alert-with-icon',
    });
  }

}
