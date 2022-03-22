import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  addForm: FormGroup | any;
  loading: boolean = false;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) {
    this.initializeForm();
   }

  ngOnInit(): void {
  }

  initializeForm(): void {
    this.addForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      // userType: ['SENDER', Validators.required],
    })
  }

  async onSubmit() {
    this.loading = true;
    const payload = this.addForm?.value;
    // const currentElm = $('button.hovering.ld-over');
    // currentElm.addClass('running');
    if(this.addForm?.valid){
      console.log('got here')
      this.authService.postLogin(payload, '').subscribe({
        complete: () => {
          this.loading = false;
        },
        next: (res: any) => {
          if(res.data){
            this.loading = false;
            this.showNotification(`Login successful<br/>Welcome! Maduka University College Dashboard`);
          }else{
            this.loading = false;
            this.showNotification(res.errors[0].message);
          }
        },
        error: (error: any) => {
          this.loading = false;
          this.showNotification(error);
        }
      })
      
      
    }else {
      console.log('form is invalild')
      // this.addForm?.controls.email.markAsTouched();
      // this.addForm?.controls.password.markAsTouched();
    }
  }

  showNotification(message: string | undefined) {
    this.toastr.show(`<span class="fa ui-1_bell-53"></span> <b>${message}</b>`, '', {
      timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: 'alert alert-primary alert-with-icon',
    });
  }

}
