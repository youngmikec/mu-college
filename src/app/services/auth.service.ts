import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { User } from '../models';
import { EnvService } from './env.service';
import { getLocalStorage, setLocalStorage, removeLocalStorage, cleanObject } from '../helpers';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn = false;
  token = null;
  depth = 0;
  user: User;
  LOGIN_POST_MUTATION = gql`
    mutation Login($data: LoginInput!){
      login(data: $data){
        accessToken
        user{
          id
          email
          phone
        }
      }
    }
  `;


  constructor(
    private apollo: Apollo,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private env: EnvService) {
    this.user = this.getUser();
    this.user = !this.user ? this.getUser() : this.user;
  }

  // async postLogin(data: {[keys: string]: string | any}, element: any): Promise<LoginResponse> {
  postLogin(loginData: {[keys: string]: string | any}, element: any): Observable<any> {
    const payload = cleanObject(loginData);
    // console.log('auth.service: payload =>', payload, this.env.API_URL + '/admin/login');
    const login = this.apollo.mutate({
      mutation: this.LOGIN_POST_MUTATION,
      variables: {
        data: {
          email: loginData.email,
          password: loginData.password
        }
      }
    }).pipe(
      tap((res: any) => {
            if (res.data) {
              const loginResponse = Object.assign({ login: { accessToken: "", user: null }}, res.data);
              this.token = loginResponse.login.accessToken;
              this.user = loginResponse.login.user;
              this.isLoggedIn = true;
              // this.showNotification(`Login successful<br/>Welcome! Maduka University College Dashboard`);
              if (!setLocalStorage('token', this.token, null)) {
                console.error('Error storing record token');
              }
              if (!setLocalStorage('user', this.user, null)) {
                console.error('Error storing record user');
              }
              return res;
            }else{
              this.showNotification(res.errors[0].message);
              return res;
            }

      })
    );
    return login;
    // .subscribe({
    //   next: (res: any) => {
    //   },
    //   error: (error: any) => {
    //     if(error) {
    //       element.removeClass('running');
    //       this.showNotification(error.message);
    //       this.token = null;
    //       this.isLoggedIn = false;
    //     }
    //   } 
    // });

  }


  showNotification(message: string | undefined) {
    this.toastr.show(`<span class="fa ui-1_bell-53"></span> <b>${message}</b>`, '', {
      timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: 'alert alert-primary alert-with-icon',
    });
  }

  register(data: any) {
    const payload = cleanObject(data);
    return this.http.post(this.env.API_URL + '/admin', payload);
  }

  getUser(): any {
    if (!!this.user) return this.user;
    return getLocalStorage('user');
  }

  public async getToken(): Promise<any> {
    try {
      const token = await getLocalStorage('token');
      if (token != null) {
        this.token = token;
        this.isLoggedIn = true;
      } else {
        this.token = null;
        this.isLoggedIn = false;
      }
      return token;
    } catch (e) {
      console.log(e);
      alert(JSON.stringify(e));
      return null;
    }
  }

  userLogOut(): void {
    this.isLoggedIn = false;
    this.token = null;
    removeLocalStorage('user');
    removeLocalStorage('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    return (!!getLocalStorage('user')) ? true : false;
  }

}
