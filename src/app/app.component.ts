import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';

import {Fip} from './fip';
import { FipService } from './fip.service';
import { error } from 'util';
import { Fipidentifier } from './fipidentifier';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private fipservice: FipService ) { }
  title = 'Registration';
  Fips;
  f: Fipidentifier[];
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      aadhar: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
      pan: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    });

  }
   getfip()
   {
     this.Fips = new Array <Fip>();
     this.fipservice.getfip().subscribe(data => {
      this.Fips = data;
      this.f= data;

      console.log(data);
      alert(JSON.stringify(data));
     })}

  get fval() { 
    return this.registerForm.controls; 
  }
  //this.user.fullName='';
  signup(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      alert('invalid')
    }else{
    alert('form fields are validated successfully!');  
  }
}
}