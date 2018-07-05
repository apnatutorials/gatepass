import { Injectable } from '@angular/core';
import * as account from '../class/Account';
/** 
* Login service 
*/
@Injectable()
export class LoginService {

  private loggedUser: account.Gatepass.Account = null;

  constructor() { 
    this.loggedUser = new account.Gatepass.Account(); 
  }

  /** function to set the logged in user details */
  // public setLoggedUser(user: account.Gatepass.Account){
  //   this.loggedUser = user;
  // }

  public setLoggedUser(){
    let user = new account.Gatepass.Account();
    user.userId = "admin@admin.test";
    user.password = "123";
    user.id = 1;
    user.name = "Admin";
    this.loggedUser = user;
  }
  /** function to get the logged in user details */
  public getLoggedUser(): account.Gatepass.Account{
    return this.loggedUser;
  }

}
