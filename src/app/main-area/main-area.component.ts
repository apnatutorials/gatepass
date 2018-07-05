import { Component, OnInit ,EventEmitter } from '@angular/core';
import { LoginService } from '../services/login.service';
import * as account from '../class/Account';
@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent implements OnInit {
  sidenavActions: EventEmitter<any>;
  sidenavParams: any[];
  private loggedUser: account.Gatepass.Account; 
  constructor(private loginService: LoginService) { 
    this.sidenavActions = new EventEmitter<any>();
    this.sidenavParams = [];
    this.loggedUser = this.loginService.getLoggedUser();
  }

  ngOnInit() {
  }

}
