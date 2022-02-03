import { Routes, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginModel, RegisterModel } from '../models/register-model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signin="Login Form";

  login=new LoginModel();
  registerDetails: RegisterModel[]=[];

  constructor(

    private router: Router,
    private toaster:ToastrService
  ) { }

  ngOnInit() {
  }

  loginForm() {
    let isValid = false;
   
    this.registerDetails = JSON.parse(localStorage.getItem('registerDetails')) || [];
    this.registerDetails.forEach(element => {
      if (this.login.txtMobile == element.txtMobile  && this.login.txtPassword == element.txtPassword) {
        isValid = true;
      }
    });

    if (isValid) {
      this.toaster.success('Login Successful', 'Successful', {
        disableTimeOut: false,
        timeOut:3000

      });
      this.router.navigate(['/dashboard']);
    } else {
      this.toaster.warning('Please enter valid uname and pass', 'Warning', {
        disableTimeOut: false,
        timeOut:3000
      });
    }
  }

}
