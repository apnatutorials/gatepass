import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from "../services/login.service";
import * as account from '../class/Account';
import * as request from '../class/ResponseObject';
import { Router } from '@angular/Router';
import { MyHttpRequestService } from '../services/my-http-request.service';
//import { Router } from '@angular/Router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private requestObject: request.Gatepass.ResponseObject = null;
  private loginFormGroup: FormGroup = null;
  private loggedUser: account.Gatepass.Account = null;

  constructor(private loginService: LoginService,
              private router: Router,
              private myHttpRequestService: MyHttpRequestService
            ) { 
    this.loggedUser =  new account.Gatepass.Account();
    this.requestObject = new request.Gatepass.ResponseObject();
  }

  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      "userId" : new FormControl(this.loggedUser.userId, Validators.email),
      "password" : new FormControl( this.loggedUser.password, Validators.required)
    });
  }
  
  private onSubmit(){
    if(this.loginFormGroup.valid){
      console.log(this.loginFormGroup.value.userId);
     
      if(this.loginFormGroup.value.userId == "admin@admin.test" && this.loginFormGroup.value.password == "123"){  
        this.requestObject.command = "login";
        this.requestObject.account = new account.Gatepass.Account();
        this.requestObject.account.userId = this.loginFormGroup.value.userId;
        this.requestObject.account.password = this.loginFormGroup.value.password;
        this.myHttpRequestService.makeHttpRequest(this.requestObject, this.getresponse.bind(this));
      }
    }
    else{
      Object.keys(this.loginFormGroup.controls).forEach(field =>{
        const control = this.loginFormGroup.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

  private getresponse(response){
    console.log("Response Recieved")
    if(response.success == true){
      console.log("In If Condition")
    //  this.loginService.setLoggedUser(response);
      this.loginService.setLoggedUser();
      this.router.navigate(['']);
    }
    else{
      alert("Some Error Occur");
    }
  }
}