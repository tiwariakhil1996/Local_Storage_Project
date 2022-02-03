import { RegisterModel} from './../models/register-model';
import { Component, OnInit } from '@angular/core';
import { parse } from 'querystring';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerDetail =new RegisterModel();
  registerDetails: RegisterModel[]=[];
  
  constructor() { }

  ngOnInit() {
  }
  
  submitForm()
  {

      this.registerDetails = JSON.parse(localStorage.getItem('registerDetails')) || [];
      this.registerDetails.push(this.registerDetail);
      localStorage.setItem('registerDetails', JSON.stringify(this.registerDetails));

  
  }

}

