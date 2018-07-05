import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import * as _account from '../class/Account';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public loggedUser: _account.Gatepass.Account = null;

  constructor(private loginService: LoginService,
              private router: Router) {
    this.loggedUser = loginService.getLoggedUser(); //gets the logged user details 
   }

  ngOnInit() {
    if (this.loggedUser != null && this.loggedUser.id > -1) {
      this.router.navigate(["main"]); // navigate to the home component
    }
    else {
      this.router.navigate(["login"]); //navigate to the login component
    }
  }

}
